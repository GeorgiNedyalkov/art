import { useEffect } from "react";
import { useForm } from "../../hooks/useForm";

import { useParams } from "react-router-dom";
import { artServiceFactory } from "../../services/artService";

const EditArt = ({ onEditArtSubmit }) => {
  const { artId } = useParams();
  const artService = artServiceFactory();
  const { values, changeHandler, onSubmit, changeValues } = useForm(
    {
      _id: "",
      name: "",
      artist: "",
      imageUrl: "",
      year: "",
      method: "",
      movement: "",
      size: "",
      description: "",
    },
    onEditArtSubmit
  );

  useEffect(() => {
    artService.getOne(artId).then((result) => {
      changeValues(result);
    });
  }, [artId]);

  return (
    <section>
      <h1>Edit Art</h1>
      <form action="post" onSubmit={onSubmit}>
        <div>
          <label htmlFor="name"></label>
          <input
            value={values.name}
            onChange={changeHandler}
            type="text"
            name="name"
            id="name"
            placeholder="Name"
          />
        </div>
        <div>
          <label htmlFor="artist"></label>
          <input
            value={values.artist}
            onChange={changeHandler}
            type="text"
            name="artist"
            id="artist"
            placeholder="Artist"
          />
        </div>
        <div>
          <label htmlFor="imageUrl"></label>
          <input
            value={values.imageUrl}
            onChange={changeHandler}
            type="text"
            name="imageUrl"
            id="imageUrl"
            placeholder="Image"
          />
        </div>
        <div>
          <label htmlFor="year"></label>
          <input
            value={values.year}
            onChange={changeHandler}
            type="number"
            name="year"
            id="year"
            placeholder="Year"
          />
        </div>
        <div>
          <label htmlFor="method"></label>
          <input
            value={values.method}
            onChange={changeHandler}
            type="text"
            name="method"
            id="method"
            placeholder="Method"
          />
        </div>
        <div>
          <label htmlFor="movement"></label>
          <input
            value={values.movement}
            onChange={changeHandler}
            type="text"
            name="movement"
            id="movement"
            placeholder="Movement"
          />
        </div>
        <div>
          <label htmlFor="size"></label>
          <input
            value={values.size}
            onChange={changeHandler}
            type="text"
            name="size"
            id="size"
            placeholder="Size"
          />
        </div>
        <div>
          <label htmlFor="description"></label>
          <textarea
            value={values.description}
            onChange={changeHandler}
            name="description"
            id="description"
            placeholder="Description"
          ></textarea>
        </div>
        <input className="button" type="submit" value="Edit Art" />
      </form>
    </section>
  );
};

export default EditArt;
