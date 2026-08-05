import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./home.css";
import axios from "axios";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
function Home() {
  const [list, setList] = useState([]);
  useEffect(()=>{
    const fetchPosts = async () => {
    const res = await axios.get("http://localhost:3001/image");
    setList(res.data);
  };
  fetchPosts()
  },[])
  const handleDelete= async (id)=>{
    await axios.delete(`http://localhost:3001/image/${id}`)
    const newList= list.filter((item)=>{
        return item.id!==id;
     })
     setList(newList)

  }
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    navigate("/add");
  };
  return (
    <div className="container">
      <div className="ajoute">
        <h1>list </h1>
        <button onClick={handleSubmit}>ajoute article</button>
      </div>
      <div className="listArticle">
        {list?.map((item) => (
          <li key={item.id}>
            <Card sx={{ width: 400 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={item.image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {item.title}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {item.content}
          </Typography>
        </CardContent>
      </CardActionArea>
      <div className="btn">
        <button onClick={()=>navigate(`/modie/${item.id}`)} >modifie</button>
        <button onClick={()=>handleDelete(item.id)} >supreme</button>
      </div>
    </Card>
          </li>
        ))}
      </div>
    </div>
  );
}
export default Home;
