import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"
import { Row, Col } from "react-bootstrap"
import "../styles/global.scss"

class IndexPage extends React.Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <SEO
          title="Tyler Vawser"
          keywords={[`blog`, `Tyler Vawser`, `Tvawser`, `react`]}
        />
        <Row>Let's talk</Row>
        <Row>Set up a call</Row>
        <Row>
          <Col xl={1}>
            <Link className="fancy-link " to="#">
              Twitter
            </Link>
          </Col>
          <Col xl={1}>/</Col>
          <Col xl={1}>
            <Link className="fancy-link " to="#">
              Email
            </Link>
          </Col>
          <Col xl={1}>/</Col>
          <Col xl={1}>
            <Link className="fancy-link " to="#">
              LinkedIn
            </Link>
          </Col>
        </Row>
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

        <Link to="/blog/">
          <Button marginTop="35px">Go to Blog</Button>
        </Link>
      </Layout>
    )
  }
}

export default IndexPage
