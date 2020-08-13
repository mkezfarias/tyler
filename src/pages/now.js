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

const goals = [
  "1. Lorem ipsum dolor sit amet",
  "2. Consetetur sadipscing elitr",
  "3. Sed diam nonumy eirmod tempor",
  "4. At vero eos et accusam et justo",
]

class Now extends React.Component {
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
              xl={8}
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
              Tyler wants to share what he is doing now
            </Col>
          </Row>
          <Row className="mt-5 py-4">
            <Col
              style={{
                color: "var(--textNormal)",
                transitionTimingFunction: `cubic-bezier(0.25, 0.1, 0.25, 1)`,
                transition: `0.4s`,
                textAlign: `center`,
                margin: `auto`,
                maxWidth: `90vw`,
                padding: `10vh 10vw 0 10vw`,
                fontSize: `calc(10px + .7vw)`,
              }}
              className="roboto w-medium"
            >
              Check it out here
            </Col>
          </Row>
          <Row>
            <Col
              style={{
                color: "var(--textNormal)",
                transitionTimingFunction: `cubic-bezier(0.25, 0.1, 0.25, 1)`,
                transition: `0.4s`,
                textAlign: `center`,
                margin: `auto`,
                maxWidth: `90vw`,
                padding: `0 10vw 0 10vw`,
                fontSize: `calc(10px + .7vw)`,
              }}
              className="roboto w-medium"
            >
              <img src={arrowIMG} alt="Arrow down"></img>
            </Col>
          </Row>
        </div>
        <Container fluid style={{}}>
          <Row className="d-flex justify-content-center pb-5">
            <Col xl={{ span: 7 }} className="mb-5 pb-5 pt-5">
              <p
                style={{
                  color: "var(--textNormal)",
                }}
              >
                Right now, I spend my waking hours finding and talking to great
                people who want to continue building{" "}
                <Link target="_blank" to="https://www.apptegy.com/careers/">
                  Apptegy
                </Link>
                .
              </p>

              <p
                style={{
                  color: "var(--textNormal)",
                }}
              >
                <strong>
                  Nearly all of my best moments and memories involve meeting
                  someone unexpected.
                </strong>{" "}
                For that reason, I believe in creating moments when serendipity
                has a higher probability.
              </p>

              <p
                style={{
                  color: "var(--textNormal)",
                }}
              >
                The best way I know to do that is to bring thoughtful and
                interesting people together — and make it easy to talk about
                ideas. Outside of work I do that by hosting dinner parties. At
                work, I do that in conversations and interviews.{" "}
              </p>

              <p
                style={{
                  color: "var(--textNormal)",
                }}
              >
                I’m working on finding thoughtful people that find meaning in
                excellence at a great company, Apptegy. We want to create a
                company in particular way without compromise. Our culture is
                visible, real and ever-growing. Yet the two more subtle ways
                that our culture stands out are: 1) challenging assumptions and
                2) running contrary to traditional practices—even when that
                offends our expectations and egos.
              </p>

              <p
                style={{
                  color: "var(--textNormal)",
                }}
              >
                Before Apptegy, I had nothing to do with recruiting, HR, People
                Operations. I had only ever hired and managed for my own teams.
                In fact, most of my career has been in marketing and working
                with CEOs.{" "}
              </p>

              <p
                style={{
                  color: "var(--textNormal)",
                }}
              >
                For me, having a particular career or following a linear path
                means little. What means a lot is being able to visibly see my
                work progress and last after I’m on to what’s next.{" "}
              </p>

              <p
                style={{
                  color: "var(--textNormal)",
                }}
              >
                What’s next? More serendipity. If you’re reading this, let’s
                chat.{" "}
                <Link
                  target="_blank"
                  to="https://calendly.com/tyler-apptegy/chat"
                >
                  Set up a call for us
                </Link>
                .{" "}
              </p>
            </Col>
          </Row>
          <Row
            style={{
              background: "var(--gradient-background)",
              width: `110vw`,
              margin: `0 -10vw 0 -10vw`,
            }}
          >
            <Col
              xl={11}
              style={{
                color: "var(--textNormal)",
                transitionTimingFunction: `cubic-bezier(0.25, 0.1, 0.25, 1)`,
                transition: `0.4s`,
                margin: `auto`,
                maxWidth: `80vw`,
                padding: `10vh 10vw 30vh 10vw`,
                fontSize: `calc(20px + .5vw)`,
              }}
              className="wider wsans w-semibold mb-0 line-height-1 mt-0 w-semibold "
            >
              <Row className="text-light py-1 mb-3">My goals & values.</Row>
              <Row className="mx-auto">
                <Col xl={10} className="m-auto mb-3 pb-3">
                  {goals.map(goal => (
                    <Row className=" w-regular roboto text-light h5 wider ml-4">
                      {goal}
                    </Row>
                  ))}
                </Col>
              </Row>
              <hr
                className="pb-1 mt-5 b-none"
                style={{ backgroundColor: `#79BCFF`, transform: `scaleX(1.3)` }}
              />

              <Row className="text-light py-1 my-4 py-5 ">
                <Col xl={4}>Services.</Col>
                <Col xl={4}>
                  <Row className=" w-regular roboto text-light h5 wider">
                    <Row className="text-left">
                      - Lorem ipsum dolor sit amet
                    </Row>
                    <Row className="text-left">
                      - Consetetur sadipscing elitr
                    </Row>
                    <Row className="text-left">- Sed diam nonumy eirmod </Row>
                    <Row className="text-left">- Tempor invidunt ut labore</Row>
                    <Row className="text-left">- Et dolore magna aliquyam</Row>
                  </Row>
                </Col>
                <Col xl={4}>
                  <Row className=" w-regular roboto text-light h5 wider">
                    <Row className="text-left">
                      - Lorem ipsum dolor sit amet
                    </Row>
                    <Row className="text-left">
                      - Consetetur sadipscing elitr
                    </Row>
                    <Row className="text-left">- Sed diam nonumy eirmod </Row>
                    <Row className="text-left">- Tempor invidunt ut labore</Row>
                    <Row className="text-left">- Et dolore magna aliquyam</Row>
                  </Row>
                </Col>
              </Row>
              <hr
                className="pb-1 mt-5 b-none"
                style={{ backgroundColor: `#79BCFF`, transform: `scaleX(1.3)` }}
              />
              <Row className="text-light py-1 my-4 py-5 ">
                <Col xl={5}>Let’s talk.</Col>
                <Col xl={{ span: 6, offset: 4 }}>
                  <Row className=" w-regular roboto text-light h5 wider">
                    <Row className="text-left pt-4">
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod. Tyler is waiting to hear from you.
                    </Row>
                    <Row className="text-left pt-4">
                      <Link style={{ color: `#79BCFF` }} to="/calendly">
                        Get in touch.
                      </Link>
                    </Row>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
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

export default Now
