import React from 'react'
import "../footer/footer.css"

import vector1 from "../images/Vector(1).png"
import vector2 from "../images/Frame(1).png"
import vector3 from "../images/Frame(3).png"
import vector4 from "../images/Frame(2).png"
import map from "../images/Group 104.png"
import call from "../images/Vector(7).png"
import mail from "../images/Group 105.png"
import facebook from "../images/Vector(5).png"
import instagram from "../images/Group 107.png"
import twitter from "../images/Frame.png"
import google from "../images/Vector(6).png"
import cards from "../images/payment 1.png"

function Footer() {
  return (
    <div>
        <div className='section2'>
            <div className='section2_content'>
                <div className='sec2_con_img'><img src={vector1} alt='vector1'></img></div>
                <div>
                    <div>Free Delivery</div>
                    <div className='txt2'>For all order 99$</div>
                </div>
                <div className='sec2_line'></div>
            </div>
            <div className='section2_content'>
                <div className='sec2_con_img'><img src={vector2} alt='vector2'></img></div>
                <div>
                    <div>30days Return</div>
                    <div className='txt2'>If goods have problems</div>
                </div>
                <div className='sec2_line'></div>
            </div>
            <div className='section2_content'>
                <div className='sec2_con_img'><img src={vector3} alt='vector3'></img></div>
                <div>
                    <div>Secure Payment</div>
                    <div className='txt2'>100% Secure Payment</div>
                </div>
                <div className='sec2_line'></div>
            </div>
            <div className='section2_content'>
                <div className='sec2_con_img'><img src={vector4} alt='vector4'></img></div>
                <div>
                    <div>24/7 support</div>
                    <div className='txt2'>Dedicated support</div>
                </div>
            </div>
        </div>


        <div className='footer'>
            <div className='footer_sec'>
                <div className='f_heading'>About Us</div>
                <hr></hr>
                <div>Lorem Ipsum dolor slt amet,consectetur adipiscing elit</div>
                <div className='about_sec'>
                    <div className='about_icon'><img src={map} alt='map'></img></div>
                    <div>Lorem Ipsum dolor slt amet,consectetur adipiscing elit.</div>
                </div>
                <div className='about_sec'>
                    <div className='about_icon'><img src={call} alt='call'></img></div>
                    <div>+91 7010034955</div>
                </div>
                <div className='about_sec'>
                    <div className='about_icon'><img src={mail} alt='mail'></img></div>
                    <div>Info@clintbuy.in</div>
                </div>
                <div className='social_icons'>
                    <div className='icon'><img src={facebook} alt='facebook'></img></div>
                    <div className='icon'><img src={instagram} alt='instagram'></img></div>
                    <div className='icon'><img src={twitter} alt='twitter'></img></div>
                    <div className='icon'><img src={google} alt='google'></img></div>
                </div>
            </div>
            <div className='footer_sec'> 
                <div className='f_heading'>Cutomer Care</div>
                <hr></hr>
                <div>My Account</div>
                <div>My Orders</div>
                <div>Track Your Orders</div>
                <div>Save For Later</div>
                <div>FAQs</div>
                <div>Refund/Return Policy</div>
            </div>
            <div className='footer_sec'>
                <div className='f_heading'>Categories</div>
                <hr></hr>
                <div>Consumables & Disposables</div>
                <div>Lab Diagonastics & Instruments</div>
                <div>Medical and Pharmaceutial</div>
                <div>Dental</div>
                <div>Medical Implants</div>
                <div>Surgical Instruments</div>
                <div>Hospital Establishment</div>
                <div>Physiotherapy & Rehabliutation-Medical Aids</div>
            </div>
            <div className='footer_sec'>
                <div className='f_heading'>Payment Mode</div>
                <hr></hr>
                <div className='cards'><img src={cards} alt='cards'></img></div>
            </div>
        </div>
        <div className='footer_end'>Copyright © 2022 Maestro technology. All Rights Reserved.</div>
    </div>
  )
}

export default Footer;