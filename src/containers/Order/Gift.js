import React, { Component } from "react";
import { connect } from "react-redux";

class Gift extends Component {

    componentDidMount() {
    	console.log("Orders State Data");
        console.log(this.props);
    }
	render() {
        
		return (
               <div class="panel panel-info">
                 <div class="panel-heading"> Thank You for your Order !!!</div>
                    <div class="panel-body">

                        Your Order is successfully placed.
                       {/*<button class="btn btn-success">
                       <span class="gift"> &#9827; </span>
                       Click here to see your Gift!!
                      </button> */}
          
                    </div>
               </div>
		);
	}
}

const mapStateToProps = state => {
          console.log(state.listOrders);
           return {
               
               listOrders:state.listOrders
      }
}
export default connect(mapStateToProps)(Gift);
