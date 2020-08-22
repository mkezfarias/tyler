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
import MenuFixedIcon from "./MenuFixedIcon"

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
                  `reading <a class="fancy-link " href="https://readjapaneseliterature.com/2020/07/24/manazuru-by-hiromi-kawakami-and-a-man-by-keiichiro-hirano/">Manazura</a>.`,
                  "on a Zoom call.",
                  "answering emails.",
                  "meeting interesting people.",
                  "is going for a walk.",
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
      menu = <MenuFixedIcon />
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
      menu = <MenuFixedIcon handleShow={this.handleShow} />
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
        <ThemeToggler>
          {({ theme, toggleTheme }) => {
            let hours = parseInt(
              new Date().toLocaleTimeString("en-GB").slice(0, 2)
            )

            if (hours >= 7 && hours < 17) {
              hours = "light"
              typeof window !== "undefined" &&
                window.localStorage.setItem("theme", "light")
            } else {
              hours = "dark"
              typeof window !== "undefined" &&
                window.localStorage.setItem("theme", "dark")
            }

            return (
              <label>
                <input
                  hidden
                  type="checkbox"
                  checked={hours === "dark" ? true : false}
                />{" "}
              </label>
            )
          }}
        </ThemeToggler>
        <div
          style={{
            marginLeft: `auto`,
            marginRight: `auto`,
            maxWidth: `1400px`,
            backgroundColor: `var(--bg)`,
          }}
          className="pt-5 pl-1 pl-3 pl-1 mt-4 mt-md-5 mr-md-4 mb-md-1 ml-md-4"
        >
          <header className="d-flex justify-content-between align-items-center mb-5 mt-md-5">
            <div onClick={this.handleShow}>{header}</div>
          </header>
          <div className="menu-fixed">{menu}</div>
          <main
            style={{
              transitionTimingFunction: `cubic-bezier(0.25, 0.1, 0.25, 1)`,
              transition: `0.5s`,
            }}
          >
            {children}
          </main>
        </div>
        <Modal
          onEntered={this.bgTransparent}
          show={this.state.show}
          animation={false}
          onHide={this.handleClose}
          className="modal-menu bg-transparent"
          backdropClassName="transparent-opacity"
        >
          <Modal.Body
            style={{
              background: "var(--gradient-background)",
              transitionTimingFunction: `cubic-bezier(0.25, 0.1, 0.25, 1)`,
              transition: `0.4s`,
            }}
          >
            <Menu handleClose={this.handleClose} />

            <div onClick={this.handleClose}>
              <img
                src={closeBTN}
                alt="Close Button"
                className="close-button"
              ></img>
            </div>
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
