import "../styles/globals.css";
import { useRouter } from "next/router";
import PageTransitions from "../components/PageTransitions";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
