import "../styles/globals.css";
import { useRouter } from "next/router";
import PageTransitions from "../components/PageTransitions";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <PageTransitions route={router.asPath}>
      <Component {...pageProps} />
    </PageTransitions>
  );
}

export default MyApp;
