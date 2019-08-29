import React, { Component } from "react";
import { connect } from "react-redux";
import * as Actions from "../../Actions/index";
import ListOrderItems from "../../components/Order/ListOrderItems";
class List extends Component {
  
  componentDidMount() {

    console.log("Component Mounted");
    this.props.fetchItems();
    this.props.fetchOrders();

  }
  
  
  render() 
  {

          var listComp = (this.props.listOrders.items != undefined) ?  <ListOrderItems
                            items={this.props.listOrders.items}
                            productsList={this.props.listItems}
                          /> :'';
          return (
                  <div class="ordersList">
                   {listComp}
                  </div>  

                 );
               
  }


       

}

const mapStateToProps = state => {
          console.log("Mapping");
           return {
               
               listOrders:state.listOrders,
               listItems:state.items
      }
}

const dispatchToProps = dispatch => {

  return { 
            fetchOrders: () => dispatch(Actions.fetchOrders()),
            fetchItems: () => dispatch(Actions.fetchItems())
          }
}

export default connect(
                      mapStateToProps,
                      dispatchToProps
                      )(List);