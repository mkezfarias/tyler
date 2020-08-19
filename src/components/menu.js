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

class Menu extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <>
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
          {" "}
          <img src={whiteLogo} alt="Tyler Vawser" className="logo-fixed"></img>
        </AniLink>
        <div className="d-flex flex-column p-2 justify-content-center align-items-end items-fixed">
          <AniLink
            style={{
              color: "var(--textTitle)",
            }}
            cover
            bg="var(--gradient-background)"
            direction="left"
            top="entry"
            duration={1}
            entryOffset={800}
            className="text-light roboto w-regular h2 my-4 fancy-link"
            to="/calendly"
          >
            Set up a call
          </AniLink>
          <AniLink
            style={{
              color: "var(--textTitle)",
            }}
            cover
            bg="var(--gradient-background)"
            direction="left"
            top="entry"
            duration={1}
            entryOffset={800}
            className="text-light roboto w-regular h2 my-3 fancy-link"
            to="/blog"
          >
            Posts
          </AniLink>
          <AniLink
            style={{
              color: "var(--textTitle)",
            }}
            cover
            bg="var(--gradient-background)"
            direction="left"
            top="entry"
            duration={1}
            entryOffset={800}
            className="text-light roboto w-regular h2 my-3 fancy-link"
            to="/favorites"
          >
            Favorites
          </AniLink>
          <AniLink
            style={{
              color: "var(--textTitle)",
            }}
            cover
            bg="var(--gradient-background)"
            direction="left"
            top="entry"
            duration={1}
            entryOffset={800}
            className="text-light roboto w-regular h2 my-3 fancy-link"
            to="/now"
          >
            Now
          </AniLink>
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
            className="text-light roboto w-regular h2 my-4 fancy-link"
            to="/about"
          >
            About
          </AniLink>
        </div>
        <Col className="d-flex flex-column night-fixed">
          <Row className="d-flex justify-content-start w-50 pl-3">
            <a href="a" className="text-light roboto w-regular pr-2 pl-1">
              EN
            </a>
            <a href="a" className="text-light roboto w-regular px-2">
              日
            </a>
            <a href="a" className="text-light roboto w-regular px-2">
              ES
            </a>
          </Row>

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
      </>
    )
  }
}

export default Menu
