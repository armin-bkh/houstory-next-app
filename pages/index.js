import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>houstory: home</title>
      </Head>
      <main className="grid grid-cols-1 md:grid-cols-2 h-screen">
        <div className="flex justify-center items-center">
          <h1 className="w-52 text-5xl md:text-6xl font-bold">You will know every thing in houstory</h1>
        </div>
        <div className="relative hidden md:block">
          <Image src="/images/newspaper.jpeg" layout="fill" />
        </div>
      </main>
    </>
  );
}
