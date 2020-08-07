import React, { PureComponent } from "react"
import React, { useEffect, useState } from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import { rhythm, scale } from "../utils/typography"
import menuIMG from "../images/menu.svg"
import Typewriter from "typewriter-effect"
import { Row, Col, Container } from "react-bootstrap"

class Menu extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    return (
      <Container>
        <Image
          fixed={data.avatar.childImageSharp.fixed}
          alt={author}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            minWidth: 50,
            borderRadius: `100%`,
          }}
          imgStyle={{
            borderRadius: `50%`,
          }}
        />
        <p>
          Written by <strong>{author}</strong>, a framework built upon the React
          library.
          {` `}
          <a href={`https://twitter.com/${social.twitter}`}>
            Follow me on Twitter
          </a>
        </p>
      </Container>
    )
  }
}

export default Menu
