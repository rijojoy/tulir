import React from "react"
import { Link } from "gatsby";
const SummaryList = (props) => {

var rowdata= '';
var orderTotal = 0;
var orderQuantity = 0;


if(props.orders.orders != undefined) {
rowdata = Object.keys(props.orders.orders).map( (item) => 
   {
         var orderId  = props.orders.orders[item].id;
         let prodObj = props.items.find( o => orderId == o.id  );
         orderTotal += props.orders.orders[item].quantity * prodObj.price;
         orderQuantity += props.orders.orders[item].quantity;
         return (
   
                    <tr>
                        <td>{props.orders.orders[item].id}</td>
                        <td>{prodObj.name}</td>
                        <td>{props.orders.orders[item].quantity}</td>
                        <td>{prodObj.price}</td>
                      </tr>

         	    );
   }

);

}


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
                              <br />
                  <div class="col-md-6 col-md-offset-4">
                    <Link 
                         to="/Confirm/" 
                         class="btn btn-success btn-large"
                         onClick={props.clickSubmit} 
                         >Review & Confirm
                    </Link>
                  </div>

             </div>
   	     )
} 

export default SummaryList;