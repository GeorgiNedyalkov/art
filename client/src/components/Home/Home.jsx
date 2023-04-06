import Paintings from "../Paintings/Piantings";
import "./Home.css";

const Home = ({ paintings }) => {
  return (
    <main>
      <div className="hero">
        <div>
          <h1>Welcome to the Art Hub</h1>
          <p>Share your art and your interpretations with others</p>
        </div>

        <div className="hero-img-container">
          <img
            className="hero-img"
            src="https://t1.gstatic.com/licensed-image?q=tbn:ANd9GcQ-FvbbAq5IaJUhtwxXEwY0D-jiZju02ejnNHx_bQWL_27GF3srhwJgqusMAqKh3QqU"
            alt="hero image: the mona lisa"
          />
        </div>
      </div>

      <h2>Catalogue</h2>

      <div>
        <Paintings paintings={paintings} />
      </div>
    </main>
  );
};

export default Home;
