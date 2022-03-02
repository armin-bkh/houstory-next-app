import BlogItem from "components/BlogItem/BlogItem";
import Head from "next/head";

export const getStaticProps = async () => {
  const { blogs } = await (
    await fetch("https://api.freerealapi.com/blogs")
  ).json();

  return {
    props: {
      blogs,
    },
  };
};

const BlogsPage = ({ blogs }) => {
  return (
    <>
      <Head>
        <title>houstory: Blogs</title>
        <meta name="description" content="blogs page for reading time" />
      </Head>
      <main className="min-h-[75vh] p-5 grid grid-cols-1 md:grid-cols-mdBlogList lg:grid-cols-blogsList grid-flow-row-dense gap-5">
        {blogs.map((blog) => (
          <BlogItem key={blog._id} blog={blog} />
        ))}
      </main>
    </>
  );
};

export default BlogsPage;
