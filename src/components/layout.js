import React, { useEffect, useState, Component } from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import { rhythm, scale } from "../utils/typography"
import menuIMG from "../images/menu.svg"
import Typewriter from "typewriter-effect"
import { Modal, Row, Col, Container, Button } from "react-bootstrap"
import Menu from "./menu"

class Layout extends React.Component {
  componentDidMount() {
    const getDay = window.localStorage.getItem("day")
    return getDay
  }
  componentDidMount() {
    const setDay = bool => window.localStorage.getItem("day", bool)
    return setDay()
  }
  constructor(props) {
    super(props)
    this.state = {
      show: false,
      day: getDay,
    }
    this.handleClose = () => this.setState({ show: false })
    this.handleShow = () => this.setState({ show: true })
    this.handleColors = () => {
      this.setState({ day: !this.state.day })
      setDay(!getDay)
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
          <div className="main-title wsans w-semibold">
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
        <div onClick={this.handleShow}>
          <img style={{ height: 20 }} src={menuIMG} alt="Menu" />
        </div>
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
          background: `${this.state.day ? "red" : "white"}`,
          transitionTimingFunction: `cubic-bezier(0.25, 0.1, 0.25, 1)`,
          transition: `0.4s`,
        }}
      >
        <div
          style={{
            marginLeft: `auto`,
            marginRight: `auto`,
            maxWidth: `1200vw`,
            height: `100vh`,
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
          <Menu />
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={this.handleColors}>
              {this.state.day ? "Noche" : "Dia"}{" "}
            </Button>
          </Modal.Footer>
        </Modal>
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  min-height: 100vh;
`

export default Layout
