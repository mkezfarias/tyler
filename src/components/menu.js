import React from "react"

import { Col } from "react-bootstrap"
import "../styles/global.scss"

import AniLink from "gatsby-plugin-transition-link/AniLink"
import { ThemeToggler } from "gatsby-plugin-dark-mode"
import whiteLogo from "../images/logo-white.svg"

import dayButton from "../images/daymode.svg"
import nightButton from "../images/night-button.svg"
import closeBTN from "../images/x.svg"
import translate from '../i18n/messages/translateHelper';

const Menu = ({ handleClose, zIndex }) => {
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
        <img
          src={whiteLogo}
          onClick={handleClose}
          alt="Tyler Vawser"
          className="logo-fixed"
        ></img>
      </AniLink>
      <div className="d-flex flex-column p-2 justify-content-center align-items-end items-fixed">
        <AniLink
          style={{
            color: "var(--textTitle)",
          }}
          cover
          bg="var(--gradient-background)"
          direction="right"
          top="entry"
          duration={1}
          entryOffset={800}
          className="text-light roboto w-regular h2 my-3 fancy-link "
          to="/connect"
        >
          <span onClick={handleClose}>{ translate('setCall') }</span>
        </AniLink>
        <AniLink
          style={{
            color: "var(--textTitle)",
          }}
          cover
          bg="var(--gradient-background)"
          direction="right"
          top="entry"
          duration={1}
          entryOffset={800}
          className="text-light roboto w-regular h2 my-3 fancy-link"
          to="/blog"
        >
          <span onClick={handleClose}>{ translate('posts') }</span>
        </AniLink>
        <AniLink
          style={{
            color: "var(--textTitle)",
          }}
          cover
          bg="var(--gradient-background)"
          direction="right"
          top="entry"
          duration={1}
          entryOffset={800}
          className="text-light roboto w-regular h2 my-3 fancy-link"
          to="/favorites"
        >
          <span onClick={handleClose}> { translate('favorites') }</span>
        </AniLink>
        <AniLink
          style={{
            color: "var(--textTitle)",
          }}
          cover
          bg="var(--gradient-background)"
          direction="right"
          top="entry"
          duration={1}
          entryOffset={800}
          className="text-light roboto w-regular h2 my-3 fancy-link"
          to="/now"
        >
          <span onClick={handleClose}>{ translate('now') }</span>
        </AniLink>
        <AniLink
          className="fancy-link"
          cover
          bg="var(--gradient-background)"
          top="exit"
          direction="right"
          className="text-light roboto w-regular h2 my-4 fancy-link"
          to="/about"
        >
          <span onClick={handleClose}>{ translate('about') }</span>
        </AniLink>
      </div>
      <Col className="d-flex flex-column night-fixed">
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
