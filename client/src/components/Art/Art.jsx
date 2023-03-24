import "./Art.css";

const Art = ({ name, year, imageUrl, method, size, description, artist }) => {
  return (
    <article className="art">
      <h2 className="art-name">{name}</h2>
      <p className="art-year">{year}</p>
      <div className="art-img-wrapper">
        <img className="art-img" src={imageUrl} alt={`${name} by ${artist}`} />
      </div>
      <p className="art-medium">{method}</p>
      <p className="art-dimensions">{size}</p>
      <p className="art-description">{description.slice(0, 200)}</p>
    </article>
  );
};

export default Art;
