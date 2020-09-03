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
import MenuFixedIcon from "../components/MenuFixedIcon"
import { GatsbySeo } from "gatsby-plugin-next-seo"

class IndexPage extends React.Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <GatsbySeo
          title="Tyler Vawser"
          description="Learn more about Tyler Vawser, what he's doing now, his work, and favorites."
          canonical="https://www.tylervawser.com/"
          keywords="tylervawser,tyler,vawser,apptegy,stickermule,museumhack"
          openGraph={{
            url: "https://www.tylervawser.com",

            title: "Open Graph Title",
            description: "Open Graph Description",
            images: [
              {
                url: "https://www.example.ie/og-image-01.jpg",
                width: 800,
                height: 600,
                alt: "Og Image Alt",
              },
              {
                url: "https://www.example.ie/og-image-02.jpg",
                width: 900,
                height: 800,
                alt: "Og Image Alt Second",
              },
              { url: "https://www.example.ie/og-image-03.jpg" },
              { url: "https://www.example.ie/og-image-04.jpg" },
            ],
            site_name: "TylerVawser",
          }}
          twitter={{
            handle: "@tvaw",
            site: "@site",
            cardType: "summary_large_image",
          }}
        />
        {/* 
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
        /> */}

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
                className="link-mobile fancy-link d-block"
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
                className="link-mobile fancy-link  d-block"
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
                className="link-mobile fancy-link  d-block"
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
                  className="fancy-link ml-0 d-flex "
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
                  className="fancy-link ml-0 d-flex"
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
                  className="fancy-link ml-0 d-flex"
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
                  className="fancy-link ml-0 d-flex justify-content-end"
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
