import "./Catalogue.css";
import Paintings from "./Paintings/Paintings";
import Filters from "./Filters/Filters";

const Catalogue = ({ paintings, onSearchSubmit }) => {
  return (
    <div>
      <h2>Catalogue</h2>
      <Filters onSearchSubmit={onSearchSubmit} />
      <Paintings paintings={paintings} />
    </div>
  );
};

export default Catalogue;
