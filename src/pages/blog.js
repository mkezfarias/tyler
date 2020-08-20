import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"
import Button from "../components/button"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { TransitionState } from "gatsby-plugin-transition-link"

import { Card, Container, Row, Col, Modal, CardColumns } from "react-bootstrap"
import "../styles/global.scss"
import TransitionLink from "gatsby-plugin-transition-link"
import { ThemeToggler } from "gatsby-plugin-dark-mode"
import whiteLogo from "../images/logo-white.svg"
import darkLogo from "../images/logo.svg"
import dayButton from "../images/daymode.svg"
import nightButton from "../images/night-button.svg"
import closeBTN from "../images/x.svg"
import menuIMG from "../images/menu.svg"
import menuDarkIMG from "../images/menu2.svg"
import arrowIMG from "../images/arrow.svg"
import toolsIcon from "../images/favorite tools icon.svg"
import podcastsIcon from "../images/favorite podcasts icon.svg"
import travelIcon from "../images/favorite podcasts icon.svg"
import videosIcon from "../images/favorite videos icon.svg"
import footerIMG from "../images/footer.png"
import footerIMG2 from "../images/footer@2x.png"
import Menu from "../components/menu"

class Blog extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      show: false,
    }

    this.handleClose = () => this.setState({ show: false })
    this.handleShow = () => this.setState({ show: true })
  }
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMdx.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="All posts" />
        <AniLink
          style={{
            color: "var(--textTitle)",
          }}
          to="/"
          className="fancy-link"
          cover
          bg="var(--gradient-background)"
          direction="left"
          top="entry"
          duration={1.5}
          entryOffset={800}
        >
          <img src={darkLogo} alt="Tyler Vawser" className="logo-fixed"></img>
        </AniLink>
        <Row className="mx-5 px-5">
          <Col className="mx-3" xl={9} style={{ color: `var(--textNormal)` }}>
            <Bio />
          </Col>
        </Row>

        <Row
          style={{ margin: "auto", paddingBottom: "19vh" }}
          className="px-5 mx-5"
        >
          {posts.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug
            return (
              <Col lg={5}>
                <Card
                  key={node.fields.slug}
                  style={{
                    margin: "20px 40px",
                    border: `none`,
                    borderRadius: `0px`,
                    background: `var(--bg)`,
                    boxShadow: `var(--card-bg)`,
                  }}
                >
                  <Card.Body>
                    <Card.Title>
                      <h3
                        className="wsans w-medium"
                        style={{
                          color: `var(--textNormal)`,
                          marginBottom: rhythm(1 / 4),
                        }}
                      >
                        <AniLink
                          style={{
                            bg: "var(--gradient-background)",
                            color: "#5ba9ed",
                            transition: `0.4s`,
                          }}
                          className="fancy-link"
                          cover
                          bg="var(--gradient-background)"
                          top="exit"
                          direction="left"
                          to={`/blog${node.fields.slug}`}
                        >
                          {title}
                        </AniLink>
                      </h3>
                    </Card.Title>
                    <Card.Text>
                      <p
                        style={{ color: `var(--textNormal)` }}
                        dangerouslySetInnerHTML={{
                          __html: node.frontmatter.description || node.excerpt,
                        }}
                      />
                    </Card.Text>
                    <small className="text-muted">
                      {node.frontmatter.date}
                    </small>
                  </Card.Body>
                </Card>
              </Col>
            )
          })}
        </Row>

        {/* <Modal
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
        </Modal> */}

        {/* <div
          onClick={this.handleShow}
          style={{
            background: `var(--menu-img)`,
            transitionTimingFunction: `cubic-bezier(0.25, 0.1, 0.25, 1)`,
            transition: `0.4s`,
            height: "30px",
            width: "30px",
          }}
          className="menu-fixed"
        ></div> */}
        <img
          src={footerIMG}
          style={{
            position: "absolute",
            bottom: `0`,
            right: `0`,
            left: `0`,
            margin: `0 0 0 0`,
          }}
        ></img>
      </Layout>
    )
  }
}

export default Blog

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
