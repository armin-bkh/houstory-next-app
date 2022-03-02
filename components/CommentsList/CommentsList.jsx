import CommentItem from "./CommentItem/CommentItem";

const CommentsList = ({ comments }) => {
  return (
    <div>
      <ul className="p-2">
        {comments.map((comment) => (
          <CommentItem key={comment._id} comment={comment} />
        ))}
      </ul>
    </div>
  );
};

export default CommentsList;
