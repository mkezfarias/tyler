import React from "react"
import { Link, graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm, scale } from "../utils/typography"

import { Container, Col } from "react-bootstrap"

import LogoFixedMobile from "../components/LogoFixedMobile"

class BlogPostTemplate extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      show: false,
    }

    this.handleClose = () => this.setState({ show: false })
    this.handleShow = () => this.setState({ show: true })
  }

  render() {
    const post = this.props.data.mdx
    const { previous, next } = this.props.pageContext

    return (
      <Layout location={this.props.location}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        <LogoFixedMobile />

        <Container
          className="px-md-5 pr-5 pt-4"
          style={{ marginTop: `-50px`, marginBottom: `100px` }}
        >
          <Col
            xl={8}
            xs={12}
            className="m-auto pr-3 mr-3 m-md-auto pb-md-5 mb-md-5"
          >
            <h1
              style={{
                color: "var(--textTitle)",
              }}
            >
              {post.frontmatter.title}
            </h1>
            <p
              className="pl-1"
              style={{
                ...scale(-1 / 5),
                display: `block`,
                marginBottom: rhythm(1),
                marginTop: rhythm(1),
                color: "var(--textTitle)",
              }}
            >
              <h6 style={{ color: "var(--textTitle)" }}>
                {post.frontmatter.date}
              </h6>
            </p>
            <MDXRenderer style="color: var(--textNormal);">
              {post.body}
            </MDXRenderer>
            <div
              style={{
                borderBottom: `1px solid var(--textTitle)`,
                marginTop: rhythm(2),
                marginBottom: rhythm(2),
              }}
            />
            {
              //            <Footer />
            }
            <ul
              style={{
                display: `flex`,
                flexWrap: `wrap`,
                justifyContent: `space-between`,
                listStyle: `none`,
                padding: 0,
              }}
            >
              <li>
                {previous && (
                  <Link
                    to={`/blog${previous.fields.slug}`}
                    rel="prev"
                    className="fancy-link"
                  >
                    ← {previous.frontmatter.title}
                  </Link>
                )}
              </li>
              <li>
                {next && (
                  <Link
                    to={`/blog${next.fields.slug}`}
                    rel="next"
                    className="fancy-link"
                  >
                    {next.frontmatter.title} →
                  </Link>
                )}
              </li>
            </ul>
          </Col>
        </Container>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      body
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`
