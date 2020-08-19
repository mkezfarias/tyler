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

class Calendly extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      show: false,
    }

    this.handleClose = () => this.setState({ show: false })
    this.handleShow = () => this.setState({ show: true })
  }

  render() {
    return (
      <Layout location={this.props.location}>
        <SEO
          title="Tyler Vawser"
          keywords={[`blog`, `Tyler Vawser`, `Tvawser`, `react`]}
        />
        <div className="my-0 py-0">
          <Row style={{ marginTop: `-30vh` }}>
            <Col
              xl={7}
              className="wider wsans w-medium pb-0 mb-0 line-height-1 mt-0 w-semibold align-center"
              style={{}}
            >
              <CalendlyEmbed
                className="mb-0"
                account="tyler-apptegy"
                eventName="call-with-tyler"
              />
            </Col>
            <Col
              xl={5}
              style={{
                color: "var(--textNormal)",
                background: `var(--gradient-background)`,
                textAlign: `center`,
                fontSize: `calc(20px + 2vw)`,
                position: `absolute`,
                top: `0`,
                right: `0`,
                bottom: `0`,
              }}
              className="wider wsans w-medium line-height-1  w-semibold align-center"
            >
              <Row
                className="d-flex justify-content-end align-items-end"
                style={{
                  color: `#fbfbfb`,
                  padding: `0 6vw`,
                  textAlign: `end`,
                  position: `fixed`,
                  bottom: `5vh`,
                  marginRight: `3vw`,
                }}
              >
                <Col xl={12}>You can also check out my social media</Col>
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
        <Container fluid>
          <Col
            style={{
              background: "var(--gradient-background)",
              width: `40vw`,
              margin: `6vh -10vw 0 -10vw`,
            }}
            className=""
          ></Col>
          <Col xl={{ span: 6, offset: 1 }} className="mb-5 pb-5"></Col>
        </Container>
        <Modal
          onEntered={this.bgTransparent}
          show={this.state.show}
          animation={false}
          onHide={this.handleClose}
          className="modal-menu bg-transparent"
          backdropClassName="transparent-opacity"
        >
          <Modal.Body
            style={{
              background: "var(--gradient-background)",
              transitionTimingFunction: `cubic-bezier(0.25, 0.1, 0.25, 1)`,
              transition: `0.4s`,
            }}
          >
            <Menu handleClose={this.handleClose} />
            <div onClick={this.handleClose}>
              <img
                src={closeBTN}
                alt="Close Button"
                className="close-button"
              ></img>
            </div>
          </Modal.Body>
        </Modal>
        <Link to="/">
          <img src={whiteLogo} alt="Tyler Vawser" className="logo-fixed"></img>
        </Link>
        <div
          onClick={this.handleShow}
          style={{
            background: `var(--menu-img)`,
            transitionTimingFunction: `cubic-bezier(0.25, 0.1, 0.25, 1)`,
            transition: `0.4s`,
            height: "30px",
            width: "30px",
          }}
          className="menu-fixed"
        ></div>
      </Layout>
    )
  }
}

export default Calendly
