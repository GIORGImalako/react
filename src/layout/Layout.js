import React from 'react'
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
