import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"
import { Container, Row, Col, Modal } from "react-bootstrap"
import "../styles/global.scss"
import TransitionLink from "gatsby-plugin-transition-link"
import AniLink from "gatsby-plugin-transition-link/AniLink"

class IndexPage extends React.Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <SEO
          title="Tyler Vawser"
          keywords={[
            `blog`,
            `Tyler Vawser`,
            `Tvawser`,
            `tvaw`,
            `Apptegy`,
            `VP of People`,
          ]}
        />

        <Row
          style={{
            color: "var(--textNormal)",
            transitionTimingFunction: `cubic-bezier(0.25, 0.1, 0.25, 1)`,
            transition: `0.4s`,
          }}
          className="wider ml-3 wsans w-medium h2 pt-3 pb-0 mb-0 line-height-1"
        >
          Let’s talk.
        </Row>
        <Row
          style={{
            color: "var(--textTitle)",
            transitionTimingFunction: `cubic-bezier(0.25, 0.1, 0.25, 1)`,
            transition: `0.4s`,
          }}
          className="ml-3 roboto w-regular h4 pt-0 mt-0 line-height-1"
        >
          <AniLink
            style={{
              color: "var(--textTitle)",
              transitionTimingFunction: `cubic-bezier(0.25, 0.1, 0.25, 1)`,
              transition: `0.4s`,
            }}
            className="fancy-link"
            cover
            bg="#663399"
            direction="left"
            top="exit"
            to="calendly"
          >
            Set up a call
          </AniLink>
        </Row>
        <Row
          style={{
            color: "var(--textTitle)",
            transitionTimingFunction: `cubic-bezier(0.25, 0.1, 0.25, 1)`,
            transition: `0.4s`,
          }}
          className="ml-0 mr-5 pr-5 roboto w-regular h6 d-flex justify-content-between flex-md-nowrap w-100 align-items-end mt-5 pt-5"
        >
          <Col lg={3} md={2}>
            <a
              style={{
                color: "var(--textTitle)",
                transitionTimingFunction: `cubic-bezier(0.25, 0.1, 0.25, 1)`,
                transition: `0.4s`,
              }}
              className="fancy-link "
              href="https://twitter.com/tvaw"
            >
              Twitter
            </a>{" "}
            /{" "}
            <a
              style={{
                color: "var(--textTitle)",
                transitionTimingFunction: `cubic-bezier(0.25, 0.1, 0.25, 1)`,
                transition: `0.4s`,
              }}
              className="fancy-link "
              href="mailto:tvawser@gmail.com?subject=Saw%20your%20website%20lets%20chat"
            >
              Email
            </a>{" "}
            /{" "}
            <a
              style={{
                color: "var(--textTitle)",
                transitionTimingFunction: `cubic-bezier(0.25, 0.1, 0.25, 1)`,
                transition: `0.4s`,
              }}
              className="fancy-link "
              href="https://www.linkedin.com/in/tylervawser/"
            >
              LinkedIn
            </a>
          </Col>
          <Col lg={3} md={2} className="mr-5 pr-5 previously-fixed">
            <Row
              style={{
                color: "var(--textNormal)",
                transitionTimingFunction: `cubic-bezier(0.25, 0.1, 0.25, 1)`,
                transition: `0.4s`,
              }}
              className="justify-content-end wsans w-medium h4 d-flex"
            >
              Previously at
            </Row>
            <Row className="justify-content-end">
              <Link
                style={{
                  color: "var(--textTitle)",
                  transitionTimingFunction: `cubic-bezier(0.25, 0.1, 0.25, 1)`,
                  transition: `0.4s`,
                }}
                className="fancy-link  mr-1"
                to="https://www.stickermule.com/"
              >
                Sticker Mule{" "}
              </Link>
              <div className="pl-1"> /</div>
              <Link
                style={{
                  color: "var(--textTitle)",
                  transitionTimingFunction: `cubic-bezier(0.25, 0.1, 0.25, 1)`,
                  transition: `0.4s`,
                }}
                className="fancy-link ml-1 "
                to="https://museumhack.com/"
              >
                Museum Hack{"  "}
              </Link>
              <div className="pl-1"> /</div>
            </Row>
            <Row className="justify-content-end">
              <Link
                style={{
                  color: "var(--textTitle)",
                  transitionTimingFunction: `cubic-bezier(0.25, 0.1, 0.25, 1)`,
                  transition: `0.4s`,
                }}
                className="fancy-link ml-1 "
                to="https://okdork.com/"
              >
                OkDork{" "}
              </Link>
              <div className="pl-1"> /</div>
              <Link
                style={{
                  color: "var(--textTitle)",
                  transitionTimingFunction: `cubic-bezier(0.25, 0.1, 0.25, 1)`,
                  transition: `0.4s`,
                }}
                className="fancy-link ml-1 "
                to="hhttps://www.tkc.edu/"
              >
                {" "}
                The Kings College
              </Link>
            </Row>
          </Col>
        </Row>
      </Layout>
    )
  }
}

export default IndexPage
