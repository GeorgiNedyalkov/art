import Paintings from "../Catalogue/Paintings/Paintings";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = ({ paintings, artists }) => {
  return (
    <main>
      <section className="hero">
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
      </section>

      <section className="catalog">
        <div className="catalog-copy">
          <h2>Catalog</h2>

          <p className="copy">
            Browse through all the beautiful paitings in our lifetime
          </p>
          <Link to="/catalog">
            <button className="btn">See Catalog</button>
          </Link>
        </div>
        <div className="home-paintings">
          <Paintings paintings={paintings.slice(0, 3)} />
        </div>
      </section>

      <section className="create-art">
        <div className="create-art-copy">
          <h2>Share your paintings with others</h2>
          <p>
            You can add your own art work for others to like and comment on.
          </p>
          <Link to="/create-art">
            <button className="btn">Create Art</button>
          </Link>
        </div>
        <div className="home-img-container">
          <img
            className="home-img"
            src="https://arthive.net/res/media/img/orig/work/b0b/299075.jpeg"
            alt=""
          />
        </div>
      </section>

      <section className="artists">
        <h2 className="left">Artists</h2>
        <ul className="artist__list">
          {artists.map((artist) => (
            <li key={artist._id}>
              <Link to={`/artists/${artist._id}`}>
                <h4>{artist.name}</h4>
                <div className="artist__card-container">
                  <img
                    className="artist__card"
                    src={artist.imageUrl}
                    alt={artist.name}
                  />
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
};

export default Home;
