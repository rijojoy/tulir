import React from "react";

const ContactUs = () => {

  return(
             <section id="contact-us">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="block">
                                    <h1 class="heading wow fadeInUp" data-wow-duration="500ms" data-wow-delay="300ms">our <span>CONTACT US</span></h1>
                                    <h3 class="title wow fadeInLeft" data-wow-duration="500ms" data-wow-delay="300ms">Sign Up for <span>Email Alerts</span> </h3>
                                    <form>
                                        <div class="form-group wow fadeInDown" data-wow-duration="500ms" data-wow-delay="600ms">
                                            <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Write your full name here..." />
                                        </div>
                                        <div class="form-group wow fadeInDown" data-wow-duration="500ms" data-wow-delay="800ms">
                                            <input type="text" class="form-control" placeholder="Write your email address here..." />
                                        </div>
                                        <div class="form-group wow fadeInDown" data-wow-duration="500ms" data-wow-delay="1000ms">
                                            <textarea class="form-control" rows="3" placeholder="Write your message here..."></textarea>
                                        </div>
                                    </form>
                                    <a class="btn btn-default wow bounceIn" data-wow-duration="500ms" data-wow-delay="1300ms" href="#" role="button">send your message</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
  	);
	
}

export default ContactUs;