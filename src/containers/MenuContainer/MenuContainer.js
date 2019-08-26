import React, { Component } from "react";
import { connect } from "react-redux";
import Menu from "../../components/Menu/Menu";
import AddToCart from "../../components/Cart/AddToCart";
import * as actionTypes from "../../Constants/actions";
class MenuContainer extends Component {
    
	state = {
                items : [
                             
                           {id:1, name:"Aloo Chaat", price:25},
                           {id:2, name:"Bhel Puri", price:25},
                           {id:3, name:"Aloo Tikki Chaat", price:25},
                           {id:4, name:"Dahi Puri", price:25},
                           {id:5, name:"Ragda Patties", price:25},
                           {id:6, name:"Dahi Vada", price:25},
                           {id:7, name:"Pakora", price:25},
                           {id:8, name:"Mangode", price:25},
                           {id:9, name:"Papri Chaat", price:25}
                ],
                orders : []

                	      
                
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
                Object.keys(cpyState).slice(event.target.id);
            }
          
          this.setState({orders:cpyState});
          console.log(this.state.orders);
	}

	addToCart = () => {
		this.props.addToCart(this.state.orders);
	}

	render() 
	{
          var disabled = (Object.keys(this.state.orders).length == 0)?true:false;
          return (
                  <>
                    <Menu 
                        Items={this.state.items}
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

const mapStateToProps = null;

const dispatchToProps = dispatch => {

	return { addToCart: (orderData) => dispatch({type:actionTypes.ADD_CART,data:orderData}) }
}

export default connect(
                      mapStateToProps,
                      dispatchToProps
                      )(MenuContainer);