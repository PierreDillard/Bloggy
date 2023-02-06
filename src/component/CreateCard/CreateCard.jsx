import React, { useState } from "react";
import { useSelector } from "react-redux";
import api from "../../api";

import './CreateCard.css'




export default function  CreateCard() {

  


  
  
  const [description, setDescription] = useState("");
  const [uploaded_file, setUploaded_file] = useState(null);
  const [type, setType] = useState("");
  const [member_id, setMemberId] = useState(0);

  const handleSubmit = async (event) => {
    console.log(event.target)
    event.preventDefault();

    const formData = new FormData();
    formData.append("uploaded_file", uploaded_file);
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
    <div className="form__container">

   
    <form onSubmit={handleSubmit}>
      <label>
        Description:
        <input
          type="text"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          name="description"
        />
      </label>
      <br />
      <label>
        Image:
        <input 
        type="file"
         onChange={(event) => setUploaded_file(event.target.files[0])}
         name="file" />
      </label>
      <br />
      <label>
        Type:
        <input
          type="text"
          value={type}
          onChange={(event) => setType(event.target.value)}
          name="type"
        />
      </label>
      <br />
      <label>
        Member ID:
        <input
          type="number"
          value={member_id}
          onChange={(event) => setMemberId(event.target.value)}
          name="menber_id"
        />
      </label>
      <button type="submit">Envoyer</button>
    </form>
    </div>
  );
};
