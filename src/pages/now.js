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
              <p>
                <strong>Hi! My name is Tyler Vawser.</strong> I create
                connections with people and growth in companies. Right now, I
                spend my waking hours finding and talking to great people who
                want to continue building{" "}
                <Link target="_blank" to="https://www.apptegy.com/careers/">
                  Apptegy
                </Link>
                .
              </p>

              <p>
                <strong>
                  Nearly all of my best moments and memories involve meeting
                  someone unexpected.
                </strong>{" "}
                For that reason, I believe in creating moments when serendipity
                has a higher probability.
              </p>

              <p>
                The best way I know to do that is to bring thoughtful and
                interesting people together — and make it easy to talk about
                ideas. Outside of work I do that by hosting dinner parties. At
                work, I do that in conversations and interviews.{" "}
              </p>

              <p>
                I’m working on finding thoughtful people that find meaning in
                excellence at a great company, Apptegy. We want to create a
                company in particular way without compromise. Our culture is
                visible, real and ever-growing. Yet the two more subtle ways
                that our culture stands out are: 1) challenging assumptions and
                2) running contrary to traditional practices—even when that
                offends our expectations and egos.
              </p>

              <p>
                Before Apptegy, I had nothing to do with recruiting, HR, People
                Operations. I had only ever hired and managed for my own teams.
                In fact, most of my career has been in marketing and working
                with CEOs.{" "}
              </p>

              <p>
                For me, having a particular career or following a linear path
                means little. What means a lot is being able to visibly see my
                work progress and last after I’m on to what’s next.{" "}
              </p>

              <p>
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

              <hr className="m-5" />

              <p>
                At a certain point in early in my career,{" "}
                <strong>
                  I learned the hard way that intelligence, fame, money, and
                  title don’t create happiness.
                </strong>{" "}
                In fact, having all of the above often leans to misery and
                embarrassment. Since that point, I’ve kept away from social
                media and done my best to live a more private life.{" "}
              </p>

              <p>
                On the one hand I enjoy hosting dinner parties with strangers.
                And on the other, someone who likes to be left alone. If there’s
                one daily struggle it’s that I want people to enjoy being around
                me and I also want to keep to myself.{" "}
              </p>

              <p>
                My ideal weekly routine involves talking to high-performers
                throughout the week, hosting a dinner party that brings 10 great
                people together (without anyone knowing my name), a 4 hour
                silent meditation, a long bike ride, reading Japanese novels
                with my kids, and playing a RTS game alone.
              </p>

              <p>
                <strong>
                  The people I respect the most are not looking for attention
                </strong>{" "}
                and don’t seek it out. If they have it, they’ve earned it and
                would rather it fade away.{" "}
              </p>

              <p>
                <strong>
                  I want those around me to be aware, creative, and thankful.
                </strong>{" "}
                Before my kids were born, I spent a lot of time thinking about
                how I wanted them to be when they were 25 and 35 years old. Like
                my own career, I don’t particularly care what their title or
                field is. What I care about, and hope they do too, is that they
                are aware of themselves, of others, and stay out of their own
                head.{" "}
              </p>

              <p>
                Creativity to me isn’t painting a canvas, but figuring it out
                —whatever it may be. When life throws something at you or you
                create your own mess, do you assume that there is a way forward
                and then start acting on a solution? Or does life break you and
                you can’t see a way forward?{" "}
              </p>

              <p>
                Thankfulness or gratitude is the only way to live a happy life.
                Without it, I obsess over the future or what should have been in
                the past. With it, I can live in the moment and really see and
                hear the people that are closest to me.{" "}
              </p>

              <p>
                <strong>
                  Happiness to me is defined by being calm and having a
                  challenge.
                </strong>{" "}
                I want to have (and often do have) a calmness in my mind and
                body. Yet, I also want a challenge that requires me to push
                harder than I’m used to and makes me doubt if I’m capable. When
                boredom is on the horizon, I lose both: calm and challenge.{" "}
              </p>

              <p>
                <strong>
                  Something I think about a lot but don’t talk about often is
                  the Continental Divide Trail.
                </strong>{" "}
                If I have one big regret, it’s not hiking the CDT after college.
                To me the trail offers so much of what I value: an intense
                challenge that bears down on you for months, requires you to
                focus on the essentials and no luxuries/conveniences, and time
                alone (really alone) in the world.
              </p>

              <hr className="m-5" />
              <p>
                <strong>In the past…</strong>
              </p>

              <p>
                <strong>
                  In 2015, I became friends with Nick Gray, who founded Museum
                  Hack.
                </strong>{" "}
                There are all kinds of people in this world: extroverts,
                introverts, creators, consumers, thinkers, doers, etc. Nick is
                one of the best friends you could ask for. He showed me first
                hand how to be intensely intentional. Nick is an expert at
                bringing people together, making them feel wonderful, and
                connecting them to other awesome people. Nick is one of just a
                handful of people that shaped what I expect of myself and also
                gave me hope in people. With Nick’s encouragement and advice, I
                kicked off a series of dinner parties when I moved to Little
                Rock.{" "}
              </p>

              <p>
                <strong>
                  In 2015, I built the first marketing team at Sticker Mule.
                </strong>{" "}
                The company accelerated rapidly after we brought on some of the
                best teammates I’ve worked with. My experience there gave me
                confidence that the best people you can hire are intrinsically
                driven to do their best and when given autonomy will surprise
                you in the best ways. We achieved a lot together and built
                something really great that continues today.{" "}
              </p>

              <p>
                <strong>
                  In March 2013, I replied to an email from Noah Kagan
                </strong>{" "}
                and showed him that his email system (Aweber at the time) was
                sending each email 3x to his entire list. I had a good amount of
                experience with Aweber from some other projects and offered to
                help. His response, “omg. please let me give you money. you on
                skype?”
              </p>

              <p>
                That kicked off my informal, formal training into the world of
                Quant Based Marketing and high growth startup marketing. (Noah
                was #30 at Facebook and worked closely with Mark Zuckerberg in
                the early days of Facebook.) Among the marketing “lessons,” I
                learned to reverse engineer and “just figure it out.” For the
                next 2 years at night and on weekends, Noah helped me learn how
                to think about marketing generally and I helped Noah grow Okdork
                (his personal site) and email list as well as help out with some
                Appsumo/Sumo work.{" "}
              </p>

              <p>
                <strong>
                  Before all of that, in 2010 I worked for The King’s College in
                  NYC.
                </strong>{" "}
                I started as an Executive Assistant which quickly became a wild
                80-100 hour week Chief of Staff role. I’ll skip over the details
                to say it’s the most I’ve worked in my life and it shaped how I
                work now. “There’s always more time” became my mantra.
                Unfortunately, the work and this mantra burned me out, nearly
                wrecked my marriage, and showed me that if you’re going to work
                hard you should be careful of who you are working for and their
                own integrity. I continued at King’s for awhile, taking on
                Marketing and Development (Fundraising) before jumping into the
                world of startups.{" "}
              </p>

              <p>
                <strong>
                  Prior to living in NYC, I lived in Japan for a year + a few
                  summers.
                </strong>{" "}
                My wife and I wanted to live internationally and decided it
                would be best to do that before we were too comfortable, had
                kids, or came up with a good excuse to stay home. We moved to
                Seki, Japan (Gifu-ken) —north of the large city Nagoya. It was
                the same city that I spent my summers in high school living in.
                I like to think that experience normal Japan —not the otaku,
                anime-loving, western-projecting Japan that Americans (and
                others) are so weirdly obsessed with. At the time Seki and
                Japan, felt like a second home that I returned to each summer.{" "}
              </p>

              <p>
                I’m pretty sure that spending summers in Hong Kong (1x) or Japan
                (3x) “on my own” when I was 14 to 18 taught me that I just have
                to “get on the plane” and I can figure it out when I land.
                Looking back, it was probably the best preparation for real
                life. It was there I had to grow up. I booked my own flights,
                made my way through international airports without really
                knowing what I was doing (I have stories), met many new people
                that were both entirely different from anyone I had known and
                oddly familiar. Most days I set my own schedule, did manual
                labor, and also read a ton. On weekends{" "}
              </p>

              <p>
                <strong>This is the most I’ve written about myself</strong> but
                hopefully it gives you an idea of who I am, what I value, and
                what I’ve done so far. If you’ve read this far, my hope is that
                we can connect by phone, email or Zoom. I’d like to hear your
                story and know who you are and what you’re working on.{" "}
              </p>

              <p className="mb-5">
                The easiest way to connect is by{" "}
                <Link
                  target="_blank"
                  to="https://calendly.com/tyler-apptegy/chat"
                >
                  picking a time here that works for you
                </Link>
                .{" "}
              </p>
            </Col>
          </Row>
        </Container>
        <Container
          fluid
          style={{
            background: "var(--gradient-background)",
            width: `110vw`,
            margin: `6vh -10vw 0 -10vw`,
          }}
          className="bg-danger"
        >
          <p>aaa</p>
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
