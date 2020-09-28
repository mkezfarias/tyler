import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

import { Container, Row, Col } from "react-bootstrap"

import arrowIMG from "../images/arrow.svg"
import LogoFixedMobile from "../components/LogoFixedMobile"

import { GatsbySeo } from "gatsby-plugin-next-seo"

const nowContent = {
  title: "What Tyler is doing now",
}

const favoritesArray = [
  {
    title: "What I am doing now:",
    items: [
      "1. Living in Little Rock, Arkansas",
      "2. Building teams at Apptegy",
      "3. Hiring RoR & Vue engineers in Little Rock and Monterrey",
      "4. Exploring digital minimalism & minimal piano",
      "5. Keeping up with 4 kids",
    ],
  },
  {
    title: "What is on my mind:",
    items: [
      "How to use my phone for 1 hour or less a day",
      "Finding the best music to focus & read",
      "Johatsu or people that choose to disappear.",
      "Habits and what are the small things I can do now that compound over time",
      "How I can act, think, and become fast-er",
    ],
  },
]

const onMyMindLinks = {
  title: "What I'm reading / listening / watching:",
  items: [
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
  ],
}

const letsTalk = {
  title: "Let's talk:",
  content:
    "I would like to hear your story and know who you are and what you’re working on. The easiest way to connect is by picking a time here that works for you.",
  linkText: "Get in touch.",
}

class Now extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      show: false,
    }

    this.handleClose = () => this.setState({ show: false })
    this.handleShow = () => this.setState({ show: true })
  }

  componentDidMount() {}

  render() {
    return (
      <Layout location={this.props.location}>
        <GatsbySeo
            title="Tyler Vawser | What He's Doing Now" //// this is the title of the window and seo title
          description="What is on Tyler's mind and what he's working on now" // seo description
          canonical="https://www.tylervawser.com/now"
          keywords="tylervawser,tyler vawser,nowpage," // keywords list
          openGraph={{
            url: "https://www.tylervawser.com/now",
            title: "About Tyler Vawser",
            description: "What Tyler is doing now",
            images: [
              {
                url: "../src/images/OGtylervawser.jpg",
                width: 1200,
                height: 1200,
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
        {/* <SEO
          title="Tyler Vawser"
          keywords={[`blog`, `Tyler Vawser`, `Tvawser`, `react`]} //edit these on each page depending on the content of the page
        /> */}
        <LogoFixedMobile />
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
                fontSize: `calc(14px + .7vw)`,
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
            <Col xl={{ span: 7 }} xs={10} sm={10} className="mb-5 pb-5 pt-5">
              <p
                style={{
                  fontSize: `20px`,
                  color: "var(--textNormal)",
                }}
              >
                Right now, I spend my waking hours finding and talking to great
                people who want to continue building{" "}
                <a
                  href="https://www.apptegy.com/careers/"
                  style={{ color: `var(--skyblue)` }}
                  target="_blank"
                  className="fancy-link-footer"
                >
                  Apptegy
                </a>
                . Much of my day is spent talking to people about software
                engineering, SaaS sales, and other opportunities we are creating
                as we grow.
              </p>

              <p
                style={{
                  fontSize: `20px`,
                  color: "var(--textNormal)",
                }}
              >
                <strong>This has been a year focused on... focusing.</strong>{" "}
                That has meant returning to habits that made me who I am. Each
                day, after I pour my first cup of coffee I sit down in a white
                swivel chair next to my bookshelf and I read. I read whatever is
                nearby: a Japanese novel, an improvement book, or poetry (e.g.
                Thomas Hardy).
              </p>

              <p
                style={{
                  fontSize: `20px`,
                  color: "var(--textNormal)",
                }}
              >
                It also has meant removing and reducing stuff. Clearing surfaces
                and reducing the objects around my work space and living spaces
                is an old OCD hobby that I've taken up again.
              </p>

              <p
                style={{
                  fontSize: `20px`,
                  color: "var(--textNormal)",
                }}
              >
                When I create the time, I am learning javascript and React. It
                is a losing battle, but one that I want to fight as long as I am
                interviewing engineers and involved with a software company. An
                hour of trying to code might be the single best way to humble
                me.
              </p>

              <p
                style={{
                  fontSize: `20px`,
                  color: "var(--textNormal)",
                }}
              >
                Something I am working on improving is contacting and talking to
                the people I care about. This is the easiest thing for me to put
                off. But each year I realize how important it is and that it is
                not going to get easier without being intentional.{" "}
              </p>

              <p
                style={{
                  fontSize: `20px`,
                  color: "var(--textNormal)",
                }}
              >
                The most important part of my life now and for the next 20 years
                are my kids. Spending time with them, building marble
                contraptions, playing Rummikub, teaching them the love of
                reading, and teaching them how to think are the highlight of
                every day. As much as I love working and driving towards a goal,
                I want to use the energy and momentum I build at work to pour
                into my kids.{" "}
              </p>

              <p
                style={{
                  fontSize: `20px`,
                  color: "var(--textNormal)",
                }}
              >
                <em>
                  This is a Now page. Now pages are inspired by
                  <a
                    href="https://nownownow.com/about"
                    style={{ color: `var(--skyblue)` }}
                    target="_blank"
                    className="fancy-link-footer"
                  >
                    {" "}
                    Derek Sivers
                  </a>
                  . It is similar to an about page, but it tells you what I am
                  doing now (how I am spending my time and what I am focused
                  on)— not just what I have done in the past. This entire site
                  is inspired with that in mind.
                </em>
              </p>

              <p
                style={{
                  fontSize: `20px`,
                  color: "var(--textNormal)",
                }}
              >
                Last updated: August 29, 2020
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
        </Container>
        <Container
          fluid
          style={{
            background: "var(--gradient-background)",
            width: `110vw`,
            margin: `6vh -10vw 10vh -10vw`,
          }}
        >
          <Row className="d-flex justify-content-center pb-5 pt-4 ">
            <Col
              xs={{ span: 9 }}
              sm={{ span: 9 }}
              md={7}
              lg={7}
              xl={{ span: 6, offset: 1 }}
              className="mb-5 pb-5"
            >
              {favoritesArray.map(favoriteSet => {
                return (
                  <>
                    <Row className="d-flex align-items-baseline">
                      <span className="px-2 mt-4 wsans w-regular fav-title">
                        {favoriteSet.title}
                      </span>
                    </Row>
                    {favoriteSet.items.map(item => {
                      return (
                        <Row className="d-flex ml-2 ml-md-4 w-100 w-md-75">
                          <p
                            className="py-1 fancy-link-footer text-light  w-semibold mb-0 "
                            style={{
                              fontSize: `20px`,
                            }}
                          >
                            {item}
                          </p>
                        </Row>
                      )
                    })}
                  </>
                )
              })}
              <Row className="d-flex align-items-baseline">
                <div className="px-2 mt-4 wsans w-regular fav-title">
                  {onMyMindLinks.title}
                </div>
              </Row>
              {onMyMindLinks.items.map(mind => (
                <Row
                  className="pr-md-5 text-left pl-3"
                  style={{ fontSize: `20px` }}
                >
                  {" "}
                  <Row className="d-flex ml-2 ml-md-4 w-100 w-md-75">
                    <a
                      style={{ color: `#add5ff` }}
                      className="py-1 fancy-link-footer text-light  w-semibold mb-0 "
                      href={mind.link}
                      target="_blank"
                    >
                      {mind.text} {mind.type}
                    </a>
                  </Row>
                </Row>
              ))}
              <Row className="d-flex align-items-baseline">
                <span className="px-2 mt-4 wsans w-regular fav-title">
                  {letsTalk.title}
                </span>
              </Row>
              <Row className="d-flex ml-2 ml-md-3 w-100 w-md-50">
                <p
                  className=" text-light  w-semibold mb-0 py-2"
                  style={{ fontSize: `20px` }}
                >
                  {letsTalk.content}
                </p>
              </Row>
              <Row className="ml-md-0 ml-0 mb-2">
                <Link
                  style={{ color: `#add5ff`, fontSize: `20px` }}
                  className="fancy-link-footer d-flex ml-md-3 "
                  to="/connect/"
                >
                  {letsTalk.linkText}
                </Link>
              </Row>
            </Col>
          </Row>
        </Container>
      </Layout>
    )
  }
}

export default Now
