import React from "react"
import Layout from "../components/Layout/Layout"
import { Link } from "gatsby"
const Start = () => {
  return (
    <Layout>
      <section id="start">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="block">
                <h1
                  class="heading wow fadeInUp"
                  data-wow-duration="300ms"
                  data-wow-delay="300ms"
                >
                  {" "}
                  User <span>Details</span>
                </h1>
                <div class="pricing-list">
                  <div class="row">
                    <div class="col-md-offset-3 col-md-4">
                      <div class="form-group">
                        <h3>
                          <label for="userName">Full Name:</label>
                        </h3>
                        <form>
                         <div class="form-group">
                                  <div class="input-group">
                                      <input type="text" class="form-control" id="exampleInputAmount" placeholder="Enter your name to proceed..." />
                                      <div class="input-group-addon">
                                          <Link class="btn btn-success" to="/Price/">Enter</Link>
                                      </div>
                                  </div>
                         </div>
                       </form>
                         
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Start
