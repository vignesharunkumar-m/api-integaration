import React from 'react'
import "../header/header.css"

import Logo from "../images/logo 1.png"
import fstcall from "../images/eva_phone-call-outline.png"
import man from "../images/Group 5.png"
import like from "../images/Group 4.png"
import bell from "../images/Group 7.png"
import bag from "../images/Group 3.png"
import search from "../images/Group 15.png"
import { useNavigate } from 'react-router-dom'



function Header() {
    const navigate = useNavigate()
  return (
    <div>
        <div className='header'>
            <div className='headerleft'>
                <a href='home'>HOME</a>
                <a href='about'>ABOUT US</a>
                <a href='shop'>SHOP</a>
                <a href='contact'>CONTACT US</a>
            </div>
            <div className='headerright'>
                <a href='order history'>ORDER HISTORY</a>
                <div className='order_tag'></div>
                <a href='/login'>LOGIN</a>
            </div>
        </div>
        <div className='logo'>
            <div><img src={Logo} alt='logo'></img></div>
            <div className='search_field'>
                <div className='Categories'><select>
                    <option>All Categories</option>
                    <option>New Arrival</option>
                    <option onClick={() => navigate("/categories")}>Categories</option>
                </select></div>
                <div className='search_vert_line'></div>
                <input placeholder='What do you Need?'></input>
                <div className='search_icon'><img src={search} alt='search'></img></div>
            </div>
            <div className='Call_num'>
                <div><img src={fstcall} alt='fst call'></img></div>
                <div className='call_num_txt'>
                    <div>Call Us</div>
                    <div>+91 7010034955</div>
                </div>
            </div>
            <div className='call_ver_line'></div>
            <div className='favourites'>
                <a href='/login'><img src={man} alt='man'></img></a>
                <a href='like'><img src={like} alt='like'></img></a>
                <a href='bell'><img src={bell} alt='bell'></img></a>
                <a href='/wishlist'><img src={bag} alt='bag'></img></a>
            </div>
        </div>
    </div>
  )
}

export default Header;