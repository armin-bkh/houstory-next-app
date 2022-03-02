import Image from "next/image";

const BlogDetail = ({ blog }) => {
  return (
    <article>
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
        <Image src={blog.image} layout="fill" alt={blog.title} priority/>
        <div className="absolute z-20 bottom-2 right-2 text-xs text-gray-300 self-start">
          <p className="mt-1">{blog.user.name}</p>
          <p>{blog.user.email}</p>
        </div>
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
