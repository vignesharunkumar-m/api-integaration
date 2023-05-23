import React from 'react'
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom'


import Dashboard from './dashboard/dashboard'
import Login from './Login/login'
import Newarrival from './arrival/newarrival'

import Loginmobile from './Login/loginmobile'
import Signup from './signup/signup'
import Otp from './otp/otp'
// import Verify from './verify/verify'
// import Categories from './categories/categories'
// import Product from './products/product'
// import Specification from './specification/specification'
// import Review from './review/review'
// import Contactus from './contact us/contactus'
// import Aboutus from './about us/aboutus'
// import Wishlist from './wishlist/wishlist'
// import Checkout from './checkout/checkout'
// import Guestcheckout from './guest check out/guestcheckout'
// import Billing_shipping from './billing & shipping/billing_shipping'
// import Profile_hospital from './profile_&_hospital/profile_hospital'
// import Profile_clinic from './profile_clinic/profile_clinic'
// import Profile_wherhouse from './profile_wherehouse/profile_wherhouse'
// import Terms_condition from './tearms_condition/terms_condition'
// import Faq from './faq/faq'
// import Order_history from './order history/order_history'
// import Seller_Login from './seller/login/login'
// import Registration from './seller/registration/registration'
// import Seller_otp from './seller/verification/otp'
// import Changepassword from './seller/password/changepassword'
// import Forget_password from './seller/password/forgetpassword'
// import Seller_information from './seller/seller_information/seller_information'
// import Dashboard from './seller/dashboard/dashboard'
// import Manage_product from './seller/manage_products/manage_products'
// import Add_product from './seller/add product/add_product'
// import Manage_category from './seller/manage_category/manage_category'
// import Manage_orders from './seller/manage_category/manage_orders'
// import Seller_order from './seller/manage_category/order'
// import Order_details_view from './seller/orderdetails/order_details_view'



function App() {
  return (
    <div>
        <Router>
            <Routes>
                <Route path='/' element={<Dashboard/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/signup' element={<Signup/>}></Route>
                <Route path='/new arrival' element={<Newarrival/>}/>
                <Route path='/login mobile' element={<Loginmobile/>}/>
                <Route path='/otp verification' element={<Otp/>}></Route>
                {/* <Route path='/' element={<Signup/>}></Route>
                <Route path='/verify otp' element={<Verify/>}/>
                <Route path='/categories' element={<Categories/>}></Route>
                <Route path='/products' element={<Product/>}></Route>
                <Route path='/specifications' element={<Specification/>}></Route>
                <Route path='/review' element={<Review/>}></Route>
                <Route path='/contact us' element={<Contactus/>}></Route>
                <Route path='/about us' element={<Aboutus/>}></Route>
                <Route path='/wishlist' element={<Wishlist/>}></Route>
                <Route path='/checkout' element={<Checkout/>}></Route>
                <Route path='/guest check out' element={<Guestcheckout/>}></Route>
                <Route path='/billing and shipping' element={<Billing_shipping/>}></Route>
                <Route path='/profile hospital' element={<Profile_hospital/>}></Route>
                <Route path='/profile clinic' element={<Profile_clinic/>}></Route>
                <Route path='/profile wherehouse' element={<Profile_wherhouse/>}></Route>
                <Route path='/tearms & condition' element={<Terms_condition/>}></Route>
                <Route path='/FAQ' element={<Faq/>}></Route>
                <Route path='/order history' element={<Order_history/>}></Route>
                <Route path='/seller login' element={<Seller_Login/>}></Route>
                <Route path='/registration' element={<Registration/>}></Route>
                <Route path='/otp verification' element={<Seller_otp/>}></Route>
                <Route path='/change password' element={<Changepassword/>}></Route>
                <Route path='/forget password' element={<Forget_password/>}></Route>
                <Route path='/seller information' element={<Seller_information/>}></Route>
                <Route path='/dashboard' element={<Dashboard/>}></Route>
                <Route path='/manage products' element={<Manage_product/>}></Route>
                <Route path='/add product' element={<Add_product/>}></Route>
                <Route path='/manage category' element={<Manage_category/>}></Route>
                <Route path='/manage order' element={<Manage_orders/>}></Route>
                <Route path='/seller order' element={<Seller_order/>}></Route>
                <Route path="order detail view" element={<Order_details_view/>}></Route> */}
            </Routes>
        </Router>
    </div>
  )
}

export default App