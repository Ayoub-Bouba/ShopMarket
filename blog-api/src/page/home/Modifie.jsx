import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

import "./home.css";

function Modifie() {
  const [list, setList] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:3001/image/${id}`).then((item) => {
      setTitle(item.data.title);
      setContent(item.data.content);
      setImage(item.data.image);
    });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:3001/image/${id}`, {
        title,
        content,
        image,
      });
      navigate("/");
    } catch (err) {
      console.error("probleme is", err);
    }
  };
  return (
    <div>
      <div className="container">
        <h2>modifie article</h2>
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
          {image && <img id="img" src={image} />}

          <button>Modifie</button>
        </form>
      </div>
    </div>
  );
}
export default Modifie;
