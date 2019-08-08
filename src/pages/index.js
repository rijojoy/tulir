import React from "react"
import Slider from "../components/Slider/Slider";
import Layout from "../components/Layout/Layout";

const Index = () => {

	return(
              <Layout>
                  <Slider />
                  <section id="about-us">
			        <div class="container">
			            <div class="row">
			                <div class="col-md-12">
			                    <div class="block">
			                        <img class="wow fadeInUp" data-wow-duration="300ms" data-wow-delay="400ms" src="images/cooker-img.png" alt="cooker-img" />
			                    </div>
			                </div>
			            </div>
			        </div>
    			  </section>
              </Layout>
		);
}

export default Index;