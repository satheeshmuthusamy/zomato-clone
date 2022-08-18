import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import Home from './Home/Home';
// import Header from './Header';
import Footer from './Footer';
import Listing from './listing/listing';
import Details from './detailPage/restDetail';
import PlaceOrder from './booking/placeOrder';
import ViewOrder from './booking/viewOrder';
import Login from './login/login';
import Register from './login/register';
const Routing=()=>{
    return(
        <BrowserRouter>
        {/* <Header/> */}
        <Route exact path="/" component={Home}/>
        <Route path="/listing/:id" component={Listing}/>
        <Route path="/details" component={Details}/>
        <Route path="/placeOrder/:restName" component={PlaceOrder}/>
        <Route path="/viewBooking" component={ViewOrder}/>
        <Route path="/login" component={Login}/>
        <Route path="/register" component={Register}/>

        <Footer/>
        </BrowserRouter>
    )
}



export default Routing;