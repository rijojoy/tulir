import React from "react";

const Menu = (props) => {
   const item = props.Items.map( (item) => {
               var quant = (props.Orders[item.id] == undefined) ? 0 : props.Orders[item.id].quantity;
               return  <li key={item.id} class="wow fadeInUp" data-wow-duration="300ms" data-wow-delay="300ms">
                        <div class="item">
                            <div class="item-title">
                                <h2>{item.name}</h2>
                                <div class="border-bottom"></div>
                                <span>
                                Rs. {item.price} 
                                &nbsp;
                                <button 
                                  onClick={props.addItem} 
                                  id={item.id}
                                  class="btn btn-success"
                                  >+</button>
                                &nbsp;{quant}&nbsp;
                                <button
                                  onClick={props.removeItem}
                                   id={item.id}
                                    class="btn btn-danger">-</button> 
                                </span>

                            </div>
                        </div>
                    </li>;
   });

	return (
             
                <ul>
                {item}
                </ul>

		)
}

export default Menu;