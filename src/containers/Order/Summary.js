import React, { Component } from "react";
import { connect } from "react-redux";
import SummaryList from "../../components/Order/SummaryList";
import * as Actions from "../../Actions/index";
class Summary extends Component {

   handleSubmit = () => {

      let orderData = {
                        order:{
                           userDetails:this.props.userDetails,
                           items:this.props.orders.orders
                        }
      }
      this.props.confirmOrder(orderData);
   }
   render() {
         
         return(

                 <div>
                  <div className="title">
                  </div>
                  <SummaryList 
                          orders={this.props.orders}
                          items={this.props.items}
                          clickSubmit={this.handleSubmit}
                          />
                  
                  </div>
          )

   }

}

const mapStateToProps = (state) => {
   return {
             userDetails:state.userDetails,
             orders:state.orders,
             items:state.items.items
   }
}

const dispatchToProps = (dispatch) => {
  return {
         confirmOrder: (data) => dispatch(Actions.saveOrder(data)) 
  }
}
export default connect(
                       mapStateToProps,
                       dispatchToProps
                      )(Summary);