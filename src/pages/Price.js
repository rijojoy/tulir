import React from "react"
import Layout from "../components/Layout/Layout";
import MenuContainer from "../containers/MenuContainer/MenuContainer";
const Price = () => {

	return(
              <Layout>
                <section id="menu">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="block">
                                    <h1 class="heading wow fadeInUp" data-wow-duration="300ms" data-wow-delay="300ms">Our <span>MENU</span></h1>
                                    <div class="pricing-list">
                                        <div class="title">
                                            <h3>Price <span>List</span></h3>
                                        </div>
                                        <MenuContainer />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
              </Layout>
		);
}

export default Price;