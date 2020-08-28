import React from "react"
import { Link } from "gatsby"

import AniLink from "gatsby-plugin-transition-link/AniLink"
import logoWhite from "../images/logo-white.svg"
import { Row, Col, Container } from "react-bootstrap"

const FooterBlue = () => {
  return (
    <>
      <Container
        fluid
        className=""
        style={{
          backgroundColor: `var(--skyblue)`,
          position: "absolute",
          bottom: `0`,
          right: `0`,
          left: `0`,
          margin: `0 0 0 0`,
        }}
      >
        <Row>
          <Col>
            <AniLink
              style={{
                color: "var(--textTitle)",
              }}
              to="/"
              cover
              bg="var(--gradient-background)"
              direction="left"
              top="entry"
              duration={1}
              entryOffset={800}
              className="py-5"
            >
              <img src={logoWhite} alt="Tyler Vawser" className="pt-4 pl-5" />
            </AniLink>
          </Col>
          <Col className="mt-3 pt-4 text-light roboto w-medium text-end">
            <Row>Get in touch</Row>
            <Row>Set up a Call / Twitter / Email / Linkedin</Row>
          </Col>
          <Col className="mt-3 pt-4 text-light roboto w-medium ">
            <Row>Learn More</Row>

            <Row>About / Posts / Favorites</Row>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default FooterBlue
