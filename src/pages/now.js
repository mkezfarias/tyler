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

const favoritesArray = [
  {
    icon: toolsIcon,
    title: "Favorite tools",
    items: [
      {
        link: "https://www.alfredapp.com/",
        subTitle: "Alfred App",
        subText:
          "The single most powerful app on my computer. With the powerpack (paid) you can create workflows, hotkeys, text expansion, etc. It’s very powerful but requires some time and deep dives to take full advantage.",
      },
      {
        link: "https://bear.app/",
        subTitle: "Bear App",
        subText:
          "I wanted something much faster than Evernote (RIP) & has more function/style/organization than TextEdit. Bear is exactly that. It pairs nicely with my Alfred workflows.",
      },
      {
        link: "https://www.gmailtabs.com/",
        subTitle: "Gmail Tabs",
        subText:
          "The budget (aka free) version of Superhuman email. I use this to organize my inbox with tabs that create saved searches.",
      },
      {
        link: "https://www.overdrive.com/",
        subTitle: "Overdrive",
        subText:
          "Audible for free (via libraries). An incredible resource that allows you to download audio books and ebooks immediately via a local library.",
      },
      {
        link: "https://www.mowglii.com/itsycal/",
        subTitle: "ItsyCal",
        subText:
          " I spend 50% to 85% of my day on Zoom calls. I hate having to open a browser to view my calendar mid-call. Itsycal makes it easy to see your schedule and with a hotkey it opens automatically over any windows you have. ",
      },
      {
        link: "https://www.tynsoe.org/v2/geektool/",
        subTitle: "GeekTool",
        subText:
          "90% aesthetics, 10% function. This is a nice tool to make your desktop custom by adding scripts. For example, I added the time and date to the center of my menu bar (just below my webcam) so I don’t have to take my eyes away from a video call.",
      },
      {
        link: "https://www.macbartender.com/",
        subTitle: "Bartender",
        subText:
          "A simple app that hides all of the menu bar icons I have (wifi, battery, etc). I only have two menu bar icons active and 15 hidden. Makes the desktop cleaner.",
      },
    ],
  },
  {
    icon: videosIcon,
    title: "Favorite Videos",
    items: [
      {
        link: "https://www.google.com",
        subTitle: "Google",
        subText: "dolor sit amet, consetetur sadipscing elitr, sed diam nonumy",
      },
      {
        link: "#",
        subTitle: "Lorem ipsum",
        subText:
          "dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod",
      },
      {
        link: "#",
        subTitle: "Lorem ipsum",
        subText: "dolor sit amet, consetetur sadipscing elitr, sed",
      },
      {
        link: "#",
        subTitle: "Lorem ipsum",
        subText: "dolor sit amet, consetetur sadipscing elitr diam nonumy",
      },
      {
        link: "#",
        subTitle: "Lorem ipsum",
        subText: "dolor sit amet, consetetur sadipscing elitr, sed diam nonumy",
      },
    ],
  },

  {
    icon: travelIcon,
    title: "Favorite travel things",
    items: [
      {
        link: "https://www.google.com",
        subTitle: "Google",
        subText: "dolor sit amet, consetetur sadipscing elitr, sed diam nonumy",
      },
      {
        link: "#",
        subTitle: "Lorem ipsum",
        subText:
          "dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod",
      },
      {
        link: "#",
        subTitle: "Lorem ipsum",
        subText: "dolor sit amet, consetetur sadipscing elitr, sed",
      },
      {
        link: "#",
        subTitle: "Lorem ipsum",
        subText: "dolor sit amet, consetetur sadipscing elitr diam nonumy",
      },
      {
        link: "#",
        subTitle: "Lorem ipsum",
        subText: "dolor sit amet, consetetur sadipscing elitr, sed diam nonumy",
      },
    ],
  },
  {
    icon: podcastsIcon,
    title: "Favorite podcasts",
    items: [
      {
        link: "https://www.google.com",
        subTitle: "Google",
        subText: "dolor sit amet, consetetur sadipscing elitr, sed diam nonumy",
      },
      {
        link: "#",
        subTitle: "Lorem ipsum",
        subText:
          "dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod",
      },
      {
        link: "#",
        subTitle: "Lorem ipsum",
        subText: "dolor sit amet, consetetur sadipscing elitr, sed",
      },
      {
        link: "#",
        subTitle: "Lorem ipsum",
        subText: "dolor sit amet, consetetur sadipscing elitr diam nonumy",
      },
      {
        link: "#",
        subTitle: "Lorem ipsum",
        subText: "dolor sit amet, consetetur sadipscing elitr, sed diam nonumy",
      },
    ],
  },
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
      <>
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
          <Container
            fluid
            style={{
              background: "var(--gradient-background)",
              width: `110vw`,
              margin: `6vh -10vw 0 -10vw`,
            }}
          >
            <Row className="d-flex justify-content-center   pb-5">
              <Col xl={{ span: 6, offset: 1 }} className="mb-5 pb-5">
                {favoritesArray.map(favoriteSet => {
                  return (
                    <>
                      <Row className="d-flex align-items-baseline">
                        <img
                          src={favoriteSet.icon}
                          alt={favoriteSet.title}
                        ></img>
                        <span className="px-2 mt-4 wsans w-regular fav-title">
                          {favoriteSet.title}
                        </span>
                      </Row>
                      {favoriteSet.items.map(item => {
                        return (
                          <Row className="d-flex ml-5  w-75">
                            <Link to={item.link} target="_blank">
                              <p className=" text-light  w-semibold mb-0">
                                {" "}
                                {item.subTitle}{" "}
                              </p>
                              <p className=" text-light p-text">
                                {item.subText}
                              </p>
                            </Link>
                          </Row>
                        )
                      })}
                    </>
                  )
                })}
              </Col>
            </Row>
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
              <Link to="/">
                <img
                  src={whiteLogo}
                  alt="Tyler Vawser"
                  className="logo-fixed"
                ></img>
              </Link>
              <div className="d-flex flex-column p-2 justify-content-center align-items-end items-fixed">
                <Link
                  className="text-light roboto w-regular h2 my-4"
                  to="/about"
                >
                  About
                </Link>

                <Link
                  className="text-light roboto w-regular h2 my-3"
                  to="/blog"
                >
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
      </>
    )
  }
}

export default Now
