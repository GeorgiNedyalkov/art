import "./Art.css";

const Art = () => {
  return (
    <article className="art">
      <h2 className="art-name">The Persistance of Memory</h2>
      <p className="art-year">1983</p>
      <div className="art-img-wrapper">
        <img
          className="art-img"
          src="https://www.singulart.com/blog/wp-content/uploads/2019/08/the-persistence-of-memory-1931-1140x867.jpg"
          alt=""
        />
      </div>
      <p className="art-medium">Oil on canvas</p>
      <p className="art-dimensions">24 cm x 33 cm (9.5 in * 13 in)</p>
      <p className="art-description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, sequi. Ab
        dolore veritatis temporibus neque, qui voluptatum recusandae est dolorem
        quod omnis suscipit mollitia velit et laboriosam, ullam iste ducimus? Ex
        aliquid culpa nam fuga provident minima, veritatis alias facere
        voluptatum assumenda amet impedit deleniti eius itaque, consequatur.
      </p>
    </article>
  );
};

export default Art;
