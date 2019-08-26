import React, { Component } from "react";
import { connect } from "react-redux";
import SummaryList from "../../components/Order/SummaryList";
class Summary extends Component {

   render() {
         
         console.log("State List");
         console.log(this.props);
         return(

                 <div className="pricing-list">
                  <div className="title" style={{ padding: "30px 10%" }}>
                    <h3>
                      Order No : <span>1</span>
                    </h3>
                  </div>
                  <SummaryList orders={this.props.data}/>
                </div>
          )

   }

}

const mapStateToProps = (state) => {
   
   return {
             data:state.orders
   }
}
export default connect(mapStateToProps)(Summary);