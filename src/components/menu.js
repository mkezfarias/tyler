import React, { useContext } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"
import { Container, Row, Col, Modal } from "react-bootstrap"
import "../styles/global.scss"
import TransitionLink from "gatsby-plugin-transition-link"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { ThemeToggler, ThemeSetting } from "gatsby-plugin-dark-mode"
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

var hours = new Date().getHours()

const Menu = ({ handleClose }) => {
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
          className="text-light roboto w-regular h2 my-3 fancy-link"
          to="/calendly"
        >
          <span onClick={handleClose}>Set up a call</span>
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
          <span onClick={handleClose}>Posts</span>
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
          <span onClick={handleClose}> Favorites</span>
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
          <span onClick={handleClose}>Now</span>
        </AniLink>
        <AniLink
          className="fancy-link"
          cover
          bg="var(--gradient-background)"
          top="exit"
          direction="left"
          className="text-light roboto w-regular h2 my-4 fancy-link"
          to="/about"
        >
          <span onClick={handleClose}>About</span>
        </AniLink>
      </div>
      <Col className="d-flex flex-column night-fixed">
        {/* <Row className="d-flex justify-content-start w-50 pl-3">
          <a href="a" className="text-light roboto w-regular pr-2 pl-1">
            EN
          </a>
          <a
            href={`http://translate.google.com/translate?hl=&sl=en&tl=ja&u=www.tylervawser.com`}
            className="text-light roboto w-regular px-2"
          >
            日本
          </a>
          <a
            href={`http://translate.google.com/translate?hl=&sl=en&tl=es&u=www.tylervawser.com`}
            className="text-light roboto w-regular px-2"
          >
            ES
          </a>
        </Row> */}

        <ThemeToggler>
          {({ theme, toggleTheme }) => {
            return (
              <label>
                <input
                  hidden
                  type="checkbox"
                  onChange={e => {
                    localStorage.setItem(
                      "strict-theme",
                      e.target.checked ? "dark" : "light"
                    )
                    toggleTheme(e.target.checked ? "dark" : "light")
                  }}
                  checked={theme === "dark"}
                />{" "}
                <img
                  src={theme === "dark" ? dayButton : nightButton}
                  alt="Nigh/Day Mode"
                ></img>
              </label>
            )
          }}
        </ThemeToggler>
      </Col>
      <div onClick={handleClose}>
        <img src={closeBTN} alt="Close Button" className="close-button"></img>
      </div>
    </>
  )
}

export default Menu
