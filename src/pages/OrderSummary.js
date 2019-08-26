import React from "react"
import Layout from "../components/Layout/Layout"
import Summary from "../containers/Order/Summary"
const OrderSummary = () => {
  return (
    <Layout>
      <section id="price">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="block">
                <h1
                  className="heading wow fadeInUp"
                  data-wow-duration="300ms"
                  data-wow-delay="300ms"
                >
                  {" "}
                  Order <span>Details</span>
                </h1>
                <Summary />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default OrderSummary
