import React, { useEffect, useState } from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import { rhythm, scale } from "../utils/typography"
import menuIMG from "../images/menu.svg"
import menuDarkIMG from "../images/menu2.svg"
import Typewriter from "typewriter-effect"
import {
  Modal,
  Row,
  Col,
  Container,
  Button,
  CloseButton,
} from "react-bootstrap"
import Menu from "./menu"
import { ThemeToggler } from "gatsby-plugin-dark-mode"
import whiteLogo from "../images/logo-white.svg"
import dayButton from "../images/daymode.svg"
import nightButton from "../images/night-button.svg"
import closeBTN from "../images/x.svg"
import AniLink from "gatsby-plugin-transition-link/AniLink"

class Layout extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      show: false,
    }

    this.handleClose = () => this.setState({ show: false })
    this.handleShow = () => this.setState({ show: true })
  }

  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    const blogPath = `${__PATH_PREFIX__}/blog/`
    let header
    let menu

    if (location.pathname === rootPath) {
      header = (
        <Container>
          <div
            style={{
              color: "var(--textNormal)",
              transitionTimingFunction: `cubic-bezier(0.25, 0.1, 0.25, 1)`,
              transition: `0.4s`,
            }}
            className="main-title wsans w-semibold"
          >
            <span className="mb-0 pb-0">Tyler Vawser is</span>
            <Typewriter
              options={{
               strings: [
                  `growing <a class="fancy-link " href="https://www.apptegy.com/">Apptegy</a>.`,
                  `reading <a class="fancy-link " href="https://www.apptegy.com/">Manazura</a> by Hiromi Kawakami.`,
                  "on a Zoom call.",
                  "hiring thoughtful software engineers.",
                  "meeting interesting people.",
                  "exploring digital minimalism.",
                  "drinking coffee.",
                  `listening to <a class="fancy-link " href="https://open.spotify.com/playlist/7wgD1FW1Pp3LTp9di8YHBB?si=JZwsWRKMQm-knYVxl9fIKQ">minimal piano</a>.`,
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
        </Container>
      )
      menu = (
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
          direction="left"
          top="entry"
          duration={2}
        >
          <div
            style={{
              background: `var(--menu-img)`,
              transitionTimingFunction: `cubic-bezier(0.25, 0.1, 0.25, 1)`,
              transition: `0.4s`,
              height: "30px",
              width: "30px",
            }}
          ></div>
        </AniLink>
      )
    } else {
      header = (
        <Row>
          <Col
            xl={12}
            style={{
              color: "var(--textNormal)",
              transitionTimingFunction: `cubic-bezier(0.25, 0.1, 0.25, 1)`,
              transition: `0.4s`,
              textAlign: `center`,
              margin: `auto`,
              maxWidth: `100vw`,
              padding: `-0vh 10vw 0 10vw`,
              fontSize: `calc(20px + 2vw)`,
            }}
            className="wider wsans w-medium pb-0 mb-0 line-height-1 mt-0 w-semibold "
          >
            {title}
          </Col>
        </Row>
      )
    }
    return (
      <Wrapper
        style={{
          backgroundColor: "var(--bg)",
          transitionTimingFunction: `cubic-bezier(0.25, 0.1, 0.25, 1)`,
          transition: `0.4s`,
          minHeight: `100vh`,
        }}
      >
        <div
          style={{
            marginLeft: `auto`,
            marginRight: `auto`,
            maxWidth: `1400px`,
            padding: `${rhythm(5.5)} ${rhythm(1.5)} 0 ${rhythm(1.5)} `,
          }}
        >
          <header className="d-flex justify-content-between align-items-center mb-5">
            <div onClick={this.handleShow}>{header}</div>
          </header>
          <div className="menu-fixed">{menu}</div>
          <main>{children}</main>
        </div>
        <Modal
          show={this.state.show}
          backdrop="static"
          animation={false}
          onHide={this.handleClose}
          keyboard={false}
          className="modal-menu"
        >
          <Modal.Body
            style={{
              background: "var(--gradient-background)",
              transitionTimingFunction: `cubic-bezier(0.25, 0.1, 0.25, 1)`,
              transition: `0.4s`,
            }}
          >
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
            <img
              src={closeBTN}
              alt="Close Button"
              className="close-button"
              onClick={this.handleClose}
            ></img>
          </Modal.Body>
        </Modal>
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  min-height: 100vh;
`

export default Layout
