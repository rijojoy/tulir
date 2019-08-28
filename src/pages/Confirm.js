import React from "react"
//import ScratchCard from 'react-scratchcard';
import Layout from "../components/Layout/Layout";
const Confirm = () => {
    const settings = {
  width: 640,
  height: 480,
  image: "/images/scratch.jpg",
  finishPercent: 50,
  onComplete: () => console.log('The card is now clear!')
};
	return(
              <Layout>
                <section>
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="block">
                                    <h1 class="heading wow fadeInUp" data-wow-duration="300ms" data-wow-delay="300ms">Order <span>Confirmation</span></h1>
                                    <div class="confirm col-md-offset-3 col-sm-offset-1">
                                        <div class="title">

                                            <h2> Thank You for your Order </h2>
                                           {/*   <h3>Scratch and <span>Win</span></h3> <br />
                                         <ScratchCard {...settings}>
                                                Congratulations! You WON!
                                            </ScratchCard>
                                          */}
                               
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
              </Layout>
		);
}

export default Confirm;