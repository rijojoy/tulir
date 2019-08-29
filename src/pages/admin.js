import React from "react"
import Layout from "../components/Layout/Layout";
import List from "../containers/Order/List";

const admin = () => {

	return(
              <Layout>
                <section id="price">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="orderDetails">
                                    <h1 class="heading wow fadeInUp" data-wow-duration="300ms" data-wow-delay="300ms"><span>Orders </span> <span>List</span></h1>
                                  <List />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
              </Layout>
		);
}

export default admin;