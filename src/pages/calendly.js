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
        <div>
          <Row>
            <Col
              xl={7}
              style={{
                color: "var(--textNormal)",
                transitionTimingFunction: `cubic-bezier(0.25, 0.1, 0.25, 1)`,
                transition: `0.4s`,
                textAlign: `center`,
                margin: `auto`,
                maxWidth: `90vw`,
                padding: `-20vh 10vw 0 10vw`,
                fontSize: `calc(20px + 4vw)`,
              }}
              className="wider wsans w-medium pb-0 mb-0 line-height-1 mt-0 w-semibold align-center"
            >
              Calendly
            </Col>
          </Row>
          <Row></Row>
          <Row></Row>
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
          show={this.state.show}
          animation={false}
          onHide={this.handleClose}
          backdropClassName="transparent-opacity"
        >
          <Modal.Body
            style={{
              background: "var(--gradient-background)",
              transitionTimingFunction: `cubic-bezier(0.25, 0.1, 0.25, 1)`,
              transition: `0.4s`,
            }}
          >
            <Link to="/">
              <img
                src={whiteLogo}
                alt="Tyler Vawser"
                className="logo-fixed"
              ></img>
            </Link>
            <div className="d-flex flex-column p-2 justify-content-center align-items-end items-fixed">
              <Link className="text-light roboto w-regular h2 my-4" to="/about">
                About
              </Link>

              <Link className="text-light roboto w-regular h2 my-3" to="/blog">
                Posts
              </Link>

              <Link className="text-light roboto w-regular h2 my-3" to="/now">
                Now
              </Link>

              <Link
                className="text-light roboto w-regular h2 my-3"
                to="/favorites"
              >
                Favorites
              </Link>

              <Link
                className="text-light roboto w-regular h2 my-4"
                to="/calendly"
              >
                Start a Call
              </Link>
            </div>
            <Col className="d-flex flex-column night-fixed">
              <Link to="/" className="text-light roboto w-regular ml-0">
                EN 日 ES{" "}
              </Link>

              <ThemeToggler>
                {({ theme, toggleTheme }) => (
                  <label>
                    <input
                      hidden
                      type="checkbox"
                      onChange={e => {
                        console.log(theme)
                        toggleTheme(e.target.checked ? "dark" : "light")
                      }}
                      checked={theme === "dark"}
                    />{" "}
                    <img
                      src={theme === "dark" ? dayButton : nightButton}
                      alt="Nigh/Day Mode"
                    ></img>
                  </label>
                )}
              </ThemeToggler>
            </Col>
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
          <img src={darkLogo} alt="Tyler Vawser" className="logo-fixed"></img>
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
        <img
          src={footerIMG}
          style={{
            position: "absolute",
            bottom: `0`,
            right: `0`,
            left: `0`,
            margin: `0 0 0 0`,
          }}
        ></img>
      </Layout>
    )
  }
}

export default Calendly
