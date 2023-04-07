import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getOne } from "../../services/artService";
import "./ArtDetails.css";

const ArtDetails = () => {
  const [art, setArt] = useState({});
  const { artId } = useParams();

  useEffect(() => {
    getOne(artId).then((data) => setArt(data));
  }, []);

  return (
    <section id="art-details-page">
      <h1 className="art-details-title">{art.name}</h1>
      <p className="art-details-year">{art.year}</p>
      <button className="btn edit">Edit</button>
      <img className="art-details-img" src={art.imageUrl} alt={art.name} />
      <div className="art-details">
        <div className="art-details-description">
          <p>
            <h4>Artist:</h4> {art.artist}
          </p>
          <p>
            <h4>Method: </h4> {art.method}
          </p>
          <p>
            <h4>Movement:</h4> {art.movement}
          </p>
        </div>
        <div>
          <h4>Description</h4>
          <p>{art.description}</p>
        </div>
      </div>
    </section>
  );
};

export default ArtDetails;
