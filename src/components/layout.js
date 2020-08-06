import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import { rhythm, scale } from "../utils/typography"
import menuIMG from "../images/menu.svg"
import Typewriter from "typewriter-effect"
import { Row, Col, Container } from "react-bootstrap"

class Layout extends React.Component {
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
            Tyler Vawser is
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
        <Link to="#">
          <img style={{ height: 20 }} src={menuIMG} alt="Menu" />
        </Link>
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
      <Wrapper>
        <div
          style={{
            marginLeft: `auto`,
            marginRight: `auto`,
            maxWidth: `100vw`,
            padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
          }}
        >
          <header className="d-flex justify-content-between">
            <div>{header}</div>
            <div>{menu}</div>
          </header>

          <main>{children}</main>
        </div>
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  min-height: 100vh;
`

export default Layout
