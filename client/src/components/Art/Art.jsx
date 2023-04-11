import { Link } from "react-router-dom";

import { artServiceFactory } from "../../services/artService";

import "./Art.css";

const Art = ({
  _id,
  name,
  year,
  imageUrl,
  method,
  size,
  description,
  artist,
}) => {
  const artSevice = artServiceFactory();

  const onDeleteArt = async (artId) => {
    await artSevice.delete(artId);

    // TODO: delete from state

    // setPaintings((state) => state.filter((art) => art._id !== artPiece._id));
  };

  return (
    <article className="art">
      <h2 className="art-name">{name.slice(0, 35)}</h2>
      <p className="art-artist">{artist}</p>
      <p className="art-year">{year}</p>
      <Link to={`catalog/${_id}`}>
        <div className="art-img-wrapper">
          <img
            className="art-img"
            src={imageUrl}
            alt={`${name} by ${artist}`}
          />
        </div>
      </Link>
      <p className="art-medium">{method}</p>
      <p className="art-dimensions">{size}</p>
      <p className="art-description">{description?.slice(0, 200)}</p>
      {/* <button onClick={() => onDeleteArt(_id)} className="btn delete">
        delete
      </button> */}
    </article>
  );
};

export default Art;
