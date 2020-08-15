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
        <Link to="/">
          <img src={whiteLogo} alt="Tyler Vawser" className="logo-fixed"></img>
        </Link>
        <div className="d-flex flex-column p-2 justify-content-center align-items-end items-fixed">
          <Link
            className="text-light roboto w-regular h2 my-4 fancy-link"
            to="/about"
          >
            About
          </Link>

          <Link
            className="text-light roboto w-regular h2 my-3 fancy-link"
            to="/blog"
          >
            Posts
          </Link>

          <Link
            className="text-light roboto w-regular h2 my-3  fancy-link"
            to="/now"
          >
            Now
          </Link>

          <Link
            className="text-light roboto w-regular h2 my-3  fancy-link"
            to="/favorites"
          >
            Favorites
          </Link>

          <Link
            className="text-light roboto w-regular h2 my-4  fancy-link"
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
      </>
    )
  }
}

export default Menu
