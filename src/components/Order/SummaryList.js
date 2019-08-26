import React from "react"

const SummaryList = (props) => {
console.log("Orders Data");
console.log(props.orders.orders);
var rowdata= Object.keys(props.orders.orders[0]).map( (item) => 
   {
         console.log(item);
         return (
   
                    <tr>
                        <td>{props.orders.orders[0][item].id}</td>
                        <td>Product Name</td>
                        <td>{props.orders.orders[0][item].quantity}</td>
                        <td>{props.orders.orders[0][item].price}</td>
                      </tr>

         	    );
   }
);

   return(

             <div class="orderDetails">
                    <table id="orderTable">
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
                          <h2 className="totalAmtRed">3</h2>
                        </td>
                        <td>
                          <h2 className="totalAmtRed">60</h2>
                        </td>
                      </tr>
                      </tbody>
                    </table>
                  </div>
   	     )
} 

export default SummaryList;