import React, { useState } from 'react';
import { FaFacebook } from "react-icons/fa";
import { Link, Outlet } from 'react-router-dom'
import { MdHome } from "react-icons/md";
import { FaFlag } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { MdOutlineOndemandVideo } from "react-icons/md";
import { BsShop } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaPlus } from "react-icons/fa";
import { FaFacebookMessenger } from "react-icons/fa";
import { IoNotifications } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";
import "./layout.css"


const SignUpPage = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here, like sending data to a backend server
    console.log(formData);
    // Reset form after submission
    setFormData({
      username: '',
      email: '',
      password: '',
      confirmPassword: ''
    });
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Confirm Password:
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpPage;

export const Layout = () => {
  return (
    <>
    <div>
    <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/"><FaFacebook /></Link>
        <Link to="/"><MdHome /></Link>
        <Link to="/"><FaFlag /></Link>
        <Link to="/"><FaSearch /></Link>
        <Link to="/"><MdOutlineOndemandVideo/></Link>
        <Link to="/"><BsShop/></Link>
        <Link to="/"><GiHamburgerMenu/></Link>
        <Link to="/"><FaPlus/></Link>
        <Link to="/"><FaFacebookMessenger /></Link>
        <Link to="/"><IoNotifications/></Link>
        <Link to="/"><IoMdArrowDropdown/></Link>
    </div>
    <Outlet />
    </>
  )
  }
