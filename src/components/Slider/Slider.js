import React from "react";
import Slick from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1
    };
const Slider = () => {

  return(
  	<section id="slider">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="block wow fadeInUp" data-wow-duration="500ms" data-wow-delay="300ms">
                        <div class="title">
                            <h3>Signature <span>Dishes</span></h3>
                        </div>
                        <Slick  {...settings} >
                            <div>
                                <img class="img-responsive" src="images/slider/slider-img-1.jpg" alt="" />
                            </div>
                            <div>
                                <img class="img-responsive" src="images/slider/slider-img-2.jpg" alt="" />
                            </div>
                            <div>
                                <img class="img-responsive" src="images/slider/slider-img-3.jpg" alt="" />
                            </div>
                            <div>
                                <img class="img-responsive" src="images/slider/slider-img-4.jpg" alt="" />
                            </div>
                            <div>
                                <img class="img-responsive" src="images/slider/slider-img-1.jpg" alt="" />
                            </div>
                            <div>
                                <img class="img-responsive" src="images/slider/slider-img-2.jpg" alt="" />
                            </div>
                            <div>
                                <img class="img-responsive" src="images/slider/slider-img-3.jpg" alt="" />
                            </div>
                            <div>
                                <img class="img-responsive" src="images/slider/slider-img-4.jpg" alt="" />
                            </div>
                        
                        </Slick>
                    </div>
                </div>
            </div>
        </div>
    </section>
  	);
	
}

export default Slider;