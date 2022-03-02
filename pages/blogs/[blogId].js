import BlogDetail from "components/BlogDetail/BlogDetail";
import Head from "next/head";
import Image from "next/image";

export const getServerSideProps = async ({ query: { blogId } }) => {
  const { blog } = await (
    await fetch(`https://api.freerealapi.com/blogs/${blogId}`)
  ).json();
  const { comments } = await (
    await fetch(`https://api.freerealapi.com/comments`)
  ).json();

  const blogComments = comments.filter((comment) => comment.blog === blog._id);

  return {
    props: {
      blog,
      comments: blogComments,
    },
  };
};

const BlogDetailPage = ({ blog, comments }) => {
  console.log({ blog, comments });
  return (
    <>
      <Head>
        <title>houstory: blog {blog.title}</title>
        <meta name="description" content={blog.title} />
      </Head>
      <main className="min-h-[75vh] p-5">
        <BlogDetail blog={blog} />
      </main>
    </>
  );
};

export default BlogDetailPage;
