import Art from "../../Art/Art";
import "./Paintings.css";

const Paintings = ({ paintings }) => {
  return (
    <ul className="paintings">
      {paintings.map((p) => {
        return (
          <li key={p._id}>
            <Art {...p} />
          </li>
        );
      })}
    </ul>
  );
};

export default Paintings;
