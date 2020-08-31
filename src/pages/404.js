import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

class NotFoundPage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={You are lost}>
        <SEO title="404: Not Found" />
        <h1>Tyler's not sure what you found.</h1>
        <p>You are on a page that does not exist anymore or never did. Tyler recommends that you<a href="https://www.tylervawser.com/">click here to find your way back</a>.</p>
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
