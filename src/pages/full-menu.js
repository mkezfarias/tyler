import React from "react"
import { Link, navigate } from "gatsby"

import Layout from "../components/layout"
import { Row, Col } from "react-bootstrap"
import "../styles/global.scss"
import TransitionLink from "gatsby-plugin-transition-link"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { ThemeToggler } from "gatsby-plugin-dark-mode"
import whiteLogo from "../images/logo-white.svg"
import dayButton from "../images/daymode.svg"
import nightButton from "../images/night-button.svg"
import closeBTN from "../images/x.svg"
import Menu from "../components/menu"

class FullMenu extends React.Component {
  constructor(props) {
    super(props)
    this.handleCloseX = () => navigate("/")
  }

  render() {
    return (
      <Layout location={this.props.location}>
        <GatsbySeo
          title="Tyler Vawser's Menu"
          description="Tyler Vawser's favorite tools, books, things, and more."
          canonical="https://www.tylervawser.com/favorites"
          keywords="tylervawser,tyler vawser,favorite tools" // keywords list
          openGraph={{
            url: "https://www.tylervawser.com/favorites",
            title: "About Tyler Vawser",
            description:
              "Tyler Vawser's favorite tools, books, things, and more.",
            images: [
              {
                url: "../src/images/OGtylervawser.jpg",
                width: 1200,
                height: 1200,
                alt: "About Tyler Vawser",
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

        <Row
          id="padding-x"
          style={{
            color: "var(--textNormal)",
            transitionTimingFunction: `cubic-bezier(0.25, 0.1, 0.25, 1)`,
            transition: `0.4s`,
          }}
          className="wider ml-3 wsans w-medium h2 pb-0 mb-0 line-height-1 mt-0"
        >
          <Col
            lg={5}
            className="w-semibold "
            style={{ fontSize: `calc(18px + 5vw)` }}
          >
            Tyler is waiting to see what you’ll pick first.{" "}
          </Col>

          <Col
            lg={7}
            style={{
              background: "var(--gradient-background)",
              position: `fixed`,
              top: `0`,
              bottom: `0`,
              right: `0`,
            }}
          >
            <Menu handleClose={this.handleClose} />
          </Col>
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
          >
            <img
              src={closeBTN}
              alt="Close Button"
              className="close-button"
            ></img>
          </AniLink>
        </Row>
      </Layout>
    )
  }
}

export default FullMenu
