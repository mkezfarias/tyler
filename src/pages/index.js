import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"
import { Container, Row, Col, Modal } from "react-bootstrap"
import "../styles/global.scss"
import TransitionLink from "gatsby-plugin-transition-link"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import ThemeToggler from "gatsby-plugin-dark-mode/ThemeToggler"

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
        <div fluid className="container-static">
          <Row
            style={{
              color: "var(--textNormal)",
              transitionTimingFunction: `cubic-bezier(0.25, 0.1, 0.25, 1)`,
              transition: `0.4s`,
            }}
            className="wider ml-3 wsans w-medium h1 md-h2 pt-md-3 pb-0 mb-0 line-height-1"
          >
            Let’s talk.
          </Row>
          <Row
            style={{
              color: "var(--textTitle)",
              transitionTimingFunction: `cubic-bezier(0.25, 0.1, 0.25, 1)`,
              transition: `0.4s`,
            }}
            className="ml-3 roboto w-regular h2 md-h4 pt-0 mt-0 line-height-1"
          >
            <AniLink
              style={{
                color: "var(--textTitle)",
                transitionTimingFunction: `cubic-bezier(0.25, 0.1, 0.25, 1)`,
                transition: `0.4s`,
              }}
              className="fancy-link mb-0 pb-0"
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
            className="ml-0 mr-5 pr-5 mt-0 roboto w-regular h6 d-flex justify-content-between flex-md-nowrap w-100 align-items-end pt-0 pt-md-5"
          >
            <Col lg={3} xs={4} className="mt-0">
              <a
                style={{
                  color: "var(--textTitle)",
                  transitionTimingFunction: `cubic-bezier(0.25, 0.1, 0.25, 1)`,
                  transition: `0.4s`,
                }}
                href="https://twitter.com/tvaw"
                className="link-mobile fancy-link"
              >
                Twitter
              </a>{" "}
              <span className="d-none d-md-inline">/ </span>
              <a
                style={{
                  color: "var(--textTitle)",
                  transitionTimingFunction: `cubic-bezier(0.25, 0.1, 0.25, 1)`,
                  transition: `0.4s`,
                }}
                className="link-mobile fancy-link"
                href="mailto:tvawser@gmail.com?subject=Saw%20your%20website%20lets%20chat"
              >
                Email
              </a>{" "}
              <span className="d-none d-md-inline">/ </span>
              <a
                style={{
                  color: "var(--textTitle)",
                  transitionTimingFunction: `cubic-bezier(0.25, 0.1, 0.25, 1)`,
                  transition: `0.4s`,
                }}
                className="link-mobile fancy-link"
                href="https://www.linkedin.com/in/tylervawser/"
              >
                LinkedIn
              </a>
            </Col>
            <Col
              xl={{ span: 4, offset: 4 }}
              xs={12}
              className="ml-5 mt-5 previously-mobile"
            >
              <Row
                style={{
                  color: "var(--textNormal)",
                  transitionTimingFunction: `cubic-bezier(0.25, 0.1, 0.25, 1)`,
                  transition: `0.4s`,
                }}
                className="justify-content-md-around justify-content-end wsans w-medium md-h4 d-flex ml-auto pr-3 pr-md-5 mr-md-0 h3"
              >
                Previously at
              </Row>
              <Row
                className="justify-content-end d-flex flex-column ml-md-auto align-items-end pr-3 pr-md-0 flex-md-row"
                style={{ justifyContent: `space-evenly` }}
              >
                {/* <Col
                  xl={5}
                  className="d-flex justify-items-end text-nowrap ml-md-5 pl-md-5"
                >
                  <a
                    style={{
                      color: "var(--textTitle)",
                      transitionTimingFunction: `cubic-bezier(0.25, 0.1, 0.25, 1)`,
                      transition: `0.4s`,
                    }}
                    className="fancy-link  ml-"
                    
                  >
                    
                  </a>
                  <span className="d-none d-md-inline pl-1">/ </span>
                </Col> */}
                <div className="d-flex line" style={{ flexBasis: `40%` }}>
                  <a
                    style={{
                      color: "var(--textTitle)",
                      transitionTimingFunction: `cubic-bezier(0.25, 0.1, 0.25, 1)`,
                      transition: `0.4s`,
                    }}
                    className="fancy-link ml-0 d-flex "
                    href="https://www.stickermule.com/"
                  >
                    Sticker Mule
                  </a>
                  <span className="d-none d-md-inline pl-1">/ </span>
                </div>
                <div className="d-flex line" style={{ flexBasis: `40%` }}>
                  <a
                    style={{
                      color: "var(--textTitle)",
                      transitionTimingFunction: `cubic-bezier(0.25, 0.1, 0.25, 1)`,
                      transition: `0.4s`,
                    }}
                    className="fancy-link ml-0 d-flex"
                    href="https://museumhack.com/"
                  >
                    Museum Hack
                  </a>
                  <span className="d-none d-md-inline pl-1">/ </span>
                </div>
                <div className="d-flex line" style={{ flexBasis: `40%` }}>
                  <a
                    style={{
                      color: "var(--textTitle)",
                      transitionTimingFunction: `cubic-bezier(0.25, 0.1, 0.25, 1)`,
                      transition: `0.4s`,
                    }}
                    className="fancy-link ml-0 d-flex"
                    href="https://okdork.com/"
                  >
                    OkDork
                  </a>
                  <span className="d-none d-md-inline pl-1">/</span>
                </div>
                <div className="d-flex line" style={{ flexBasis: `40%` }}>
                  <a
                    style={{
                      color: "var(--textTitle)",
                      transitionTimingFunction: `cubic-bezier(0.25, 0.1, 0.25, 1)`,
                      transition: `0.4s`,
                    }}
                    className="fancy-link ml-0 d-flex"
                    href="https://www.tkc.edu/"
                  >
                    The Kings College
                  </a>
                  <span className="d-none d-md-inline pl-1">/ </span>
                </div>
                {/*                   
                

                <Col
                  xl={5}
                  className="d-flex justify-items-end text-nowrap ml-md-1"
                >
                  <a
                    style={{
                      color: "var(--textTitle)",
                      transitionTimingFunction: `cubic-bezier(0.25, 0.1, 0.25, 1)`,
                      transition: `0.4s`,
                    }}
                    className="fancy-link ml-auto"
                    
                  >
                    OkDork
                  </a>
                  <span className="d-none d-md-inline pl-1">/ </span>
                </Col>
                <Col
                  xl={5}
                  className="d-flex justify-items-end text-nowrap ml-md-auto"
                >
                  <a
                    style={{
                      color: "var(--textTitle)",
                      transitionTimingFunction: `cubic-bezier(0.25, 0.1, 0.25, 1)`,
                      transition: `0.4s`,
                    }}
                    className="fancy-link ml-auto "
                    
                  >
                    The Kings College
                  </a>
                  <span className="d-none d-md-inline pl-1">/ </span>
                </Col> */}
              </Row>
            </Col>
          </Row>
        </div>
      </Layout>
    )
  }
}

export default IndexPage
