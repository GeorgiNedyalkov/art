import Art from "../Art/Art";

const Paintings = ({ paintings }) => {
  return (
    <ul className="paintings">
      {paintings.map((p) => {
        return (
          <li key={p.id}>
            <Art {...p} />
          </li>
        );
      })}
    </ul>
  );
};

export default Paintings;
