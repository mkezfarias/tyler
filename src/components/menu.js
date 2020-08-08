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
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
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
