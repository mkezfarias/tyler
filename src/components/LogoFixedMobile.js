import React from "react"


import Layout from "../components/layout"

import SEO from "../components/seo"


import Button from "../components/button"

import { Container, Row, Col, Modal } from "react-bootstrap"

import "../styles/global.scss"

import AniLink from "gatsby-plugin-transition-link/AniLink"

import darkLogo from "../images/logo.svg"

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
