import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>saisuke.div</title>
      </Head>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
