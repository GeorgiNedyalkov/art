import { Link } from "react-router-dom";
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
  return (
    <article className="art">
      <h2 className="art-name">{name.slice(0, 35)}</h2>
      <p className="art-artist">{artist}</p>
      <p className="art-year">{year}</p>
      <Link to={`/catalog/${_id}`}>
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
    </article>
  );
};

export default Art;
