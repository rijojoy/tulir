import React from "react"
import Layout from "../components/Layout/Layout"
import UserDetails from "../containers/UserDetails/UserDetails"
const Start = () => {
  return (
    <Layout>
      <section>
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="block">
                <h1
                  class="heading wow fadeInUp"
                  data-wow-duration="300ms"
                  data-wow-delay="300ms"
                >
                  User <span>Details</span>
                </h1>
                <div class="pricing-list">
                  <div class="row">
                    <div class="col-md-offset-4 col-md-4 col-sm-2 col-sm-offset-2">
                      <div class="form-group">
                       <UserDetails />
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
