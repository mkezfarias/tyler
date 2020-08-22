import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"
import { Container, Row, Col, Modal } from "react-bootstrap"
import "../styles/global.scss"
import TransitionLink from "gatsby-plugin-transition-link"
import AniLink from "gatsby-plugin-transition-link/AniLink"
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
        <Col xl={6} sm={11} className="">
          <CalendlyEmbed account="tyler-apptegy" eventName="call-with-tyler" />
        </Col>
        <div className="sidebar-fixed">
          <Col xl={5} className="">
            You can also check out my social media
          </Col>
          <Col
            xl={{ span: 8, offset: 3 }}
            className="d-flex  justify-content-between pt-3 "
          >
            <a
              href="https://twitter.com/Tvaw"
              className="d-flex align-items-end justify-content-between"
            >
              <img
                src={twitterIMG}
                alt="Link to Tyler's twitter"
                className="d-flex align-self-end"
              />
            </a>

            <a href="https://www.linkedin.com/in/tylervawser/">
              <img
                className="d-flex align-self-end"
                src={linkedinIMG}
                alt="Link to Tyler's Linkedin profile"
              />
            </a>

            <a href="https://twitter.com/Tvaw">
              <img
                src={mailIMG}
                alt="Link to Tyler's twitter"
                className="d-flex align-self-end"
              />
            </a>
          </Col>
        </div>
      </Layout>
    )
  }
}

export default Calendly
