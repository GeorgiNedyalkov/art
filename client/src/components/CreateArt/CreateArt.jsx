import { useState } from "react";
import "./CreateArt.css";

const CreateArt = () => {
  const [formValues, setFormValues] = useState({
    name: "",
    imageUrl: "",
    year: "",
    method: "",
    description: "",
  });

  const onValueChange = (e) => {
    setFormValues((state) => ({ ...state, [e.target.name]: e.target.value }));
  };

  const onFormSubmit = (e) => {
    e.preventDefault();

    console.log("submitted");

    // TODO: add art to server

    // TODO: add art to state
  };

  return (
    <div>
      <h2 className="page-title">Create Art</h2>
      <form action="post" onSubmit={onFormSubmit}>
        <div>
          <label htmlFor="name">Name: </label>
          <input
            value={formValues.name}
            onChange={onValueChange}
            type="text"
            name="name"
            id="name"
          />
        </div>
        <div>
          <label htmlFor="imageUrl">Image: </label>
          <input
            value={formValues.imageUrl}
            onChange={onValueChange}
            type="text"
            name="imageUrl"
            id="imageUrl"
          />
        </div>
        <div>
          <label htmlFor="year">Year: </label>
          <input
            value={formValues.year}
            onChange={onValueChange}
            type="number"
            name="year"
            id="year"
          />
        </div>
        <div>
          <label htmlFor="method">Method: </label>
          <input
            value={formValues.method}
            onChange={onValueChange}
            type="text"
            name="method"
            id="method"
          />
        </div>
        <div>
          <label htmlFor="description">Description: </label>
          <textarea
            value={formValues.description}
            onChange={onValueChange}
            name="description"
            id="description"
          ></textarea>
        </div>
        <input type="submit" value="Create Art" />
      </form>
    </div>
  );
};

export default CreateArt;
