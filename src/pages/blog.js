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
import LogoFixedMobile from "../components/LogoFixedMobile"
import FooterBlue from "../components/Footer"

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
        <LogoFixedMobile />

        <Row
          className="mx-md-5 mx-px-5 px-0 mx-2"
          style={{ color: `var(--textNormal)` }}
        >
          <Col
            sm={10}
            md={10}
            lg={10}
            xl={10}
            className="mx-md-5 px-md-4 mr-4 "
          >
            <Bio />
          </Col>
        </Row>

        <Row style={{ paddingBottom: "19vh" }} className="mx-md-5 px-md-5 ">
          {posts.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug
            return (
              <Col lg={5} xs={12} sm={12} md={12}>
                <Card
                  key={node.fields.slug}
                  style={{
                    margin: "20px 30px 20px 10px",
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
        <FooterBlue />
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
