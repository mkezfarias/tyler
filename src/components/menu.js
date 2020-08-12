import React, { useEffect, useState, PureComponent } from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import { rhythm, scale } from "../utils/typography"
import menuIMG from "../images/menu.svg"
import Typewriter from "typewriter-effect"
import { Row, Col, Button, Modal } from "react-bootstrap"

class Menu extends PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <>
        <Modal.Body
          style={{
            background: "var(--gradient-background)",
            transitionTimingFunction: `cubic-bezier(0.25, 0.1, 0.25, 1)`,
            transition: `0.4s`,
          }}
        >
          <Link to="/blog">
            <Modal.Title>Modal title</Modal.Title>
          </Link>
          <Modal.Title>Modal title</Modal.Title>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Body>
      </>
    )
  }
}

export default Menu
