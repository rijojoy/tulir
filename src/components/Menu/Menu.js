import React from "react";

const Menu = (props) => {
   const item = props.Items.map( (item) => {
               var quant = (props.Orders[item.id] == undefined) ? 0 : props.Orders[item.id].quantity;
               return  <li key={item.id} class="wow fadeInUp" data-wow-duration="300ms" data-wow-delay="300ms">
                        <div class="item">
                            <div class="item-title">
                                <h2>{item.name}</h2>
                                <div class="border-bottom"></div>
                                <span>Rs. {item.price} 
                                <button 
                                  onClick={props.addItem} 
                                  id={item.id}>+</button>
                                &nbsp;{quant}&nbsp;
                                <button
                                  onClick={props.removeItem}
                                   id={item.id}>-</button> 
                                </span>

                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim&&</p>
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