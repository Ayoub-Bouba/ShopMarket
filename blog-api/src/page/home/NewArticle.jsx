import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import  axios  from "axios";

import "./home.css";

function NewArticle() {
  const [list, setList] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");
  const navigate = useNavigate();
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:3001/image",{
      title,content,image
    })
    setTitle("")
    setContent("")
    setImage("")
    navigate("/");
  };
  return (
    <div>
      <div className="container">
        <h2>ajouter article</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="title"
          />
          <textarea
            id="text"
            value={content}

            onChange={(e) => setContent(e.target.value)}
            type="text"
            placeholder="content"
          ></textarea>
          <input
            type="text"
            value={image}

            onChange={(e) => setImage(e.target.value)}
            name="image"
            placeholder="entrez voter image "
          />
          <button>ajoute</button>
        </form>
      </div>
    </div>
  );
}

export default NewArticle;
