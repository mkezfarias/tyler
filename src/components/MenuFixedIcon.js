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

const MenuFixedIcon = ({ handleShow }) => {
  return (
    <>
      <div
        onClick={handleShow}
        style={{
          background: `var(--menu-img)`,
          transitionTimingFunction: `cubic-bezier(0.25, 0.1, 0.25, 1)`,
          transition: `0.4s`,
          height: "30px",
          width: "30px",
          zIndex: `300`,
        }}
        className="menu-fixed d-none d-md-block"
      ></div>
      <AniLink
        style={{
          color: "var(--textTitle)",
          transitionTimingFunction: `cubic-bezier(0.25, 0.1, 0.25, 1)`,
          transition: `0.6s`,
        }}
        to="/full-menu"
        className="fancy-link"
        cover
        bg="var(--gradient-background)"
        direction="right"
        top="entry"
        duration={1}
      >
        <div
          style={{
            background: `var(--menu-img)`,
            transitionTimingFunction: `cubic-bezier(0.25, 0.1, 0.25, 1)`,
            transition: `0.4s`,
            height: "30px",
            width: "30px",
            zIndex: `300`,
          }}
          className="menu-fixed-mobile d-block d-md-none"
        ></div>
      </AniLink>
    </>
  )
}

export default MenuFixedIcon
