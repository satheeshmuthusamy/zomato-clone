import React,{Component} from 'react';
import axios from 'axios';
import OrderDisplay from './orderDisplay';
import Header from '../Header';
const url="https://foodwebpag.herokuapp.com/orders";
const updateUrl="https://foodwebpag.herokuapp.com/updateorders";

class ViewOrder extends Component{
    constructor(props){
        super(props)
           this.state={
               orders:'',
           }
        }
        render(){
            if(sessionStorage.getItem('loginStatus')==='false'){
                return(
                    <div>
                    <Header/>
                    <center>
                       <h2> Login first to View Order.</h2>
                    </center>
                    </div>
                )
            }
            return(
                <>
                <Header/>
                <OrderDisplay orderData={this.state.orders}/>
                
                </>
            )
        }
        //api calling
        componentDidMount(){
            //let email=sessionStorage.getItem('userinfo').split(',')[1]
            if(this.props.location){
                let queryp=this.props.location.search;
                console.log(">>>queryp",queryp);
                if(queryp){
                   let data={
                    "status":queryp.split('&')[0].split('=')[1],
                    "date":queryp.split('&')[2].split('=')[1],
                    "bank_name":queryp.split('&')[3].split('=')[1],
                   }
                   let id=queryp.split('&')[0].split('=')[1].split('_')[1];
                   console.log(`${id}`);
                   console.log(data);
                   fetch(`${updateUrl}/${id}`,{
                    
                    method:'PUT',
                    headers:{
                        'Accept':'application/json',
                        'Content-Type':'application/json'
                    },
                    body:JSON.stringify(data),
                    
                   })
                }
            }
            axios.get(`${url}`)//problem the datas are not received ret to gmail
            .then((res)=>{
                this.setState({orders:res.data})
            })
        }
    }

export default ViewOrder;