import React,{Component} from 'react';
import axios from 'axios';
import './detail.css';
import Header from '../Header';
import {Link} from 'react-router-dom';
import MenuDisplay from './menuDisplay'
//const url="https://foodwebpag.herokuapp.com";
const url="http://zomatoajulypi.herokuapp.com";

// const menuUrl="https://foodwebpag.herokuapp.com/menu/4";

class RestDetails extends Component{

    constructor(props){
        super(props)
        this.state={
            details:'',
            menuList:'',
            userItem:'',
            mealId:sessionStorage.getItem('mealId')?sessionStorage.getItem('mealId'):'1',
            
        }
    }
    addToCart=(data)=>{
          this.setState({userItem:data})
    }

    proceed=()=>{
        sessionStorage.setItem('menu',this.state.userItem)
        this.props.history.push(`/placeOrder/${this.state.details.restaurant_name}`)
    }
    render(){
    //shorthand notation
        //let details=this.state.details;
        let {details}=this.state
        return(
            <>
            <Header/>
            {/* {this.state.details.restaurant_name} */}
            
            <div id="mainContent">
            <div className="imgDiv">
                        <img src={this.state.details.restaurant_thumb} alt="snacks"/>
                    </div>
                    <div className="contentDiv">
                        <h1>{details.restaurant_name}</h1>
                        <span>104 customers rating is {details.rating_text}</span>
                        {/* <h3><del>Old price:1000</del></h3> */}
                        <h3> price:RS {details.cost}</h3>
                        <h3>Taste the happiness with every foods</h3>
                        <div className="feature_container">
                        <div className="feature">
                                <img src="https://i.ibb.co/wJvrhYg/veg.png" alt="veg" className="imgIcon"/>
                                <p>Pure Veg</p>
                            </div>
                            <div className="feature">
                                <img src="https://i.ibb.co/mD3jpgc/sentizied.png" alt="veg" className="imgIcon"/>
                                <p>Fully Senatized</p>
                            </div>
                            <div className="feature">
                                <img src="https://i.ibb.co/kHrm3Mh/delivery.png" alt="veg" className="imgIcon"/>
                                <p>Free Delivery</p>
                            </div>
                        </div>
                        <h2>Currently open</h2>
                        <div>
                            <Link to="/"className="btn btn-danger">Back</Link>&nbsp;
                            <button className="btn btn-success"onClick={this.proceed}>Checkout</button>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <MenuDisplay menudata={this.state.menuList}
                        finalOrder={(data)=>{this.addToCart(data)}}/>
                    </div>
                    </div>
                  
                    
            </>
        )
    }

    //calling api with async await
   async componentDidMount(props){
        let restId=this.props.location.search.split('=')[1];
        let response=await axios.get(`${url}/details/${restId}`);
        console.log(">>>",response.data);
        let menu=await axios.get(`${url}/menu/${restId}`);
        //catche
        this.setState({details:response.data[0],menuList:menu.data})
        //if we are not iterating data it sends in the form of an array so use array Index to fetch data
        
    }
}

export default RestDetails;