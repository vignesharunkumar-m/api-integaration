import React from 'react'
import Header from '../header/header'
import Footer from '../footer/footer'
import "../Login/login.css"

import img183 from "../images/Rectangle 183(1).png"
import { useNavigate } from 'react-router-dom'



function Loginmobile() {
  const navigate = useNavigate()
  return (
    <div>
      <Header />
      <div>
        <div className='login'>
          <div className='login_left'>
            <h1>login to your Account</h1>
            <div className='hor_line'></div>
            <br></br>
            <label>Phone Number</label>
            <br></br>
            <input placeholder='enter a email address'></input>
            <hr></hr>
            <label>Password</label>
            <br></br>
            <input className='eyesympol' placeholder='*****'></input>
            <hr></hr>
            <div className='login_txt'>
              <p className='txt1'>Login with Mobile Number</p>
              <p>Forget Password</p>
            </div>
            <div className='login_btn'><button onClick={() => navigate("/home")}>Login to Your Account</button></div>
            <div className='btn_after_txt'>
              <a className='txt1' href='alredy account'>Don'tHave An Account?</a>
              <a href='sigin'>Sign Up</a>
            </div>
          </div>
          <div className='sec_right'>
            <div><img src={img183} alt='img183'></img></div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Loginmobile