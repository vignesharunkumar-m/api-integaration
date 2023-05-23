import React, { useEffect } from 'react'
import Header from '../header/header'
import Footer from '../footer/footer'
import "../Login/login.css"

import img183 from "../images/Rectangle 183(1).png"
import { useNavigate } from 'react-router-dom'

import { useFormik } from 'formik'
// import * as Yup from "yup"
import { loginService } from '../Services/Services'


function Login() {
  const navigate = useNavigate()

  const sha1 =require("sha1")
  // const auth = sha1("ik7sj5d@Pgk*LO7!e4ubz&8b"+ "12345" +`${mob}`)
  // useEffect(() => {
    // localStorage.getItem("user") 
    // console.log(JSON.parse('user'));
    const userData = JSON.parse(localStorage.getItem('user'));
    let x = userData.email
console.log(x);
  // })

  const {handleSubmit,handleChange,values,errors} = useFormik({
    initialValues:{
      mobilenumber: x,
      password:"",
      device_type:3,
      device_id:"12345",
    },
    // validationSchema:Yup.object({
    //   email:Yup.string().re
    // })
  
    onSubmit:values => {
      handleLogin(values)
    }
})
  console.log(errors,"errors");

  const handleLogin = (data) => {
    // console.log(data,'data')
    let formData = new FormData();
    formData.append("authcode",sha1("ik7sj5d@Pgk*LO7!e4ubz&8b" + "12345" + data.mobilenumber))
    formData.append("username",data.mobilenumber)
    formData.append("password",data.password)
    formData.append("device_type",data.device_type)
    formData.append("device_id",data.device_id)
    loginService(formData).then((res) => {
      if(res.data.status === 0){
        navigate("/otp verification")
      }
      console.log(res.data,'response')
    })
  }
  
  return (
    <div>
      <Header />
      <div>
        <div className='login'>
          
          <div className='login_left'>
            <h1>login to your Account</h1>
            <div className='hor_line'></div>
            <br></br>
            <label>Email Address</label>
            <br></br>
            <input 
            placeholder='enter a email address'
            type='text'
            value={values.mobilenumber}
            onChange={handleChange}
            name='mobilenumber'
            ></input>
            <hr></hr>
            <label>Password</label>
            <br></br>
            <input className='eyesympol' 
            placeholder='*****'
            type='text'
            value={values.password}
            onChange={handleChange}
            name='password'
            ></input>
            <hr></hr>
            <div className='login_txt'>
              <p className='txt1'>Login with Mobile Number</p>
              <p>Forget Password</p>
            </div>
            <div className='login_btn'><button onClick={handleSubmit}>Login to Your Account</button></div>
            {/* <div className='login_btn'><button onClick={() => navigate("/new arrival")}>Login to Your Account</button></div> */}
            <div className='btn_after_txt'>
              <a className='txt1' href='alredy account'>Don'tHave An Account?</a>
              <a href='/signup'>Sign Up</a>
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

export default Login