import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"
import Button from "../components/button"
import PageTransition from "gatsby-plugin-page-transitions"

class Blog extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMdx.edges

    return (
      <PageTransition
        defaultStyle={{
          transition: "left 500ms cubic-bezier(0.47, 0, 0.75, 0.72)",
          left: "100%",
          position: "absolute",
          width: "100%",
        }}
        transitionStyles={{
          entering: { left: "0%" },
          entered: { left: "0%" },
          exiting: { left: "100%" },
        }}
        transitionTime={500}
      >
        <Layout location={this.props.location} title={siteTitle}>
          <SEO title="All posts" />
          <Bio />
          <div style={{ margin: "20px 0 40px" }}>
            {posts.map(({ node }) => {
              const title = node.frontmatter.title || node.fields.slug
              return (
                <div key={node.fields.slug}>
                  <h3
                    style={{
                      marginBottom: rhythm(1 / 4),
                    }}
                  >
                    <Link
                      style={{ boxShadow: `none` }}
                      to={`/blog${node.fields.slug}`}
                    >
                      {title}
                    </Link>
                  </h3>
                  <small>{node.frontmatter.date}</small>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: node.frontmatter.description || node.excerpt,
                    }}
                  />
                </div>
              )
            })}
          </div>
          <Link to="/">
            <Button marginTop="85px">Go Home</Button>
          </Link>
        </Layout>
      </PageTransition>
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
