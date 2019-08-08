import React, { Component } from "react";
import { Link } from "gatsby";
class Nav extends Component {

	state = {
		       isNavOpened:0
	}

	onToggleNav = () => {

           const cpyState = {...this.state};
                 cpyState.isNavOpened = (!this.state.isNavOpened)?1:0;
           this.setState(cpyState);
	}
	render(){
        
	    const items = [
	                     { id:1, page:"/", title:"Home" },
	                     { id:2, page:"About", title:"About" },
	                     { id:3, page:"Blog", title:"Blog" },
	                     { id:4, page:"Price", title:"Menu" },
	                     { id:5, page:"News", title:"News" },
	                     { id:6, page:"Contact", title:"Contact us" }
		              ];
		let ItemLis = Object.keys(items).map( (idx) => {
	                      
	                      return <li><Link to={items[idx].page}>{items[idx].title}</Link></li>;

		}) ;  

		let navBarClass = (!this.state.isNavOpened)?"navbar-toggle collapsed":"navbar-toggle";  
		let collapseInClass = (!this.state.isNavOpened)?"collapse navbar-collapse":"collapse navbar-collapse in";         
		let navItems =    	
						<nav id="navigation">
					        <div class="container">
					            <div class="row">
					                <div class="col-md-12">
					                    <div class="block">
					                        <nav class="navbar navbar-default">
					                          <div class="container-fluid">
					                           {/* Brand and toggle get grouped for better mobile display */}
					                            <div class="navbar-header">
					                              <button type="button" class={navBarClass} onClick = {this.onToggleNav} data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
					                                <span class="sr-only">Toggle navigation</span>
					                                <span class="icon-bar"></span>
					                                <span class="icon-bar"></span>
					                                <span class="icon-bar"></span>
					                              </button>
					                                  <a class="navbar-brand" href="#">
					                                    <img src="images/logo.png" alt="Logo" />
					                                  </a>

					                            </div>

					                           {/* Collect the nav links, forms, and other content for toggling */}
					                            <div class={collapseInClass} id="bs-example-navbar-collapse-1">
					                              <ul class="nav navbar-nav navbar-right" id="top-nav">
					                                {ItemLis}
					                              </ul>
					                            </div>
					                          </div>
					                        </nav>
					                    </div>
					                </div>
					            </div>
					        </div>
						</nav>
						;

						return  navItems;

	}
	
	
}

export default Nav;