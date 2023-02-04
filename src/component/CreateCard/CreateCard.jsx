import React, { useState } from "react";
import api from "../../api";
import './CreateCard.css'

export default function  Form() {
  const [description, setDescription] = useState("");
  const [url, setUrl] = useState(null);
  const [type, setType] = useState("");
  const [member_id, setMemberId] = useState(0);

  const handleSubmit = async (event) => {
    console.log(event.target)
    event.preventDefault();

    const formData = new FormData();
    formData.append("url", url);
    formData.append("description", description);
    formData.append("type", type);
    formData.append("member_id", member_id);

    try {
      const response = await api.post("/card/addCard", formData);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
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
      <br />
      <label>
        Member ID:
        <input
          type="number"
          value={member_id}
          onChange={(event) => setMemberId(event.target.value)}
        />
      </label>
      <button type="submit">Envoyer</button>
    </form>
  );
};
