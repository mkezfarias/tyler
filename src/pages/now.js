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

const nowContent = {
  title: "What Tyler is doing now",
}

const bigNow = [
  "1. Living in Little Rock, Arkansas",
  "2. Building teams at Apptegy",
  "3. Hiring RoR & Vue engineers in Little Rock and Monterrey",
  "4. Exploring digital minimalism & classical piano",
  "5. Keeping up with 4 kids",
]

const onMyMind = [
  "How phones & social media stop us from living our best lives",
  "Finding the best music to focus & read",
  "Johatsu—people that disappear",
  "Little & often habits create enourmous results",
  "How I can act, think, and become fast-er",
]

const onMyMindLinks = [
  {
    link: "https://www.calnewport.com/books/digital-minimalism/",
    text: "Digital Minimalism by Cal Newport",
    type: "(book)",
  },
  {
    link:
      "https://open.spotify.com/playlist/7wgD1FW1Pp3LTp9di8YHBB?si=JZwsWRKMQm-knYVxl9fIKQ",
    text: "Minimal piano",
    type: "(playlist)",
  },
  {
    link:
      "https://readjapaneseliterature.com/2020/07/24/manazuru-by-hiromi-kawakami-and-a-man-by-keiichiro-hirano/",
    text: "Manazura by Hiromi Kawakami",
    type: "(book)",
  },
  {
    link: "https://jamesclear.com/atomic-habits",
    text: "Atomic Habits by James Clear",
    type: "(book)",
  },
  {
    link: "https://firstround.com/review/speed-as-a-habit/",
    text: "Speed as a Habit",
    type: "(article)",
  },
]

const nowUpdate = 
      [
        "I would like to hear your story and know who you are and what you’re working on. The easiest way to connect is by picking a time here that works for you.",
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
          keywords={[`blog`, `Tyler Vawser`, `Tvawser`, `react`]} //edit these on each page depending on the content of the page
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
              {nowContent.title}{" "}
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
        <Container fluid>
          <Row className="d-flex justify-content-center pb-5">
            <Col xl={{ span: 7 }} className="mb-5 pb-5 pt-5">
              <p
                style={{
                  color: "var(--textNormal)",
                }}
              >
                Right now, I spend my waking hours finding and talking to great
                people who want to continue building{" "}
                <a
                  target="_blank"
                  href="https://www.apptegy.com/careers/"
                  style={{ color: `var(--skyblue3)` }}
                >
                  Apptegy
                </a>
                . Much of my day is spent talking to interesting people about software engineering, SaaS sales, and other opportunities we are creating as we grow.
              </p>

              <p
                style={{
                  color: "var(--textNormal)",
                }}
              >
                <strong>
                  This has been a year focused on... focusing.
                </strong>{" "}
                That has meant returning to habits that made me who I am. 
                Each day, after I pour my first cup of coffee I sit down in a white swivel chair next to my bookshelf. 
                And I read whatever is near by. 
                Sometimes that is a Japanese novel, other times, it is an improvement book, and still others poetry (e.g. Thomas Hardy).
              </p>

              <p
                style={{
                  color: "var(--textNormal)",
                }}
              >
                It also has meant removing and reducing stuff. 
                Clearing surfaces and reducing the objects around my work space and living spaces is an old OCD hobby that I've taken up again.
              </p>

              <p
                style={{
                  color: "var(--textNormal)",
                }}
              >
                When I create time, I am learning the basics of javascript and React. 
                It is a losing battle, but one that I want to fight as long as I am interviewing engineers and involved with a software company. 
                An hour of trying to code might be the single best way to humble me. 
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
                The most important part of my life now and for the next 20 years are my kids. 
                Spending time with them, building marble contraptions, playing Rummikub, teaching them to read, and how to think about mathematics are the highlight of every day. 
                As much as I love working and driving towards a goal, I want to use that energy and momentum I build at work to pour into my kids.{" "}
              </p>

  <p
                style={{
                  color: "var(--textNormal)",
                }}
              >
               <em>This is a Now page. Now pages are inspired by 
                   <a
                  target="_blank"
                  href="https://nownownow.com/about"
                  style={{ color: `var(--skyblue3)` }}
                >
                  Derek Sivers
                  </a>
                  . It is similar to an about page, but it tells you what I am doing now (what my priorities are and how I am spending my time)— not just what I have done in the past. 
                This entire site is inspired with that in mind.</em>
              </p>

 <p
                style={{
                  color: "var(--textNormal)",
                }}
              >
Last updated: August 15,2020
              </p>
              <p
                style={{
                  color: "var(--textNormal)",
                }}
              >
                {nowContent.p}
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
              <Row className="text-light mb-3">What I am doing now:</Row>

              <Row className="mx-auto">
                <Col xl={10} className="m-auto mb-3 pb-3">
                  {bigNow.map(big => (
                    <Row className=" w-regular roboto text-light h5 wider ml-4">
                      {big}
                    </Row>
                  ))}
                </Col>
              </Row>
              <hr
                className="pb-1 mt-5 b-none"
                style={{ backgroundColor: `#79BCFF`, transform: `scaleX(1.3)` }}
              />

              <Row className="text-light my-4 pt-5 mb-3">
                What is on my mind:
              </Row>
              <Col xl={12} className="d-flex justify-content-around">
                <div className=" w-regular roboto text-light h5 wider">
                  {onMyMind.map(mind => (
                    <Row className="text-left py-1">{mind}</Row>
                  ))}
                </div>
                <div className=" w-regular roboto text-light h5 wider ml-4">
                  {onMyMindLinks.map(mind => (
                    <Row className="text-left">
                      {" "}
                      <a
                        style={{ color: `#add5ff` }}
                        className="py-1 fancy-link"
                        href={mind.link}
                      >
                        {mind.text} {mind.type}
                      </a>
                    </Row>
                  ))}
                </div>
              </Col>

              <hr
                className="pb-1 mt-5 b-none"
                style={{ backgroundColor: `#79BCFF`, transform: `scaleX(1.3)` }}
              />
              <Row className="text-light py-1 my-4 py-5 ">
                <Col xl={5}>Let's talk:</Col>
                <Col xl={{ span: 6, offset: 4 }}>
                  <Row className=" w-regular roboto text-light h5 wider">
                    <Row className="text-left pt-4">{nowUpdate} </Row>
                    <Row className="text-left pt-4">
                      <Link
                        style={{ color: `#add5ff` }}
                        className="fancy-link"
                        to="/calendly"
                      >
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
