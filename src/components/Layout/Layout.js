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
                       <div class="heading" >
                       <img src="/images/logo.jpg" height="220" width="200" />
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

