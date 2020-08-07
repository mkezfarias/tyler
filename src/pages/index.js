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

        <Row className="wider ml-3 wsans w-medium h2 pb-0 mb-0 line-height-1">
          Let’s talk.
        </Row>
        <Row className="ml-3 roboto w-regular h4 pt-0 mt-0 line-height-1">
          Set up a call
        </Row>
        <Row className="ml-0 roboto w-regular h6">
          <Col>
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
          <Col>
            <Row>Previously At.</Row>
            <Row>
              <Link className="fancy-link " to="#">
                Sticker Mule
              </Link>{" "}
              /{" "}
              <Link className="fancy-link " to="#">
                Museum Hack
              </Link>
            </Row>
          </Col>
        </Row>

        <Link to="/blog/">
          <Button marginTop="35px">Go to Blog</Button>
        </Link>
      </Layout>
    )
  }
}

export default IndexPage
