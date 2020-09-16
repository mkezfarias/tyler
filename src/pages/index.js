import React from "react"

import Layout from "../components/layout"

import { Row, Col } from "react-bootstrap"
import "../styles/global.scss"

import AniLink from "gatsby-plugin-transition-link/AniLink"

import { GatsbySeo } from "gatsby-plugin-next-seo"

class IndexPage extends React.Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <GatsbySeo
          title="Tyler Vawser"
          description="Learn more about Tyler Vawser, what he's doing now, his work, and more."
          canonical="https://www.tylervawser.com/"
          keywords="tylervawser,tyler,vawser,apptegy,stickermule,museumhack"
          openGraph={{
            url: "https://www.tylervawser.com",

            title: "Tyler Vawser",
            description: "Learn more about Tyler Vawser and his work",
            images: [
              {
                url: "../src/images/OGtylervawser.jpg",
                width: 800,
                height: 600,
                alt: "Tyler Vawser",
              },
            ],
            site_name: "TylerVawser",
          }}
          twitter={{
            handle: "@tvaw",
            site: "@site",
            cardType: "summary_large_image",
          }}
        />

        <div fluid className="container-static ml-2 ml-md-5">
          <Row
            style={{
              color: "var(--textNormal)",
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
              className=" mb-0 pb-0 fancy-link-footer"
              cover
              bg="#663399"
              direction="left"
              top="exit"
              to="connect"
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
            className="ml-0 mr-5 pr-5 mt-0 roboto w-regular h6 d-flex justify-content-between flex-md-nowrap w-100 align-items-end pt-0 pt-md-0"
          >
            <Col
              xs={12}
              sm={12}
              xl={6}
              lg={6}
              md={6}
              className="mt-0 d-sm-flex flex-column flex-md-row"
            >
              <a
                style={{
                  color: "var(--textTitle)",
                  transitionTimingFunction: `cubic-bezier(0.25, 0.1, 0.25, 1)`,
                  transition: `0.4s`,
                }}
                href="https://twitter.com/tvaw"
                className="link-mobile fancy-link-footer d-block"
                target="_blank"
              >
                Twitter
              </a>{" "}
              <span className="d-none d-md-inline px-2">/ </span>
              <a
                style={{
                  color: "var(--textTitle)",
                  transitionTimingFunction: `cubic-bezier(0.25, 0.1, 0.25, 1)`,
                  transition: `0.4s`,
                }}
                className="link-mobile fancy-link-footer  d-block"
                href="mailto:tvawser@gmail.com?subject=Saw%20your%20website%20lets%20chat"
                target="_blank"
              >
                Email
              </a>{" "}
              <span className="d-none d-md-inline px-2">/ </span>
              <a
                style={{
                  color: "var(--textTitle)",
                  transitionTimingFunction: `cubic-bezier(0.25, 0.1, 0.25, 1)`,
                  transition: `0.4s`,
                }}
                className="link-mobile fancy-link-footer  d-block"
                href="https://www.linkedin.com/in/tylervawser/"
                target="_blank"
              >
                LinkedIn
              </a>
            </Col>
            <Col
              xl={6}
              lg={6}
              md={6}
              sm={12}
              xs={12}
              className="ml-5 mt-5 previously-mobile"
            >
              <Row
                style={{
                  color: "var(--textNormal)",
                  transitionTimingFunction: `cubic-bezier(0.25, 0.1, 0.25, 1)`,
                  transition: `0.4s`,
                }}
                className="d-flex justify-content-end wsans w-medium md-h4 d-flex ml-auto pr-3 pr-sm-5 mr-sm-0 h3"
              >
                Previously at
              </Row>

              <Row className="d-flex justify-content-end pr-0 pr-sm-5 mr-1">
                <a
                  style={{
                    color: "var(--textTitle)",
                    transitionTimingFunction: `cubic-bezier(0.25, 0.1, 0.25, 1)`,
                    transition: `0.4s`,
                  }}
                  className="fancy-link-footer ml-0 d-flex "
                  href="https://www.stickermule.com/"
                  target="_blank"
                >
                  Sticker Mule
                </a>
              </Row>
              <Row className="d-flex justify-content-end pr-0 pr-sm-5 mr-1">
                <a
                  style={{
                    color: "var(--textTitle)",
                    transitionTimingFunction: `cubic-bezier(0.25, 0.1, 0.25, 1)`,
                    transition: `0.4s`,
                  }}
                  className="fancy-link-footer ml-0 d-flex"
                  href="https://museumhack.com/"
                  target="_blank"
                >
                  Museum Hack
                </a>
              </Row>
              <Row className="d-flex justify-content-end pr-0 pr-sm-5 mr-1">
                <a
                  style={{
                    color: "var(--textTitle)",
                    transitionTimingFunction: `cubic-bezier(0.25, 0.1, 0.25, 1)`,
                    transition: `0.4s`,
                  }}
                  className="fancy-link-footer ml-0 d-flex"
                  href="https://okdork.com/"
                  target="_blank"
                >
                  OkDork
                </a>
              </Row>
              <Row className="d-flex justify-content-end pr-0 pr-sm-5 mr-1">
                <a
                  style={{
                    color: "var(--textTitle)",
                    transitionTimingFunction: `cubic-bezier(0.25, 0.1, 0.25, 1)`,
                    transition: `0.4s`,
                  }}
                  className="fancy-link-footer ml-0 d-flex justify-content-end"
                  href="https://www.tkc.edu/"
                  target="_blank"
                >
                  The Kings College
                </a>
              </Row>
            </Col>
          </Row>
        </div>
      </Layout>
    )
  }
}

export default IndexPage
