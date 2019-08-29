import React, { Component } from "react";
import { connect } from "react-redux";
import Menu from "../../components/Menu/Menu";
import AddToCart from "../../components/Cart/AddToCart";
import * as Actions from "../../Actions/index";
class MenuContainer extends Component {
    
	state = {
               orders : []     
                
	        }
  componentDidMount() {

    console.log("Component Mounted");
    this.props.fetchItems();
    
  }
	
	addItem = (event) =>  {
          var cpyState = {...this.state.orders};
          if(cpyState[event.target.id] !== undefined){
          	cpyState[event.target.id].quantity++;
          }
          else{
          	  var item = {};
              item.id=event.target.id;
              item.quantity=1;
              cpyState[event.target.id] = item;
              console.log(item);
          }
         
          this.setState({orders:cpyState});
          

	}

	removeItem = (event) =>  {
     var cpyState = {...this.state.orders};
          if(cpyState[event.target.id] !== undefined && cpyState[event.target.id].quantity>0){
            cpyState[event.target.id].quantity--;
          }
          else {
             var item = {};
              item.id=event.target.id;
              item.quantity=0;
              cpyState[event.target.id] = item;
              }

            if(cpyState[event.target.id].quantity==0){
              console.log("Quant is zero");
               delete cpyState[event.target.id];
            }
          
          this.setState({orders:cpyState});
          console.log(this.state.orders);
	}

	addToCart = () => {
		this.props.addToCart(this.state.orders);
	}

	render() 
	{
          console.log("Data Props");
          console.log(this.props);
          var disabled = (Object.keys(this.state.orders).length == 0)?true:false;
          return (
                  <>
                    <Menu 
                        Items={this.props.items}
                        Orders={this.state.orders}
                        addItem={this.addItem}
                        removeItem={this.removeItem}

                    />

                    <AddToCart 
                        addToCart={this.addToCart}
                        disabled={disabled}
                    />
                   </>
          	     );
               
	}


       

}

const mapStateToProps = state => {
          
      return {
               
               items:state.items.items 
      }
}

const dispatchToProps = dispatch => {

	return { 
            fetchItems: () => dispatch(Actions.fetchItems()),
            addToCart: (orderData) => dispatch(Actions.Cart(orderData)) 
          }
}

export default connect(
                      mapStateToProps,
                      dispatchToProps
                      )(MenuContainer);