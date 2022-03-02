import Image from "next/image";

const BlogDetail = ({ blog }) => {
  return (
    <article className="w-full md:w-10/12 mx-auto shadow-xl rounded-md overflow-hidden">
      <div className="relative w-full h-[65vh]">
        <div className="absolute top-2 left-2 z-20 flex whitespace-nowrap overflow-auto">
          {blog.tags.map((tag, index) => (
            <p
              className="px-2 py-1 rounded-md bg-gray-300 mr-2 last:mr-0 text-xs"
              key={index}
            >
              {tag}
            </p>
          ))}
        </div>
        <Image src={blog.image} layout="fill" />
      </div>
      <div className="p-3 text-2xl flex flex-col">
        <h1>{blog.title}</h1>
        <p className="text-sm text-justify p-5 leading-7 text-gray-500">
          {blog.text}
        </p>
        <div className="text-xs text-gray-400 self-start">
          published by:
          <p className="mt-1">{blog.user.name}</p>
          <p>{blog.user.email}</p>
        </div>
      </div>
    </article>
  );
};

export default BlogDetail;
