import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"
import { Container, Row, Col, Modal } from "react-bootstrap"
import "../styles/global.scss"
import PageTransition from "gatsby-plugin-page-transitions"

class IndexPage extends React.Component {
  render() {
    return (
      <PageTransition
        defaultStyle={{
          transition: "left 500ms cubic-bezier(0.47, 0, 0.75, 0.72)",
          left: "100%",
          position: "absolute",
          width: "100%",
        }}
        transitionStyles={{
          entering: { left: "0%" },
          entered: { left: "0%" },
          exiting: { left: "100%" },
        }}
        transitionTime={500}
      >
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
          <Row className="ml-0 mr-5 pr-5 roboto w-regular h6 d-flex justify-content-between flex-md-nowrap w-100 align-items-end mt-5 pt-5">
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
            <Col lg={3} md={2} className="mr-5 pr-5">
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
      </PageTransition>
    )
  }
}

export default IndexPage
