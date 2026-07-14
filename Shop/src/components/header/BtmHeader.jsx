import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars } from "react-icons/fa";
import { FaSignInAlt } from "react-icons/fa";
import { FaUserPlus } from "react-icons/fa";
import { MdArrowDropDown } from "react-icons/md";
import "./header.css";

const navLinks=[
  {title :"Home" , link: "/" },
  {title :"About" , link: "/about" },
  {title :"Accessories" , link: "/accessories" },
  {title :"Blog" , link: "/blog" },
  {title :"Contact" , link: "/contact" },
]

function BtmHeader() {
  const location=useLocation();
  const [categories,setCategories]=useState([]);
  const [isCategoryOpen,setIsCategoryOpen]=useState(false);
  useEffect(()=>{
    setIsCategoryOpen(false)
  },[location])
  useEffect(()=>{
    fetch('https://dummyjson.com/products/categories')
     .then(res => res.json())
     .then((data)=>setCategories(data))
     
  },[])
  

  return (
    
    <div className="btm_header">
        <div className="container">

          <nav className="nav">

            <div className="category_nav">
              <div className="category_btn" onClick={()=>{setIsCategoryOpen(!isCategoryOpen)}}>
                <FaBars/>
                <p>Brows Category</p>
                <MdArrowDropDown />
              </div>
              <div className={`category_nav_list ${isCategoryOpen ? "active" : ""}`} >
                {categories.map((category)=>(
                  <Link key={category.slug} to={`category/${category.slug}`}>{category.name}</Link>
                ))}
              </div>
            </div>

            <div className="nav_links">
               {navLinks.map((items)=>(
                <li key={items.link} className={location.pathname === items.link ? "active":""}><Link to={items.link}>{items.title}</Link></li>
               ))}
            </div>

          </nav>
          <div className="sign_regs_icon">
            <Link to="/"><FaSignInAlt /></Link>
            <Link to="/"><FaUserPlus/></Link>
          </div>
        </div>
    </div>
  )
}

export default BtmHeader