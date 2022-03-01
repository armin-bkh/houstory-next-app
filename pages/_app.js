import AuthProvider from "@/providers/AuthProvider/AuthProvider";
import Layout from "layout/Layout";
import Head from "next/head";
import "styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Head>
        <title>houstory</title>
        <meta name="description" content="blog website for your reading time" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AuthProvider>
  );
}

export default MyApp;
