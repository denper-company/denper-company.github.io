export function Component() {
  return (
    <article className="prose prose-sm prose-neutral sm:prose-base lg:prose-lg xl:prose-xl 2xl:prose-2xl dark:prose-invert">
      <header>
        <h1>Hello, World!</h1>
      </header>
      <p className="text-balance">
        We are a small team of software engineers spread out all across the
        world, building apps that help and make people better.
      </p>
      <footer>
        <nav className="inline-flex gap-1">
          <a
            href="https://allyfile.com/"
            target="_blank"
            rel="noreferrer noopener"
            className="underline-offset-8"
          >
            AllyFile
          </a>
          -
          <a
            href="https://allyweds.com/"
            target="_blank"
            rel="noreferrer noopener"
            className="underline-offset-8"
          >
            AllyWeds
          </a>
          -
          <a
            href="https://allyspot.com/"
            target="_blank"
            rel="noreferrer noopener"
            className="underline-offset-8"
          >
            AllySpot
          </a>
        </nav>
      </footer>
    </article>
  );
}
