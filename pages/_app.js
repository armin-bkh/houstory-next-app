import AuthProvider from "@/providers/AuthProvider/AuthProvider";
import Layout from "layout/Layout";
import Head from "next/head";
import { ToastProvider } from "react-toast-notifications";
import "styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <ToastProvider autoDismiss newestOnTop placement="top-right">
        <Head>
          <title>houstory</title>
          <meta
            name="description"
            content="blog website for your reading time"
          />
        </Head>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ToastProvider>
    </AuthProvider>
  );
}

export default MyApp;
