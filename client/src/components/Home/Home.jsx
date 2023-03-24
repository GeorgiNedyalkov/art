import Art from "../Art/Art";
import "./Home.css";

const Home = ({ paintings }) => {
  return (
    <>
      <h1>Home of the Art</h1>

      {/* <img
        className="hero-img"
        src="https://t1.gstatic.com/licensed-image?q=tbn:ANd9GcQ-FvbbAq5IaJUhtwxXEwY0D-jiZju02ejnNHx_bQWL_27GF3srhwJgqusMAqKh3QqU"
        alt=""
      /> */}

      <p>Share your art and your interpretations with others</p>

      <h3>Here are some the most notable paintings in our life time</h3>

      <div>
        <ul className="paintings">
          {paintings.map((p) => {
            return (
              <li key={p.id}>
                <Art {...p} />
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Home;
