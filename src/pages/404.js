import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Col } from "react-bootstrap"

class NotFoundPage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title="You are lost">
        <SEO title="404: Not Found" />
        <Col xl={{ span: 8, offset: 1 }}>
          <h1
            style={{
              color: "var(--textTitle)",
            }}
          >
            Tyler's not sure what you found.
          </h1>

          <p className="h4 pt-4">
            You are on a page that does not exist anymore or never did. Tyler
            recommends that you{" "}
            <a className="fancy-link" href="https://www.tylervawser.com/">
              click here to find your way back
            </a>
            .
          </p>
        </Col>
      </Layout>
    )
  }
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
