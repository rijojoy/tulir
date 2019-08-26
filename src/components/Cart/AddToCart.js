import React from "react";
import { Link } from "gatsby";

const AddToCart = (props) => {
	console.log("disabled"+ props.disabled );
	return(

             <div style={{float:"right"}}>
                <Link to="/OrderSummary/" class="btn btn-default" onClick={props.addToCart} disabled={props.disabled}>Add To Cart</Link>
             </div>
		  )
}

export default AddToCart;