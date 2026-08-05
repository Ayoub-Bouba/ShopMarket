import React from "react";
import { Link } from "react-router-dom";
import "./header.css"
function Header() {
  return (
    <div>
      <div className="parent">
        <div className="logo">
          <h1>Bouba</h1>
        </div>
        <div className="link">
                <li> <Link to="/">Home</Link></li>
                <li><Link to="/add" >Ajoute</Link></li>
        </div>
      </div>
    </div>
  );
}

export default Header;
