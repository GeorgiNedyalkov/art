import ArtCard from "../../ArtCard/ArtCard";
import "./Paintings.css";

const Paintings = ({ paintings }) => {
  return (
    <ul className="paintings">
      {paintings.map((p) => {
        return (
          <li key={p._id}>
            <ArtCard {...p} />
          </li>
        );
      })}
    </ul>
  );
};

export default Paintings;
