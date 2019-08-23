import React from "react";
import Header from "../Header/Header";
import Subscribe from "../Subscribe/Subscribe";
import ContactUs from "../ContactUs/ContactUs";
import Footer from "../Footer/Footer";
import Bottom from "../Bottom/Bottom";

const Layout = ({ children}) => 
		{
           return(
                      <React.Fragment>
	                      <Header />
	                      	{children}
	                    {/*  <Subscribe />
	                      <ContactUs />
						  <Footer />
						  <Bottom /> */}
                     </React.Fragment>
           	);
		};

export default Layout;

