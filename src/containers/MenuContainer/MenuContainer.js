import React, { Component } from "react";
import Menu from "../../components/Menu/Menu";
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
          if(cpyState[event.target.id] != undefined){
          	cpyState[event.target.id].quantity++;
          }
          else{
          	  var item = {};
              item.id=event.target.id;
              item.quantity=1;
              cpyState[event.target.id] = item;
          }
         
          this.setState({orders:cpyState});
          

	}

	removeItem = (event) =>  {
          console.log("Clicked");
          console.log(event.target.id);

	}

	render() 
	{
          return (

                    <Menu 
                        Items={this.state.items}
                        Orders={this.state.orders}
                        addItem={this.addItem}
                        removeItem={this.removeItem}

                    />
          	     );
               
	}
       

}

export default MenuContainer;