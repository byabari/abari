import Resume, { Technologies } from "@/components/Resume";

export const metadata = {
  title: "Abari",
  description:
    "Hi, I'm Abari. I'm a product-minded Front-End Engineer. I enjoy building web apps from design to production.",
  openGraph: {
    title: "Abari",
    description:
      "Hi, I'm Abari. I'm a product-minded Front-End Engineer. I enjoy building web apps from design to production.",
    url: "https://abari.cc",
    siteName: "Abari",
    images: [
      {
        url: "https://nextjs.org/og.png",
        width: 800,
        height: 600,
      },
      {
        url: "https://nextjs.org/og-alt.png",
        width: 1800,
        height: 1600,
        alt: "Abari og image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function HomePage() {
  return (
    <>
      <div className="h-[60vh] flex flex-col justify-center">
        <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-4">
          Hi, I'm Abari
        </h1>
        <h2 className="text-lg sm:text-xl font-semibold mb-3">
          I'm a product-minded Front-End Engineer
        </h2>
        <p className="mb-4 max-w-[620px]">
          I enjoy building web apps from design to production. My latest project
          is{" "}
          <a
            className="underline underline-offset-4"
            href="https://signer.abari.cc"
            target="_blank"
          >
            Signer
          </a>
          . My favorite tools are
        </p>
        <Technologies technologies={["React", "Next.js", "TypeScript"]} />
      </div>
      <Resume />
    </>
  );
}
