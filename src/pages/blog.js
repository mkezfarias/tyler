import React from "react"
import { Link, graphql } from "gatsby"
import addToMailchimp from "gatsby-plugin-mailchimp"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"
import Button from "../components/button"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { TransitionState } from "gatsby-plugin-transition-link"

import { Card, Container, Row, Col, Modal, CardColumns } from "react-bootstrap"
import "../styles/global.scss"
import TransitionLink from "gatsby-plugin-transition-link"
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
import LogoFixedMobile from "../components/LogoFixedMobile"
import FooterBlue from "../components/Footer"
import { GatsbySeo } from "gatsby-plugin-next-seo"

class Blog extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      show: false,
      email: undefined,
      name: undefined,
      result: undefined,
    }

    this.handleClose = () => this.setState({ show: false })
    this.handleShow = () => this.setState({ show: true })

    this._handleSubmit = e => {
      addToMailchimp(this.state.email, { FNAME: `${this.state.name}` }) // listFields are optional if you are only capturing the email address.
        .then(data => {
          // I recommend setting data to React state
          // but you can do whatever you want (including ignoring this `then()` altogether)
          console.log(data)
        })
        .catch(() => {
          // unnecessary because Mailchimp only ever
          // returns a 200 status code
          // see below for how to handle errors
        })
    }
  }

  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMdx.edges

    return (
      <Layout location={this.props.location}>
        <GatsbySeo
          title="Tyler Vawser"
          description="Tyler Vawser Tyler Vawser Tyler Vawser."
          canonical="https://www.tylervawser.com/"
          keywords="prayuth,taksin"
          openGraph={{
            url: "https://www.url.ie/a",
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
            handle: "@handle",
            site: "@site",
            cardType: "summary_large_image",
          }}
        />

        {/* <SEO title="All posts" /> */}

        <LogoFixedMobile />

        <Row
          className="mx-md-5 mx-px-5 px-0 mx-2 d-flex justify-content-center"
          style={{ color: `var(--textNormal)` }}
        >
          <Col
            xl={8}
            style={{
              color: "var(--textNormal)",
              transitionTimingFunction: `cubic-bezier(0.25, 0.1, 0.25, 1)`,
              transition: `0.4s`,
              textAlign: `center`,
              margin: `auto`,
              maxWidth: `80vw`,
              padding: `-20vh 10vw 0 10vw`,
              fontSize: `calc(20px + 4vw)`,
            }}
            className="wider wsans w-medium pb-0 mb-4 line-height-1 mt-0 w-semibold align-center"
          >
            Read more about Tyler Vawser
          </Col>
        </Row>

        <Row
          style={{ paddingBottom: "19vh" }}
          className="mx-md-5 px-md-5 d-flex justify-content-center"
        >
          {posts.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug
            return (
              <Col lg={5} xs={12} sm={12} md={12}>
                <Card
                  key={node.fields.slug}
                  style={{
                    margin: "20px 30px 20px 10px",
                    border: `none`,
                    borderRadius: `0px`,
                    background: `var(--bg)`,
                    boxShadow: `var(--card-bg)`,
                  }}
                >
                  <Card.Body>
                    <Card.Title>
                      <h3
                        className="wsans w-medium"
                        style={{
                          color: `var(--textNormal)`,
                          marginBottom: rhythm(1 / 4),
                        }}
                      >
                        <AniLink
                          style={{
                            bg: "var(--gradient-background)",
                            color: "#5ba9ed",
                            transition: `0.4s`,
                          }}
                          className="fancy-link"
                          cover
                          bg="var(--gradient-background)"
                          top="exit"
                          direction="left"
                          to={`/blog${node.fields.slug}`}
                        >
                          {title}
                        </AniLink>
                      </h3>
                    </Card.Title>
                    <Card.Text>
                      <p
                        style={{ color: `var(--textNormal)`, fontSize: "20px" }}
                        dangerouslySetInnerHTML={{
                          __html: node.frontmatter.description || node.excerpt,
                        }}
                      />
                    </Card.Text>
                    <small style={{ fontSize: `18px` }} className="text-muted">
                      {node.frontmatter.date}
                    </small>
                  </Card.Body>
                </Card>
              </Col>
            )
          })}
        </Row>
        <Row className="w50 d-flex justify-content-center pb-5 mb-5 text-center">
          <Col className="pb-5">
            <div
              style={{ color: `var(--textNormal)` }}
              className="h1 wsans w-medium "
            >
              Thank you for reading.
            </div>
            <div
              style={{ color: `var(--textNormal)` }}
              className="h4 wsans w-medium"
            >
              Sign up to get new posts via email
            </div>
            <div className="mb-5 pb-5 text-center ">
              <form
                onSubmit={e => {
                  e.preventDefault()
                  this._handleSubmit(this.state.email)
                }}
              >
                <input
                  type="text"
                  placeholder="First name"
                  name="FNAME"
                  className="m-2 p-2"
                  id="mce-FNAME"
                  onChange={e => {
                    this.setState({ name: e.currentTarget.value })
                  }}
                />
                <input
                  type="email"
                  name="EMAIL"
                  className="m-2 p-2 "
                  id="mce-EMAIL"
                  placeholder="Email"
                  onChange={e => {
                    this.setState({ email: e.currentTarget.value })
                  }}
                />

                <div className="clear">
                  <input
                    type="submit"
                    value="Sign up"
                    name="subscribe"
                    id="mc-embedded-subscribe"
                    className="btn-primary px-4 py-2"
                  />
                </div>
              </form>
            </div>
          </Col>
        </Row>
        <FooterBlue />
      </Layout>
    )
  }
}

export default Blog
