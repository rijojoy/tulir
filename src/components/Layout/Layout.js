import React from "react";
import Header from "../Header/Header";
import Subscribe from "../Subscribe/Subscribe";
import ContactUs from "../ContactUs/ContactUs";
import Footer from "../Footer/Footer";
import Bottom from "../Bottom/Bottom";

const Layout = ({ children}) => 
		{
           return(
                     <div id="chaatcravings">
                     <div class="row">
                       <div class="col-md-offset-4 col-md-6 logo-img" >
                       <img src="/images/logo.jpg" height="220" width="200" />
                       </div>
                     </div>
                      <React.Fragment>
	                    {/*  <Header /> */}
	                      	{children}
	                    {/* <Subscribe />
	                      <ContactUs />
						  <Footer /> */}
						  <Bottom /> 
                     </React.Fragment>
                    </div>
           	);
		};

export default Layout;

