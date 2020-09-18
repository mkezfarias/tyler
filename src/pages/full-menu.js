import React from "react"
import { navigate } from "gatsby"

import Layout from "../components/layout"
import { Row, Col } from "react-bootstrap"
import "../styles/global.scss"

import AniLink from "gatsby-plugin-transition-link/AniLink"

import closeBTN from "../images/x.svg"
import Menu from "../components/menu"
import { GatsbySeo } from "gatsby-plugin-next-seo"
import { I18nProvider, LOCALES } from '../i18n';
import translate from '../i18n/messages/translateHelper';

class FullMenu extends React.Component {
  constructor(props) {
    super(props)
    this.handleCloseX = () => navigate("/")
    this.state = { locale: LOCALES.ENGLISH }
  }

  componentDidMount() {
    if (!!window.localStorage.getItem("language")) {
      this.setState({ locale: window.localStorage.getItem("language") })
    }
    else {
      const userLang = navigator.language.split('-')[0];
      if (userLang) {
        switch (navigator.language) {
          case 'es': this.setState({ locale: LOCALES.SPANISH }); break;
          case 'ja': this.setState({ locale: LOCALES.JAPANESE }); break;
          case 'en':
          default: this.setState({ locale: LOCALES.ENGLISH });
        }

        window.localStorage.setItem("language", this.state.locale)
      }
    }
  }
  
  render() {
    return (
      <I18nProvider locale={this.state.locale}>
      <Layout location={this.props.location}>
        <GatsbySeo
          title="Tyler Vawser's Menu"
          description="Tyler Vawser's favorite tools, books, things, and more."
          canonical="https://www.tylervawser.com/favorites"
          keywords="tylervawser,tyler vawser,favorite tools" // keywords list
          openGraph={{
            url: "https://www.tylervawser.com/favorites",
            title: "About Tyler Vawser",
            description:
              "Tyler Vawser's favorite tools, books, things, and more.",
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

        <Row
          id="padding-x"
          style={{
            color: "var(--textNormal)",
            transitionTimingFunction: `cubic-bezier(0.25, 0.1, 0.25, 1)`,
            transition: `0.4s`,
          }}
          className="wider ml-3 wsans w-medium h2 pb-0 mb-0 line-height-1 mt-0"
        >
          <Col
            lg={5}
            className="w-semibold "
            style={{ fontSize: `calc(18px + 5vw)` }}
          >
            { translate('waitingChoice') }{" "}
          </Col>

          <Col
            lg={7}
            style={{
              background: "var(--gradient-background)",
              position: `fixed`,
              top: `0`,
              bottom: `0`,
              right: `0`,
            }}
          >
            <Menu handleClose={this.handleClose} />
          </Col>
          <AniLink
            style={{
              color: "var(--textTitle)",
            }}
            to="/"
            cover
            bg="var(--gradient-background)"
            direction="right"
            top="entry"
            duration={1}
            entryOffset={800}
          >
            <img
              src={closeBTN}
              alt="Close Button"
              className="close-button"
            ></img>
          </AniLink>
        </Row>
      </Layout>
      </I18nProvider>
    )
  }
}

export default FullMenu
