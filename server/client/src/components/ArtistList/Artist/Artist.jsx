import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { artistServiceFactory } from "../../../services/artistService";

import "./Artist.css";

const Artist = () => {
  const { artistId } = useParams();
  const artistSerice = artistServiceFactory();
  const [artist, setArtist] = useState({});

  useEffect(() => {
    artistSerice.getOne(artistId).then((data) => setArtist(data));
  }, []);

  const artWork = artist.artworks?.map((painting) => (
    <li key={painting.name}>
      <h4 className="artist__painting-name">{painting.name}</h4>
      <div className="artist__painting-container">
        <img
          className="artist__painting"
          src={painting.imageUrl}
          alt={painting.name}
        />
      </div>
    </li>
  ));

  return (
    <article className="artist">
      <h1 className="artist__name">{artist.name}</h1>

      <p>
        {artist.born} born in {artist.birthplace}
      </p>

      <div className="artist__top-section">
        <div className="artist__image-container">
          <img
            className="artist__image"
            src={artist.imageUrl}
            alt={artist.name}
          />
        </div>
        <div>
          <h3 className="artist__bio__header">Biography:</h3>
          <p className="artist__bio">{artist.bio}</p>
        </div>
      </div>

      <div>
        <h3 className="artist__artwork__header">Artworks: </h3>
        <ul className="artist__artwork">{artWork}</ul>
      </div>
    </article>
  );
};

export default Artist;
