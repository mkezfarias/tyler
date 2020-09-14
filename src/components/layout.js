import React from "react"

import styled from "styled-components"

import Typewriter from "typewriter-effect"
import { Modal, Row, Col, Container } from "react-bootstrap"
import Menu from "./menu"
import { ThemeToggler } from "gatsby-plugin-dark-mode"
import closeBTN from "../images/x.svg"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import FooterBlue from "./Footer"
import { getString } from "../components/content.js"

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
    const blogPath = `${__PATH_PREFIX__}/blog`
    const fullMenuPath = `${__PATH_PREFIX__}/full-menu`
    const fullMenuPath2 = `${__PATH_PREFIX__}/full-menu/`
    let header
    let menu
    let footer

    if (location.pathname === rootPath) {
      header = (
        <Container>
          <div
            style={{
              color: "var(--textNormal)",
              transitionTimingFunction: `cubic-bezier(0.25, 0.1, 0.25, 1)`,
              transition: `0.4s`,
              position: `relative`,
            }}
            className="main-title wsans w-semibold"
          >
            <span className="mb-0 pb-0">Tyler Vawser is</span>
            <Typewriter
              onInit={typewriter => {
                typewriter
                  .typeString(
                    `growing <a target="_blank" class="fancy-link " href="https://www.apptegy.com/">Apptegy</a>.`
                  )
                  .pauseFor(15000)
                  .deleteAll()
                  .typeString(getString())
                  .start()
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
            height: "30px",
            width: "30px",
            zIndex: `300`,
          }}
          to="/full-menu"
          className="menu-fixed d-block"
          cover
          bg="var(--gradient-background)"
          direction="left"
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
            className="d-block d-md-none menu-fixed"
          ></div>
          <div
            style={{
              background: `var(--menu-img)`,
              transitionTimingFunction: `cubic-bezier(0.25, 0.1, 0.25, 1)`,
              transition: `0.4s`,
              height: "30px",
              width: "30px",
              zIndex: `300`,
            }}
            className="d-md-block d-none"
          ></div>
        </AniLink>
      )
      footer = null
    } else if (
      location.pathname === fullMenuPath ||
      location.pathname === fullMenuPath2
    ) {
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
      menu = null
      footer = null
    } else {
      header = (
        <Row className="mx-md-2 mx-px-2 mx-1 px-1">
          <Col
            xl={12}
            style={{
              color: "var(--textNormal)",
              transitionTimingFunction: `cubic-bezier(0.25, 0.1, 0.25, 1)`,
              transition: `0.4s`,
              textAlign: `center`,
              margin: `auto`,
              maxWidth: `100vw`,
              fontSize: `calc(20px + 2vw)`,
            }}
            className="wider wsans w-medium mx-md-5 mx-px-5 line-height-1 mt-0 w-semibold "
          >
            {title}
          </Col>
        </Row>
      )
      menu = (
        <div
          style={{
            color: "var(--textTitle)",
            transitionTimingFunction: `cubic-bezier(0.25, 0.1, 0.25, 1)`,
            transition: `0.6s`,
            height: "30px",
            width: "30px",
            zIndex: `300`,
          }}
          className="menu-fixed"
        >
          <AniLink
            style={{
              color: "var(--textTitle)",
              transitionTimingFunction: `cubic-bezier(0.25, 0.1, 0.25, 1)`,
              transition: `0.6s`,
              height: "30px",
              width: "30px",
              zIndex: `300`,
            }}
            to="/full-menu"
            className="menu-fixed d-block"
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
              className="d-block d-md-none menu-fixed"
            ></div>
          </AniLink>

          <div
            style={{
              background: `var(--menu-img)`,
              transitionTimingFunction: `cubic-bezier(0.25, 0.1, 0.25, 1)`,
              transition: `0.4s`,
              height: "30px",
              width: "30px",
              zIndex: `300`,
            }}
            className="d-md-block d-none menu-fixed"
            onClick={this.handleShow}
          ></div>
        </div>
      )
      footer = <FooterBlue />
    }
    return (
      <Wrapper>
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
              <input
                hidden
                type="checkbox"
                checked={hours === "dark" ? true : false}
              />
            )
          }}
        </ThemeToggler>
        <div
          style={{
            marginLeft: `auto`,
            marginRight: `auto`,
            maxWidth: `1400px`,
          }}
          className="pt-5 pl-1 pl-3 pl-1 mt-4 mt-md-5 mr-md-4 mb-md-1 ml-md-4"
        >
          <header className="d-flex justify-content-between align-items-center mb-5 mt-md-5">
            {" "}
            <div onClick={this.handleShow}>{header}</div>
          </header>
          <div className="menu-fixed menu-fixed-mobile ">{menu}</div>
        </div>
        <div>{children}</div>
        <div> {footer} </div>
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
              <img src={closeBTN} alt="Close Button" className="close-button" />
            </div>
          </Modal.Body>
        </Modal>
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  min-height: 92vh;
`

export default Layout
