import React from "react"
import { Link } from "gatsby";
const AdminSummaryList = (props) => {

var rowdata= '';
var orderTotal = 0;
var orderQuantity = 0;
  
  console.log("List Order Items");
  console.log(props.productsListItems);
  rowdata = Object.keys(props.listItems).map( (item) => 
   {
        if( props.listItems[item] != null){
         var prodId  = props.listItems[item].id;
         let prodObj = props.productsListItems.find( p => p.id == prodId  );
         orderTotal += props.listItems[item].quantity * prodObj.price;
         orderQuantity += props.listItems[item].quantity;
         return (
   
                    <tr>
                        <td>{prodObj.id}</td>
                        <td>{prodObj.name}</td>
                        <td>{props.listItems[item].quantity}</td>
                        <td>{prodObj.price}</td>
                      </tr>

              );
        }
         
   });
  return(

             <div class="orderDetails">
                    <table id="orderTable" class="table">
                    <tbody>
                      <tr>
                        <th>
                          <h2>Item ID</h2>
                        </th>
                        <th>
                          <h2>Item Name</h2>
                        </th>
                        <th>
                          <h2>Quantity</h2>
                        </th>
                        <th>
                          <h2>Price (in Rs.)</h2>
                        </th>
                      </tr>
                 {rowdata}
                      <tr>
                        <td colSpan="2">
                          <h2 className="totalAmtRed">Total</h2>
                        </td>
                        <td>
                          <h2 className="totalAmtRed">{orderQuantity}</h2>
                        </td>
                        <td>
                          <h2 className="totalAmtRed">{orderTotal}</h2>
                        </td>
                      </tr>
                      </tbody>
                    </table>
                       
             </div>
   	     )
} 

export default AdminSummaryList;