import "./Comment.css";

const Comment = ({ username, text }) => {
  return (
    <div className="comment">
      <h4 className="comment__username">{username}: </h4>
      <p className="comment__text">{text}</p>
    </div>
  );
};

export default Comment;
