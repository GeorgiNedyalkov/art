import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { nanoid } from "nanoid";

import Comment from "./Comment/Comment";

import { artServiceFactory } from "../../services/artService";
import { useAuthContext } from "../../context/AuthContext";
import * as commentService from "../../services/commentService";

import "./ArtDetails.css";

const ArtDetails = ({ onDeleteArt }) => {
  const { artId } = useParams();
  const { userId } = useAuthContext();
  const [art, setArt] = useState({});
  const [comments, setComments] = useState([]);
  const [text, setText] = useState("");
  const [username, setUsername] = useState("");
  const artService = artServiceFactory();

  useEffect(() => {
    artService.getOne(artId).then((result) => {
      setArt(result);
    });
    commentService.getAll(artId).then((result) => {
      setComments(result);
    });
  }, [artId, comments]);

  const onCommentSubmit = async (e) => {
    e.preventDefault();

    const comment = await commentService.create(artId, {
      username,
      text,
    });

    setArt((state) => ({ ...state, comments: [...state.comments, comment] }));
    setUsername("");
    setText("");
  };

  const isOwner = userId === art.ownerId;

  return (
    <section id="art-details-page">
      <div className="art-header">
        <h1 className="art-details-title">{art.name}</h1>
        <p className="art-details-year">{art.year}</p>
      </div>
      <div className="art-details-image-wrapper">
        <img className="art-details-img" src={art.imageUrl} alt={art.name} />
      </div>
      <div className="art-details">
        <div className="art-details-info">
          <div>
            <h4>
              Artist: <span className="art-info-text">{art.artist}</span>
            </h4>
            <h4>
              Method: <span className="art-info-text">{art.method}</span>{" "}
            </h4>
            <h4>
              Movement: <span className="art-info-text">{art.movement}</span>
            </h4>
          </div>
        </div>
      </div>
      <div className="art-details-description">
        <h4>Description</h4>
        <p>{art.description}</p>
      </div>

      {isOwner && (
        <div className="art-details-btn">
          <Link to={`/catalog/${artId}/edit`}>
            <button className="btn edit">Edit</button>
          </Link>
          <button onClick={() => onDeleteArt(art._id)} className="btn delete">
            delete
          </button>
        </div>
      )}

      <div className="comments">
        <h3 className="comments__heading">Comments:</h3>
        {art.comments?.map((comment) => (
          <Comment key={nanoid()} {...comment} />
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
