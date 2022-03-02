import { UserCircleIcon } from "@heroicons/react/solid";

const CommentItem = ({ comment }) => {
  return (
    <li className="bg-gray-200 border-b border-black last:border-0 rounded-lg mb-2 last:mb-0 flex items-center">
      <div>
          <UserCircleIcon className="w-14 text-gray-500"/>
      </div>
      <div className="p-1">
        <div className=" border-b border-gray-300">
          <p className="text-sm">{comment.user.name}</p>
          <p className="text-xs text-gray-400 ml-2 -mt-1">
            {comment.user.email}
          </p>
        </div>
        <p className="text-sm">{comment.text}</p>
      </div>
    </li>
  );
};

export default CommentItem;
