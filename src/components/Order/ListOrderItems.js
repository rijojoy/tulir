import React from "react";
import {
    Accordion,
    AccordionItem,
    AccordionItemButton,
    AccordionItemHeading,
    AccordionItemPanel,
} from 'react-accessible-accordion';
 
// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';
import AdminSummaryList from "../../components/Order/AdminSummaryList";
const ListOrderItems = (props) => {
	
	var i=1;
	var orderData = Object.keys(props.items).map( (item,k) => {
                    
                     var ret = '';
                     if(props.items[item]['order']['userDetails']['name']  == undefined){
                           ret = '';
                     }
                     else{
                     	console.log("I Val"+i);
                     	//var cnt = k+1;
                     	console.log("5 Multiple");
                     	console.log(i%5);
                     	var winner = (i%5 == 0)?1:0;
                     	var winnerBtn = '';
                     	    if(winner == 1){
                     	    	winnerBtn = <button class="btn btn-warning"> &#9818; Winner</button> ;
                     	    }
                     	    i++;
                     	ret =  <Accordion>
					            <AccordionItem>
					                <AccordionItemHeading>
					                    <AccordionItemButton>
					                      <div class="row">
					                            <div class="col-md-8">
					                            <h2>{props.items[item]['order']['userDetails']['name']}</h2>
					                            </div>
					                             <div class="col-md-4">
                                                {winnerBtn} &nbsp;
					                         {/*   <a class="btn btn-success">Accept Order</a>
					                            &nbsp;
					                            <a class="btn btn-danger">Deny Order</a> */}
					                            </div>
					                       </div>
					                    </AccordionItemButton>
					                </AccordionItemHeading>
					                <AccordionItemPanel>
					                    <p>
					                      <AdminSummaryList 
					                        listItems={props.items[item]['order']['items']}
					                        productsListItems={props.productsList.items}

					                      />
					                    </p>
					                </AccordionItemPanel>
					            </AccordionItem>
					          
					        </Accordion>;
                     }
                     return ret;
                     /*<div class="row">
                            <div class="col-md-8">
                            {props.items[item]['order']['userDetails']['name']}
                            </div>
                             <div class="col-md-4">
                            <a class="btn btn-success">Accept Order</a>
                            &nbsp;
                            <a class="btn btn-danger">Deny Order</a>
                            </div>
                            </div>;*/
    });
          
	return (
	    <div class="panel panel-default">
  <div class="panel-heading">Orders</div>
  <div class="panel-body">
          {orderData}
</div>
</div>
		
	)
}

export default ListOrderItems;