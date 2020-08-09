import React, { useEffect, useState } from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import { rhythm, scale } from "../utils/typography"
import menuIMG from "../images/menu.svg"
import menuDarkIMG from "../images/menu2.svg"
import Typewriter from "typewriter-effect"
import { Modal, Row, Col, Container, Button } from "react-bootstrap"
import Menu from "./menu"
import { ThemeToggler } from "gatsby-plugin-dark-mode"

class Layout extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      show: false,
      day: window.localStorage.getItem("day"),
    }

    this.handleClose = () => this.setState({ show: false })
    this.handleShow = () => this.setState({ show: true })
    this.handleColors = () => {
      this.setState({ day: !this.state.day })
    }
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
                  "typing.",
                  `growing <a class="fancy-link " href="https://www.apptegy.com/">Apptegy </a>.`,
                  "on Zoom.",
                  "asking questions.",
                  "riding his bike.",
                  "drinking coffee.",
                  "running.",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
        </Container>
      )
      menu = (
        <div
          style={{
            background: `var(--menu-img)`,
            transitionTimingFunction: `cubic-bezier(0.25, 0.1, 0.25, 1)`,
            transition: `0.4s`,
            height: "30px",
            width: "30px",
          }}
          onClick={this.handleShow}
        ></div>
      )
    } else {
      header = (
        <h3>
          <Link className="fancy-link" to={`/blog/`}>
            {title}
          </Link>
        </h3>
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
            <div>{header}</div>
          </header>
          <div className="menu-fixed">{menu}</div>
          <main>{children}</main>
        </div>
        <Modal
          show={this.state.show}
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
            <Link to="/about">
              <Modal.Title>About</Modal.Title>
            </Link>
            <Link to="/blog">
              <Modal.Title>Posts</Modal.Title>
            </Link>
            <Link to="/favorites">
              <Modal.Title>Favorites</Modal.Title>
            </Link>
            <Link to="/calendly">
              <Modal.Title>Start a Call</Modal.Title>
            </Link>
            <ThemeToggler>
              {({ theme, toggleTheme }) => (
                <label>
                  <input
                    type="checkbox"
                    onChange={e => {
                      console.log(theme)
                      toggleTheme(e.target.checked ? "dark" : "light")
                    }}
                    checked={theme === "dark"}
                  />{" "}
                  Dark mode
                </label>
              )}
            </ThemeToggler>
            <Button variant="primary" onClick={this.handleColors}>
              {this.state.day ? "Night" : "Day Mode"}{" "}
            </Button>
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
