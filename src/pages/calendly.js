import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"
import { Container, Row, Col, Modal } from "react-bootstrap"
import "../styles/global.scss"
import { ThemeToggler } from "gatsby-plugin-dark-mode"
import whiteLogo from "../images/logo-white.svg"
import darkLogo from "../images/logo.svg"
import dayButton from "../images/daymode.svg"
import nightButton from "../images/night-button.svg"
import closeBTN from "../images/x.svg"
import menuIMG from "../images/menu.svg"
import menuDarkIMG from "../images/menu2.svg"
import arrowIMG from "../images/arrow.svg"
import toolsIcon from "../images/favorite tools icon.svg"
import podcastsIcon from "../images/favorite podcasts icon.svg"
import travelIcon from "../images/favorite podcasts icon.svg"
import videosIcon from "../images/favorite videos icon.svg"
import footerIMG from "../images/footer.png"
import footerIMG2 from "../images/footer@2x.png"
import Menu from "../components/menu"
import CalendlyEmbed from "../components/CalendlyEmbed"
import twitterIMG from "../images/twitter.svg"
import mailIMG from "../images/mail.svg"
import linkedinIMG from "../images/linkedin.svg"
import LogoFixedMobile from "../components/LogoFixedMobile"
import AniLink from "gatsby-plugin-transition-link/AniLink"

class Calendly extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      show: false,
    }
  }

  render() {
    return (
      <Layout location={this.props.location}>
        <SEO
          title="Tyler Vawser"
          keywords={[`blog`, `Tyler Vawser`, `Tvawser`, `react`]}
        />
        <LogoFixedMobile />

        <AniLink
          style={{
            color: "var(--textTitle)",
          }}
          to="/"
          cover
          bg="var(--gradient-background)"
          direction="right"
          top="entry"
          duration={1}
          entryOffset={800}
          className="d-none d-sm-block"
        >
          {" "}
          <img
            src={whiteLogo}
            onClick={this.handleClose}
            alt="Tyler Vawser"
            className="logo-fixed"
            style={{ zIndex: `1` }}
          ></img>
        </AniLink>
        <Col xl={7} sm={12} md={8} lg={8} style={{ minHeight: `1120px` }}>
          <CalendlyEmbed account="tyler-apptegy" eventName="call-with-tyler" />
        </Col>
        <div className="sidebar-fixed pl-5 ">
          <Row
            className="mx-auto px-auto mr-sm-3 pr-sm-3"
            style={{ position: `fixed`, bottom: `10px` }}
          >
            <Col
              xs={11}
              sm={11}
              md={10}
              lg={10}
              xl={10}
              style={{ fontSize: `20px` }}
              className="wider wsans w-medium line-height-1 text-light h2 sm-h1 w-semibold align-center m-auto m-sm-4 pl-5 pt-4 text-right social-text"
            >
              Tyler is on social media.
            </Col>
            <Col
              xs={11}
              sm={11}
              md={12}
              lg={12}
              xl={{ span: 8, offset: 2 }}
              className="d-flex  justify-content-between pt-3 pl-5 "
            >
              <Row className="d-flex align-items-end justify-content-between">
                <Col
                  xl={{ span: 12, offset: 2 }}
                  className="d-flex justify-content-between pt-3 "
                >
                  <a
                    href="https://twitter.com/Tvaw"
                    className="d-flex align-items-end justify-content-between"
                    target="_blank"
                  >
                    <img
                      src={twitterIMG}
                      alt="Link to Tyler's twitter"
                      className="d-flex align-self-end"
                    />
                  </a>

                  <a
                    href="https://www.linkedin.com/in/tylervawser/"
                    target="_blank"
                  >
                    <img
                      className="d-flex align-self-end"
                      src={linkedinIMG}
                      alt="Link to Tyler's Linkedin profile"
                    />
                  </a>

                  <a
                    href="mailto:tvawser@gmail.com?subject=Saw%20your%20website%20lets%20chat"
                    target="_blank"
                  >
                    <img
                      src={mailIMG}
                      alt="Link to Tyler's email"
                      className="d-flex align-self-end"
                    />
                  </a>
                </Col>
              </Row>
              <Row
                style={{
                  padding: `6vw`,
                  marginBottom: `20vh`,
                  textAlign: `end`,
                  position: `fixed`,
                  bottom: `20px`,
                }}
              ></Row>
            </Col>
          </Row>
        </div>
      </Layout>
    )
  }
}

export default Calendly
