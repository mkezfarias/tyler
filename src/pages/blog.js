import React from "react"
import { Link, graphql } from "gatsby"
import addToMailchimp from "gatsby-plugin-mailchimp"

import Layout from "../components/layout"

import { rhythm } from "../utils/typography"

import AniLink from "gatsby-plugin-transition-link/AniLink"

import { Card, Container, Row, Col, Modal, CardColumns } from "react-bootstrap"
import "../styles/global.scss"

import LogoFixedMobile from "../components/LogoFixedMobile"
import FooterBlue from "../components/Footer"
import { GatsbySeo } from "gatsby-plugin-next-seo"

class Blog extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      show: false,
    }

    this.handleClose = () => this.setState({ show: false })
    this.handleShow = () => this.setState({ show: true })

    this._handleSubmit = e => {
      addToMailchimp(this.state.email, { FNAME: `${this.state.name}` })
        .then(data => {
          console.log(data)
          alert("subscribed (temporary message)")
        })
        .catch(() => {})
    }
  }

  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMdx.edges

    return (
      <Layout location={this.props.location}>
        <GatsbySeo
          title="Tyler Vawser's Blog"
          description="Tyler's thoughts and writings."
          canonical="https://www.tylervawser.com/"
          keywords="tylervawser,tyler vawser"
          openGraph={{
            url: "https://www.tylervawser.com/blog",
            title: "Tyler Vawser's Blog",
            description: "Tyler's thoughts and writings",
           images: [
              {
                url: "../src/images/OGtylervawser.jpg",
                width: 1200,
                height: 1200,
                alt: "About Tyler Vawser",
              },
            ],
            site_name: "TylerVawser",
          }}
          twitter={{
            handle: "@tvaw",
            site: "@site",
            cardType: "summary_large_image",
          }}
        />

        <LogoFixedMobile />

        <Row
          className="mx-md-5 mx-px-5 px-0 mx-2 d-flex justify-content-center"
          style={{ color: `var(--textNormal)` }}
        >
          <Col
            xl={8}
            style={{
              color: "var(--textNormal)",
              transitionTimingFunction: `cubic-bezier(0.25, 0.1, 0.25, 1)`,
              transition: `0.4s`,
              textAlign: `center`,
              margin: `auto`,
              maxWidth: `90vw`,
              padding: `-20vh 10vw 0 10vw`,
              fontSize: `calc(20px + 4vw)`,
            }}
            className="wider wsans w-medium pb-0 mb-4 line-height-1 mt-0 w-semibold align-center"
          >
            Read more about Tyler Vawser
          </Col>
        </Row>

        <Row
          style={{ paddingBottom: "19vh" }}
          className="mx-md-5 px-md-5 d-flex justify-content-center"
        >
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
                        style={{ color: `var(--textNormal)`, fontSize: "20px" }}
                        dangerouslySetInnerHTML={{
                          __html: node.frontmatter.description || node.excerpt,
                        }}
                      />
                    </Card.Text>
                    <small style={{ fontSize: `18px` }} className="text-muted">
                      {node.frontmatter.date}
                    </small>
                  </Card.Body>
                </Card>
              </Col>
            )
          })}
        </Row>
        <Row className="w50 d-flex justify-content-center pb-5 mb-5 text-center">
          <Col>
            <div
              style={{ color: `var(--textNormal)` }}
              className="h1 wsans w-medium"
            >
              Thank you for reading.
            </div>
            <div
              style={{ color: `var(--textNormal)` }}
              className="h4 wsans w-medium"
            >
              Sign up to get new posts via email
            </div>
            <div className="mb-5 pb-5 text-center ">
              <form
                onSubmit={e => {
                  e.preventDefault()
                  this._handleSubmit(this.state.email)
                }}
              >
                <input
                  type="text"
                  placeholder="First name"
                  name="FNAME"
                  className="m-2 p-2"
                  id="mce-FNAME"
                  onChange={e => {
                    this.setState({ name: e.currentTarget.value })
                  }}
                />
                <input
                  type="email"
                  name="EMAIL"
                  className="m-2 p-2 pr-md-5"
                  id="mce-EMAIL"
                  placeholder="Email"
                  onChange={e => {
                    this.setState({ email: e.currentTarget.value })
                  }}
                />

                <div className="clear mb-5">
                  <input
                    type="submit"
                    value="Sign up"
                    name="subscribe"
                    id="mc-embedded-subscribe"
                    className="btn-primary px-4 py-2"
                  />
                </div>
              </form>
            </div>
          </Col>
        </Row>
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
