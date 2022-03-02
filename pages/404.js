import Head from "next/head";
import Link from "next/link";

const NotFound = () => {
  return (
    <>
      <Head>
        <title>houstory: 404</title>
      </Head>
      <div className="flex flex-col items-center justify-center min-h-[75vh]">
        <h1 className="text-8xl md:text-9xl text-amber-300 mb-5">404</h1>
        <p className="text-xs mb-5">this page could not be find</p>
        <Link href="/">
          <a className="bg-black text-white px-10 py-1 rounded-sm text-sm">
            back to home
          </a>
        </Link>
      </div>
    </>
  );
};

export default NotFound;
