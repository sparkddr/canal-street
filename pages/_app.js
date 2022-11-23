import "../styles/globals.css";
import { useRouter } from "next/router";
import PageTransitions from "../components/PageTransitions";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps, router }) {
  return (
    <Layout>
      <Component {...pageProps} key={router.route} />
    </Layout>
  );
}

export default MyApp;
