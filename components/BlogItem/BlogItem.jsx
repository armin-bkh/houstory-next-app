import Image from "next/image";
import { useRouter } from "next/router";

const BlogItem = ({ blog }) => {
  const router = useRouter();
  return (
    <article className="h-min">
      <div
        className="border-b-2 border-black shadow-xl cursor-pointer"
        onClick={() => router.push(`/blogs/${blog._id}`)}
      >
        <div className={`relative w-full h-60 sm:h-72 md:h-80 overflow-hidden`}>
          <Image
            className="hover:scale-150 hover:skew-x-12 transform transition"
            src={blog.image}
            layout="fill"
            alt={blog.title}
          />
        </div>
        <div className="my-5 h-0.5 w-full rounded-sm bg-black"></div>
        <div className="p-2 flex flex-col">
          <h2 className="text-sm lg:text-lg mb-5">{blog.title}</h2>
          <p className="text-xs text-gray-600 text-justify">
            {blog.text.substring(0, 500)}
            ...
          </p>
          <button
            className="bg-black transition text-white mt-10 px-3 py-1
            rounded-sm animate-pulse self-end hover:animate-none text-sm"
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
