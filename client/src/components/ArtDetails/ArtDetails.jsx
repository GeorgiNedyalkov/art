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
      <img src={art.imageUrl} alt={art.name} />
      <div className="art-details">
        <div className="art-details-description">
          <p>Artist: {art.artist}</p>
          <p>Method: {art.method}</p>
          <p>Movement: {art.movement}</p>
        </div>
        <p>{art.description}</p>
      </div>
    </section>
  );
};

export default ArtDetails;
