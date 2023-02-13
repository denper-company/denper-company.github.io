import fbt from "fbt";
import Img from "components/common/img";
import Link from "components/common/link";
import useSEO from "hooks/seo";

export default function Section() {
  useSEO({
    title: fbt("DENPER Company", "title"),
    description: fbt(
      "We are a small team of software engineers spread out all across the world, building apps that help and make people better.",
      "description"
    ),
  });
  return (
    <section className="flex flex-auto flex-col items-center justify-center gap-4 p-4">
      <article className="prose prose-sm prose-neutral mx-auto lg:prose-lg xl:prose-2xl">
        <h1>
          <fbt desc="greetings">Hello World!</fbt>
        </h1>
        <p className="lead">
          <fbt desc="description">
            We are a small team of software engineers spread out all across the
            world, building apps that help and make people better. Our products
            are{" "}
            <Link
              href="https://allyfile.com/"
              target="_blank"
              title="AllyFile"
              rel="noreferrer noopener"
            >
              AllyFile
            </Link>{" "}
            and{" "}
            <Link
              href="https://allyweds.com/"
              target="_blank"
              title="AllyWeds"
              rel="noreferrer noopener"
            >
              AllyWeds
            </Link>.
          </fbt>
        </p>
      </article>
      <div className="flex flex-wrap items-center justify-center gap-4 text-center">
        <figure className="grid gap-2">
          <Img
            className="aspect-auto h-40 w-40 animate-pulse cursor-zoom-in rounded-full bg-gray1 bg-avatar bg-cover bg-center bg-no-repeat object-cover shadow-inner"
            src={`${process.env.PUBLIC_URL}/vdc`}
            width="1920"
            height="2560"
            sizes="50vw"
            alt="VDC"
            loading="lazy"
            onLoad={(event) =>
              event.currentTarget.classList.remove("animate-pulse")
            }
          />
          <figcaption className="grid gap-1 font-medium">
            <span>
              <fbt desc="name">Denesh</fbt>
            </span>
            <Link href="tel:+918667838933" className="underline">
              <fbt desc="caption">Founder</fbt>
            </Link>
          </figcaption>
        </figure>
        <figure className="grid gap-2">
          <Img
            className="aspect-auto h-40 w-40 animate-pulse cursor-zoom-in rounded-full bg-gray1 bg-avatar bg-cover bg-center bg-no-repeat object-cover shadow-inner"
            src={`${process.env.PUBLIC_URL}/vpc`}
            width="3024"
            height="4032"
            sizes="50vw"
            alt="VPC"
            loading="lazy"
            onLoad={(event) =>
              event.currentTarget.classList.remove("animate-pulse")
            }
          />
          <figcaption className="grid gap-1 font-medium">
            <span>
              <fbt desc="name">Perakash</fbt>
            </span>
            <Link
              href="https://vpcvdc.github.io/"
              target="_blank"
              rel="noreferrer noopener"
              className="underline"
            >
              <fbt desc="caption">Chakravarthy</fbt>
            </Link>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
