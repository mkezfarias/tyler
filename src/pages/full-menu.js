import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Row, Col } from "react-bootstrap"
import "../styles/global.scss"
import TransitionLink from "gatsby-plugin-transition-link"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { ThemeToggler } from "gatsby-plugin-dark-mode"
import whiteLogo from "../images/logo-white.svg"
import dayButton from "../images/daymode.svg"
import nightButton from "../images/night-button.svg"
import closeBTN from "../images/x.svg"

class FullMenu extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <Layout location={this.props.location}>
        <SEO
          title="Tyler Vawser"
          keywords={[`blog`, `Tyler Vawser`, `Tvawser`, `react`]}
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
            style={{ fontSize: `calc(20px + 5vw)` }}
          >
            Tyler is waiting to see that you’ll pick first.{" "}
          </Col>
        </Row>
        <Row
          style={{
            color: "var(--textTitle)",
            transitionTimingFunction: `cubic-bezier(0.25, 0.1, 0.25, 1)`,
            transition: `0.4s`,
          }}
          className="ml-3 roboto w-regular h4 pt-0 mt-0 line-height-1"
        ></Row>
        <Row
          style={{
            color: "var(--textTitle)",
            transitionTimingFunction: `cubic-bezier(0.25, 0.1, 0.25, 1)`,
            transition: `0.4s`,
          }}
          className="ml-0 mr-5 pr-5 roboto w-regular h6 d-flex justify-content-between flex-md-nowrap w-100 align-items-end mt-5 pt-5"
        ></Row>
        <div
          className="fixed-full-menu"
          style={{
            background: "var(--gradient-background)",
            transitionTimingFunction: `cubic-bezier(0.25, 0.1, 0.25, 1)`,
            transition: `0.4s`,
          }}
        >
          <div>
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

            <AniLink
              style={{
                color: "var(--textTitle)",
              }}
              to="/"
              className="fancy-link"
              cover
              bg="var(--gradient-background)"
              direction="left"
              top="entry"
              duration={2}
              entryOffset={800}
            >
              <img
                src={closeBTN}
                alt="Close Button"
                className="close-button"
              ></img>
            </AniLink>
          </div>
        </div>
      </Layout>
    )
  }
}

export default FullMenu
