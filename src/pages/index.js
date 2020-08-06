import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"
import { Row, Col } from "react-bootstrap"
import "../styles/global.scss"

class IndexPage extends React.Component {
  render() {
    const siteTitle = "Tyler Vawser is asking questions."

    return (
      <Layout
        className="main-title"
        location={this.props.location}
        title={siteTitle}
      >
        <SEO
          title="Tyler Vawser"
          keywords={[`blog`, `Tyler Vawser`, `Tvawser`, `react`]}
        />

        <Link to="#">
          <img style={{ height: 20 }} src="../images/menu.svg" alt="Menu" />
        </Link>

        <Row>Let's talk</Row>
        <Row>Set up a call</Row>
        <Row>
          <Col>
            <Link className="text-dark" to="#">
              Twitter
            </Link>
          </Col>
          <Col>/</Col>
          <Col>
            <Link className="text-dark" to="#">
              Email
            </Link>
          </Col>
          <Col>/</Col>
          <Col>
            <Link className="text-dark" to="#">
              LinkedIn
            </Link>
          </Col>
        </Row>
        <Row>Previously At.</Row>
        <Row>Sticker Mule / Museum Hack</Row>

        <Link to="/blog/">
          <Button marginTop="35px">Go to Blog</Button>
        </Link>
      </Layout>
    )
  }
}

export default IndexPage
