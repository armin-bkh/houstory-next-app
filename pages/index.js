import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

export const getStaticProps = async () => {
  const { blogs } = await (
    await fetch("https://api.freerealapi.com/blogs")
  ).json();

  return {
    props: {
      blogs: blogs.splice(0, 3),
    },
  };
};

export default function Home({ blogs }) {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>houstory: home</title>
      </Head>
      <main>
        <section className="grid grid-cols-1 md:grid-cols-2 h-screen">
          <div className="relative hidden md:block shadow-xl">
            <Image src="/images/newspaper.jpeg" layout="fill" priority />
          </div>
          <div className="flex justify-center items-center">
            <h1 className="w-52 text-5xl md:text-6xl font-bold">
              You will know every thing in houstory
            </h1>
          </div>
        </section>
        <section className="flex flex-col sm:flex-row flex-wrap justify-evenly items-center p-5">
          {blogs.map((blog) => (
            <article
              onClick={() => router.push(`/blogs/${blog._id}`)}
              className="w-full md:w-5/12 lg:w-3/12 shadow-md hover:shadow-xl transition cursor-pointer rounded-sm overflow-hidden mb-5 lg:mb-0 last:mb-0"
              key={blog._id}
            >
              <div className="w-full relative h-60 mb-1">
                <Image
                  src={blog.image}
                  layout="fill"
                />
              </div>
              <div className="p-3 flex flex-col">
                <h4 className="text-sm mb-3">{blog.title}</h4>
                <p className="text-xs mb-7">{blog.text.substring(0, 150)}...</p>
                <Link href={`/blogs/${blog._id}`} passHref>
                  <button className="py-1 px-2 text-sm border rounded-sm border-black self-end hover:bg-black hover:text-white transition">
                    read more
                  </button>
                </Link>
              </div>
            </article>
          ))}
        </section>
      </main>
    </>
  );
}
