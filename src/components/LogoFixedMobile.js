import React, { useContext } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

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

const LogoFixedMobile = ({ noDisplay }) => {
  return (
    <>
      <AniLink
        style={{
          color: "var(--textTitle)",
        }}
        to="/"
        className={`logo-fixed-mobile ${noDisplay}`}
        cover
        bg="var(--gradient-background)"
        direction="left"
        top="entry"
        duration={1}
        entryOffset={800}
      >
        <img
          src={darkLogo}
          alt="Tyler Vawser"
          className="logo-fixed d-none d-sm-block"
        />
        <img
          src={darkLogo}
          alt="Tyler Vawser"
          className="logo-fixed-mobile d-block d-sm-none"
        />
      </AniLink>
    </>
  )
}

export default LogoFixedMobile
