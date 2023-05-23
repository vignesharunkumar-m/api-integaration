import React from 'react'
import { useNavigate } from 'react-router-dom'
import "../otp/otp.css"

import Header from '../header/header'
import Footer from '../footer/footer'

import otpimg from "../images/Group 399.png"

import { useFormik } from 'formik'
import { otpverification } from '../Services/Services'

function Otp() {
    const navigate =useNavigate()

    const {handleSubmit,handleChange,values,errors} = useFormik({
        initialValues:{
            inputs:12345,
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
        formData.append("reset_key","6465fe429624729595")
        formData.append("otp_code",data.inputs)
        otpverification(formData).then((res) => {
          if(res.data.status === 0){
            navigate("/new arrival")
          }
          console.log(res.data,'response')
        })
      }
      
  return (
    <div>
        <Header/>
        <div className='otp_sec'>
            <div className='otp_left'><img src={otpimg} alt='otpimg'></img></div>
            <div className='otp_right'>
                <h2>OTP Verification</h2>
                <div className='line'></div>
                <p className='txt1'>We have send code verification to your mobile number (or) your email address</p>
                <div className='otp_input'>
                    <input placeholder='1' name='inputs' type='text' onChange={handleChange} value={values.inputs}></input>
                    
                </div>
                <p className='txt2'>Don't Receive the OTP?</p>
                <p className='txt3'>Resend Code</p>
                <button onClick={handleSubmit}>Verify & Proceed</button>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Otp