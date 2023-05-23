import React from 'react'
import Header from '../header/header'
import Footer from '../footer/footer'

import "../dashboard/dashboard.css"

import watch from "../images/image 68.png"

function Dashboard() {
    return (
        <div>
            <Header />
            <div className='content'>
                <div className='left'>
                    <h6>ONLINE B2B PLATFORM</h6>
                    <h1>All Your Medical And</h1>
                    <h2>Surgical Needs</h2>
                    <button>Shop Now</button>
                </div>
                <div className='right'><img src={watch} alt='watch'></img></div>
            </div>
            <div className='heading'><h2>New Arrival</h2></div>
            <div className='line'>
                <div className='lineyellow'></div>
                <div className='linegrey'></div>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default Dashboard;
