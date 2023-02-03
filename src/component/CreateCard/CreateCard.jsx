
import React, { useState } from "react";
import api from "../../api";
import './CreateCard.css'

const Form = () => {
  const [description, setDescription] = useState("");
  const [url, setUrl] = useState(null);
  const [type, setType] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("url", url);
    formData.append("description", description);
    formData.append("type", type);

    api
      .post("/card/addCard", formData)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Description:
        <input
          type="text"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
      </label>
      <br />
      <label>
        Image:
        <input type="file" onChange={(event) => setUrl(event.target.files[0])} />
      </label>
      <br />
      <label>
        Type:
        <input
          type="text"
          value={type}
          onChange={(event) => setType(event.target.value)}
        />
      </label>
      <button type="submit">Envoyer</button>
      
    </form>
  );
};

export default Form;
