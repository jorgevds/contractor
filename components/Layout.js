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
          content="contractor website voor zaken, freelancers en particulieren"
        />

        <link rel="icon" href="/images/favicon.png" />
      </Head>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
