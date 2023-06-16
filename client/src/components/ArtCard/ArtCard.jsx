import { Link } from "react-router-dom";
import "./ArtCard.css";

const ArtCard = ({ _id, name, year, imageUrl, description, artist }) => {
  return (
    <article className="art">
      <div className="art-header">
        <h2 className="art-name">{name.slice(0, 35)}</h2>
      </div>
      <Link to={`/catalog/${_id}`}>
        <div className="art-img-wrapper">
          <img
            className="art-img"
            src={imageUrl}
            alt={`${name} by ${artist}`}
          />
        </div>
      </Link>
      <div className="art-information">
        <div className="art-subhead">
          <p className="art-artist">{artist}</p>
          <p className="art-year">{year}</p>
        </div>
        <p className="art-description">{description?.slice(0, 200)}</p>
        <button className="btn">
          <Link className="art-link" to={`/catalog/${_id}`}>
            Learn more
          </Link>
        </button>
      </div>
    </article>
  );
};

export default ArtCard;
