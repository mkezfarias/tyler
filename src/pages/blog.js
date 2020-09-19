import React from "react"
import { Link, graphql } from "gatsby"
import addToMailchimp from "gatsby-plugin-mailchimp"

import Layout from "../components/layout"

import { rhythm } from "../utils/typography"

import AniLink from "gatsby-plugin-transition-link/AniLink"

import { Card, Row, Col } from "react-bootstrap"
import "../styles/global.scss"

import LogoFixedMobile from "../components/LogoFixedMobile"
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
          alert("Thank you for subscribing")
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
          className="mx-md-0 mx-px-5 px-0 mx-2 d-flex justify-content-center"
          style={{ color: `var(--textNormal)` }}
        >
          <Col
            xl={8}
            lg={8}
            md={8}
            sm={10}
            xs={10}
            style={{
              color: "var(--textNormal)",
              transitionTimingFunction: `cubic-bezier(0.25, 0.1, 0.25, 1)`,
              transition: `0.4s`,
              padding: `0 0 0 0`,
              fontSize: `calc(20px + 2vw)`,
            }}
            className="wider wsans w-medium pb-0 mb-4 line-height-1 mt-0 w-semibold align-center"
          >
            Tyler's been writing
          </Col>
        </Row>
        <Row
          className="mx-md-0 mx-px-5 px-0 mx-2 d-flex justify-content-center"
          style={{ color: `var(--textNormal)` }}
        >
          <Col
            xl={8}
            lg={8}
            md={8}
            sm={10}
            xs={10}
            style={{
              color: "var(--textNormal)",
              transitionTimingFunction: `cubic-bezier(0.25, 0.1, 0.25, 1)`,
              transition: `0.4s`,
              padding: `2vh 5vw 0 0`,
              fontSize: `16px`,
              lineHeight: `1.2`,
            }}
            className="roboto pb-0 mb-4 line-height-1 mt-0 pr-0 pr-sm-0"
          >
            Hello! Right <a href="https://www.tylervawser.com/now/">now</a>, I am the VP of People at <a href="https://www.apptegy.com/">Apptegy</a>, where I find smart, driven people to help us empower school leaders to run better schools. 
      Before that I supported marketing teams at startups and headed up marketing for <a href="https://www.stickermule.com//">Sticker Mule</a>. 
    This is where I write infrequently about what I'm learning and what is on my mind. 
          </Col>
        </Row>

        <Row
          style={{ paddingBottom: "19vh" }}
          className="mx-md-5 px-md-5 d-flex justify-content-center"
        >
          {posts.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug
            return (
              <Col lg={5} xs={10} sm={10} md={11} className="px-0">
                <Card
                  key={node.fields.slug}
                  style={{
                    margin: "20px 30px 20px 0px",
                    border: `none`,
                    borderRadius: `0px`,
                    background: `var(--bg)`,
                    boxShadow: `var(--card-bg)`,
                  }}
                >
                  <Card.Body>
                    <Card.Title style={{ minHeight: `40px` }}>
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
                            color: "var(--textNormal)",
                            transition: `0.4s`,
                          }}
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
                        style={{ color: `var(--textNormal)`, fontSize: "16px" }}
                        dangerouslySetInnerHTML={{
                          __html: node.frontmatter.description || node.excerpt,
                        }}
                      />
                    </Card.Text>
                    <div
                      style={{
                        borderTop: `1px gray solid`,
                        marginTop: `30px`,
                        paddingTop: `20px`,
                      }}
                    >
                      <Link
                        style={{
                          color: `#5ba9ed`,
                          fontWeight: `500`,
                        }}
                        className="wsans"
                        className="fancy-link"
                        to={`/blog${node.fields.slug}`}
                      >
                        Read more
                      </Link>
                    </div>
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
