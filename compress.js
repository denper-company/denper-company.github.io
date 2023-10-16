const { promises, createReadStream, createWriteStream } = require("node:fs");
const { join } = require("node:path");
const { pipeline } = require("node:stream/promises");
const { createBrotliCompress, createGzip, constants } = require("node:zlib");

const createPipe = async (input, compress, output) => {
  const source = createReadStream(input);
  const destination = createWriteStream(output);
  await pipeline(source, compress, destination);
};

const brotliCompress = async (input, output) => {
  const brotli = createBrotliCompress({
    params: {
      [constants.BROTLI_PARAM_QUALITY]: constants.BROTLI_MAX_QUALITY,
    },
  });
  await createPipe(input, brotli, output);
};

const gzipCompress = async (input, output) => {
  const gzip = createGzip({
    level: constants.Z_BEST_COMPRESSION,
  });
  await createPipe(input, gzip, output);
};

const doCompress = async (ipath, opath) => {
  const dir = await promises.readdir(ipath, { withFileTypes: true });
  for await (const dirent of dir) {
    if (dirent.isFile()) {
      await brotliCompress(
        join(ipath, dirent.name),
        join(opath, `${dirent.name}.br`),
      );
      await gzipCompress(
        join(ipath, dirent.name),
        join(opath, `${dirent.name}.gz`),
      );
    } else if (dirent.isDirectory()) {
      await doCompress(`${ipath}/${dirent.name}`, `${opath}/${dirent.name}`);
    }
  }
};

doCompress(join("public"), join("build")).catch(console.error);
