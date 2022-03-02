import CommentItem from "./CommentItem/CommentItem";

const CommentsList = ({ comments }) => {
  return (
    <div className="border-t border-black">
      <ul className="p-2">
        {comments.map((comment) => (
          <CommentItem key={comment._id} comment={comment} />
        ))}
      </ul>
    </div>
  );
};

export default CommentsList;
