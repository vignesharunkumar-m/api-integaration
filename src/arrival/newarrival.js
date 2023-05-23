// import React from 'react'
// import Header from '../header/header'
// import Footer from '../footer/footer'

// import "../arrival/newarrival.css"

// import ReactStars from "react-rating-stars-component";

// import watch from "../images/image 68.png"

// import product1 from "../images/image 20.png"
// import product2 from "../images/image 21.png"
// import product3 from "../images/image 22.png"
// import product4 from "../images/image 23.png"
// import product5 from "../images/image 24.png"
// import product6 from "../images/image 55.png"
// import product7 from "../images/image 26.png"
// import product8 from "../images/image 27.png"
// import product9 from "../images/image 54.png"
// import product10 from "../images/image 25.png"
// import product11 from "../images/image 56.png"
// import product12 from "../images/image 57.png"

// import cart from "../images/Group 28(1).png"
// import like from "../images/Group 4.png"
// import bag from "../images/Group 3.png"

// function Newarrival() {
//     return (
//         <div>
//             <Header />
//             <div className='content'>
//                 <div className='left'>
//                     <h6>ONLINE B2B PLATFORM</h6>
//                     <h1>All Your Medical And</h1>
//                     <h2>Surgical Needs</h2>
//                     <button>Shop Now</button>
//                 </div>
//                 <div className='right'><img src={watch} alt='watch'></img></div>
//             </div>
//             <div className='heading'><h2>New Arrival</h2></div>
//             <div className='line'>
//                 <div className='lineyellow'></div>
//                 <div className='linegrey'></div>
//             </div>
//             <div className='product_container'>
//                 <div className='product'>
//                     <div className='product_img'><img src={product1} alt="product1"></img></div>
//                     <h5>Venticare Nebullizer Mask</h5>
//                     <div className='price'>
//                         <span>&#8377; 20.44</span>
//                         <span>&#8377; 10.44</span>
//                     </div>
//                     <div className='rating'><ReactStars emptyIcon={<i className='far fa-star'></i>} ></ReactStars></div>
//                 </div>
//                 <div className='hover_effect'>
//                     <div>
//                         <img src={cart} alt='cart'></img>
//                         <img src={like} alt='like'></img>
//                         <img src={bag} alt='bag'></img>
//                     </div>
//                 </div>
//                 <div className='product'>
//                     <div className='product_img'><img src={product2} alt="product2" className='product2'></img></div>
//                     <h5>Venticare Nebullizer Mask</h5>
//                     <div className='price'>
//                         <span>&#8377; 20.44</span>
//                         <span>&#8377; 10.44</span>
//                     </div>
//                     <div className='rating'><ReactStars emptyIcon={<i className='far fa-star'></i>} ></ReactStars></div>
//                 </div>
//                 <div className='product'>
//                     <div className='product_img'><img src={product3} alt="product3"></img></div>
//                     <h5>Venticare Nebullizer Mask</h5>
//                     <div className='price'>
//                         <span>&#8377; 20.44</span>
//                         <span>&#8377; 10.44</span>
//                     </div>
//                     <div className='rating'><ReactStars emptyIcon={<i className='far fa-star'></i>} ></ReactStars></div>
//                 </div>
//                 <div className='product'>
//                     <div className='product_img'><img src={product4} alt="product4"></img></div>
//                     <h5>Venticare Nebullizer Mask</h5>
//                     <div className='price'>
//                         <span>&#8377; 20.44</span>
//                         <span>&#8377; 10.44</span>
//                     </div>
//                     <div className='rating'><ReactStars emptyIcon={<i className='far fa-star'></i>} ></ReactStars></div>
//                 </div>
//                 <div className='product'>
//                     <div className='product_img'><img src={product5} alt="product5"></img></div>
//                     <h5>Venticare Nebullizer Mask</h5>
//                     <div className='price'>
//                         <span>&#8377; 20.44</span>
//                         <span>&#8377; 10.44</span>
//                     </div>
//                     <div className='rating'><ReactStars emptyIcon={<i className='far fa-star'></i>} ></ReactStars></div>
//                 </div>
//                 <div className='product'>
//                     <div className='product_img'><img src={product6} alt="product6"></img></div>
//                     <h5>Venticare Nebullizer Mask</h5>
//                     <div className='price'>
//                         <span>&#8377; 20.44</span>
//                         <span>&#8377; 10.44</span>
//                     </div>
//                     <div className='rating'><ReactStars emptyIcon={<i className='far fa-star'></i>} ></ReactStars></div>
//                 </div>
//                 <div className='product'>
//                     <div className='product_img'><img src={product7} alt="product7"></img></div>
//                     <h5>Venticare Nebullizer Mask</h5>
//                     <div className='price'>
//                         <span>&#8377; 20.44</span>
//                         <span>&#8377; 10.44</span>
//                     </div>
//                     <div className='rating'><ReactStars emptyIcon={<i className='far fa-star'></i>} ></ReactStars></div>
//                 </div>
//                 <div className='product'>
//                     <div className='product_img'><img src={product8} alt="product8"></img></div>
//                     <h5>Venticare Nebullizer Mask</h5>
//                     <div className='price'>
//                         <span>&#8377; 20.44</span>
//                         <span>&#8377; 10.44</span>
//                     </div>
//                     <div className='rating'><ReactStars emptyIcon={<i className='far fa-star'></i>} ></ReactStars></div>
//                 </div>
//                 <div className='product'>
//                     <div className='product_img'><img src={product9} alt="product9"></img></div>
//                     <h5>Venticare Nebullizer Mask</h5>
//                     <div className='price'>
//                         <span>&#8377; 20.44</span>
//                         <span>&#8377; 10.44</span>
//                     </div>
//                     <div className='rating'><ReactStars emptyIcon={<i className='far fa-star'></i>} ></ReactStars></div>
//                 </div>
//                 <div className='product'>
//                     <div className='product_img'><img src={product10} alt="product10"></img></div>
//                     <h5>Venticare Nebullizer Mask</h5>
//                     <div className='price'>
//                         <span>&#8377; 20.44</span>
//                         <span>&#8377; 10.44</span>
//                     </div>
//                     <div className='rating'><ReactStars emptyIcon={<i className='far fa-star'></i>} ></ReactStars></div>
//                 </div>
//                 <div className='product'>
//                     <div className='product_img'><img src={product11} alt="product11"></img></div>
//                     <h5>Venticare Nebullizer Mask</h5>
//                     <div className='price'>
//                         <span>&#8377; 20.44</span>
//                         <span>&#8377; 10.44</span>
//                     </div>
//                     <div className='rating'><ReactStars emptyIcon={<i className='far fa-star'></i>} ></ReactStars></div>
//                 </div>
//                 <div className='product'>
//                     <div className='product_img'><img src={product12} alt="product12"></img></div>
//                     <h5>Venticare Nebullizer Mask</h5>
//                     <div className='price'>
//                         <span>&#8377; 20.44</span>
//                         <span>&#8377; 10.44</span>
//                     </div>
//                     <div className='rating'><ReactStars emptyIcon={<i className='far fa-star'></i>} ></ReactStars></div>
//                 </div>
                
//             </div>
//             <Footer></Footer>
//         </div>
//     )
// }

// export default Newarrival;

