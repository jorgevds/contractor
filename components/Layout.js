import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children, title = "Contractor" }) {
  return (
    <div className="fullBody">
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Contractor: de website voor zaken, freelancers en particulieren!"
        />
        <meta
          property="og:title"
          content="Freelance werk doen en laten bij Contractor!"
        />
        <meta
          property="og:description"
          content="Contractor: de website voor zaken, freelancers en particulieren!"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="FB and twitter thumbnail photo (must be URL)"
        />
        <meta property="og:url" content="https://bit.ly/2RVU3Wc" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:image:alt"
          content="De homepagina van ons webplatform, Contractor!"
        />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="favicon/site.webmanifest" />
        <link
          rel="mask-icon"
          href="favicon/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
