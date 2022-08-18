/*import React from 'react';

const OrderDisplay=(props)=>{

    const renderTable=({orderData})=>{
        if(orderData){
            return orderData.map((item)=>{
                return(
                    
                <tr key={item.id}>
                    <td>{item._id}</td>
                    <td>{item.hotel_name}</td>
                    <td>{item.name}</td>
                    <td>{item.phone}</td>
                    <td>{item.email}</td>
                    <td>RS. {item.cost}</td>
                    <td>{item.date}</td>
                    <td>{item.status}</td>
                    <td>{item.bank_name}</td>
                   
                </tr>
               
                )
               
            })
        }
    }
    return(
       
        <div className="container">
            <center>
                    <h2>Orders</h2>
            </center>
            <table className="table">
                <thead>
                <tr>
                    <td>OrderId</td>
                    <td>Restaurant_Name</td>
                    <td>Name</td>
                    <td>Phone</td>
                    <td>E-mail</td>
                    <td>Cost</td>
                    <td>Date</td>
                    <td>Status</td>
                    <td>Bank Name</td>
                </tr>
                </thead>
               <tbody>
                {renderTable(props)}
               </tbody>
            </table>
        </div>
        
    )
}
export default OrderDisplay;
*/
import React from 'react';

const OrderDisplay = (props) => {

    const renderTable = ({orderData}) => {
        if(orderData){
            return orderData.map((item) => {
                return(
                    <tr key={item._id}>
                        <td>{item._id}</td>
                        <td>{item.hotel_name}</td>
                        <td>{item.name}</td>
                        <td>{item.phone}</td>
                        <td>{item.email}</td>
                        <td>Rs. {item.cost}</td>
                        <td>{item.date}</td>
                        <td>{item.status}</td>
                        <td>{item.bank_name}</td>
                    </tr>
                )
            })
        }
    }

    return(
        <div className="container">
            <center><h2>Orders</h2></center>
            <table className="table">
                <thead>
                    <tr>
                        <th>OrderId</th>
                        <th>Rname</th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Cost</th>
                        <th>Date</th>
                        <th>Status</th>
                        <th>BankName</th>
                    </tr>
                </thead>
                <tbody>
                    {renderTable(props)}
                </tbody>
            </table>
        </div>
    )
}

export default OrderDisplay