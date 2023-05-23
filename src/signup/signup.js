import React from 'react'
import "./signup.css"

import line67 from "../images/Line 67.png"
import img183 from "../images/Rectangle 183(1).png"

import Header from '../header/header'
import Footer from '../footer/footer'
import { useFormik } from 'formik'
import { signup } from '../Services/Services'


import { json, useNavigate } from 'react-router-dom'




function Signup() {

    const navigate = useNavigate()
    const {handleSubmit,handleChange,values,errors} = useFormik({
        initialValues:{
            first_name: "",
            last_name:"",
            email: "",
            phonenumber:"", 
            password:"",
            repeat_password:""
        },
        // validationSchema:Yup.object({
        //   email:Yup.string().re
        // })
        onSubmit:values => {
          handleLogin(values)
          localStorage.setItem("user",JSON.stringify(values))
        }
      })
      console.log(errors,"errors");
    
      const handleLogin = (data) => {
        // console.log(data,'data')
        let formData = new FormData();
        formData.append("first_name",data.first_name)
        formData.append("last_name",data.last_name)
        formData.append("email",data.email)
        formData.append("phone",data.phonenumber)
        formData.append("password",data.password)
        formData.append("confirm_password",data.repeat_password)
        signup(formData).then((res) => {
            if(res.data.status === 1){
                navigate("/login")
            }
          console.log(res.data,'response')
        })
      }

  return (
    <div>
        <Header/>
        <div className='section'>
            <div className='sec_left'>
                <div className='sec_heading'>Sign up your Account</div>
                <div><img src={line67} alt='line67'></img></div>
                <label>first_name</label>
                <br></br>
                <input placeholder='enter a first name' 
                type='text'
                name='first_name'
                onChange={handleChange}
                value={values.first_name}></input>
                <hr></hr>
                <label>last_name</label>
                <br></br>
                <input placeholder='enter a last name' 
                type='text'
                name='last_name'
                onChange={handleChange}
                value={values.last_name}></input>
                <hr></hr>
                <label>Email Address</label>
                <br></br>
                <input placeholder='enter a email address' 
                type='email'
                name='email'
                onChange={handleChange}
                value={values.email}
                ></input>
                <hr></hr>
                <label>Phone number</label>
                <br></br>
                {/* <input placeholder='phone number' maxLength={10} onKeyDown={(e) => {
                    if(e.key==="0" || parseInt(e.key)){

                    }else{
                        e.preventDefault()
                    }
                }}></input> */}
                <input placeholder='phone number' 
                type='phonenumber' 
                name='phonenumber'
                onChange={handleChange}
                value={values.phonenumber}
                ></input>
                <hr></hr>
                <label>Password</label>
                <br></br>
                <input className='eye' placeholder='*****'
                type='password'
                name='password'
                onChange={handleChange}
                value={values.password}
                ></input>
                <hr></hr>
                <label>Repeat Password</label>
                <br></br>
                <input className='eye' placeholder='*****'
                type='password'
                name='repeat_password'
                onChange={handleChange}
                value={values.repeat_password}
                ></input>
                <hr></hr>
                <div className='forgrt_div'>Forget password</div>
                <div className='signin_btn'><button onClick={handleSubmit}>Sign up to Your Account</button></div>
                <div className='sec_left_bottom'>
                    <a href='/login'>Alerdy Have An Account?</a>
                    <a href='/login '>Sign in</a>
                </div>
            </div>
            <div className='sec_right'>
                <div><img src={img183} alt='img183'></img></div>   
            </div>
        </div>
        <div><Footer></Footer></div>
    </div>
  )
}

export default Signup