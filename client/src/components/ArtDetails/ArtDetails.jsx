import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

import { artServiceFactory } from "../../services/artService";
import "./ArtDetails.css";
import { useAuthContext } from "../../context/AuthContext";

const ArtDetails = ({ onDeleteArt }) => {
  const { artId } = useParams();
  const [art, setArt] = useState({});
  const artService = artServiceFactory();
  const [username, setUsername] = useState("");
  const [text, setText] = useState("");
  const { userId } = useAuthContext();

  useEffect(() => {
    artService.getOne(artId).then((result) => {
      setArt(result);
    });
  }, [artId]);

  const onCommentSubmit = async (e) => {
    e.preventDefault();

    const comment = await artService.addComment(artId, {
      username,
      text,
    });

    setArt((state) => ({ ...state, comments: [...state.comments, comment] }));
    setUsername("");
    setText("");
  };

  const isOwner = userId === art.ownerId;

  console.log(art.ownerId);

  console.log(isOwner);

  return (
    <section id="art-details-page">
      <h1 className="art-details-title">{art.name}</h1>
      <p className="art-details-year">{art.year}</p>
      <Link to={`/catalog/${artId}/edit`}>
        <button className="btn edit">Edit</button>
      </Link>
      <button onClick={() => onDeleteArt(art._id)} className="btn delete">
        delete
      </button>
      <img className="art-details-img" src={art.imageUrl} alt={art.name} />
      <div className="art-details">
        <div className="art-details-description">
          <h4>Artist:</h4>
          <p>{art.artist}</p>
          <h4>Method: </h4>
          <p>{art.method}</p>
          <h4>Movement:</h4>
          <p>{art.movement}</p>
        </div>
        <div>
          <h4>Description</h4>
          <p>{art.description}</p>
        </div>
      </div>

      <div className="comments">
        <h3>Comments:</h3>
        {art.comments?.map((comment) => (
          <p key={comment.username}>
            {comment.username}: {comment.text}
          </p>
        ))}
      </div>

      <form onSubmit={onCommentSubmit}>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username: "
          type="text"
          name="username"
          id="username"
        />
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Comment..."
          name="comment"
          id="comment"
          cols="30"
          rows="10"
        ></textarea>
        <button className="btn" type="submit">
          Add Comment
        </button>
      </form>
    </section>
  );
};

export default ArtDetails;
