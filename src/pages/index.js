import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"
import { Container, Row, Col } from "react-bootstrap"
import "../styles/global.scss"

class IndexPage extends React.Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <SEO
          title="Tyler Vawser"
          keywords={[`blog`, `Tyler Vawser`, `Tvawser`, `react`]}
        />

        <Row className="wider ml-3 wsans w-medium h2 pt-3 pb-0 mb-0 line-height-1">
          Let’s talk.
        </Row>
        <Row className="day-gray ml-3 roboto w-regular h4 pt-0 mt-0 line-height-1">
          <Link className="fancy-link " to="#">
            Set up a call
          </Link>
        </Row>
        <Row className="ml-0 roboto w-regular h6 d-flex justify-content-between flex-md-nowrap w-75 align-items-end mt-5 pt-5">
          <Col lg={3} md={2}>
            <Link className="fancy-link " to="#">
              Twitter
            </Link>{" "}
            /{" "}
            <Link className="fancy-link " to="#">
              Email
            </Link>{" "}
            /{" "}
            <Link className="fancy-link " to="#">
              LinkedIn
            </Link>
          </Col>
          <Col lg={3} md={2}>
            <Row className="justify-content-end wsans w-medium h4 d-flex">
              Previously At.
            </Row>
            <Row className="justify-content-end">
              <Link className="fancy-link  mr-1" to="#">
                Sticker Mule{" "}
              </Link>
              <div>/</div>
              <Link className="fancy-link ml-1 " to="#">
                {" "}
                Museum Hack
              </Link>
            </Row>
          </Col>
        </Row>
      </Layout>
    )
  }
}

export default IndexPage
