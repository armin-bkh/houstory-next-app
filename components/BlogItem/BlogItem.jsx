import Image from "next/image";
import { useRouter } from "next/router";

const BlogItem = ({ blog }) => {
  const router = useRouter();
  return (
    <article className="h-fit">
      <div
        className="border-b-2 border-black flex flex-col shadow-xl"
        onClick={() => router.push(`/blogs/${blog._id}`)}
      >
        <div className="relative w-full h-60 overflow-hidden">
          <Image
            className="hover:scale-150 hover:skew-x-12 transform transition"
            src={blog.image}
            layout="fill"
            alt={blog.title}
          />
        </div>
        <div className="my-5 h-0.5 w-full rounded-sm bg-black"></div>
        <div className="p-2">
          <h2 className="text-sm lg:text-lg mb-5">{blog.title}</h2>
          <p className="text-xs text-gray-600">
            {blog.text.substring(
              0,
              Math.floor(Math.random() * (800 - 100 + 1)) + 100
            )}
            ...
          </p>
          <button
            className="bg-black transition text-white mt-10 px-3 py-1 slef-end rounded-sm animate-pulse hover:bg-transparent hover:text-black"
            onClick={() => router.push(`/blogs/${blog._id}`)}
          >
            read more
          </button>
        </div>
      </div>
    </article>
  );
};

export default BlogItem;
