export function Component() {
  return (
    <article className="prose prose-sm prose-neutral sm:prose-base lg:prose-lg xl:prose-xl 2xl:prose-2xl dark:prose-invert">
      <header>
        <h1>Hello, World!</h1>
      </header>
      <p>
        We are a small team of software engineers spread out all across the
        world, building apps that help and make people better.
      </p>
      <footer>
        <nav>
          <a
            href="https://allyfile.com/"
            target="_blank"
            rel="noreferrer noopener"
            className="underline-offset-8"
          >
            AllyFile
          </a>
          &nbsp;·&nbsp;
          <a
            href="https://allyweds.com/"
            target="_blank"
            rel="noreferrer noopener"
            className="underline-offset-8"
          >
            AllyWeds
          </a>
          &nbsp;·&nbsp;
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
