import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"
import { Container, Row, Col, Modal } from "react-bootstrap"
import "../styles/global.scss"
import TransitionLink from "gatsby-plugin-transition-link"
import AniLink from "gatsby-plugin-transition-link/AniLink"
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
import booksIcon from "../images/booksIcon.png"
import thingsIcon from "../images/thingsIcon.png"
import linksIcon from "../images/linksIcon.png"
import footerIMG from "../images/footer.png"
import footerIMG2 from "../images/footer@2x.png"
import Menu from "../components/menu"
import LogoFixedMobile from "../components/LogoFixedMobile"
import FooterBlue from "../components/Footer"
import { GatsbySeo } from "gatsby-plugin-next-seo"

const LinksArray = [
  {
    //icon: toolsIcon,
    title: "Profile links",
    items: [
      {
        link: "https://twitter.com/tvaw",
        subTitle: "Tyler's Twitter @tvaw",
        subText: " ",
      },
      {
        link: "https://www.quora.com/profile/Tyler-Vawser",
        subTitle: "Tyler on Quora",

        subText: " ",
      },
      {
        link: "https://yourstack.com/@Tvaw",
        subTitle: "Your Stack",

        subText: " ",
      },
      {
        link: "https://www.linkedin.com/in/tylervawser",
        subTitle: "Tyler's LinkedIn",

        subText: " ",
      },
      {
        link: "https://www.producthunt.com/@tvaw",
        subTitle: "Tyler on Product Hunt",

        subText: " ",
      },
      {
        link: "https://angel.co/u/tyler-vawser",
        subTitle: "Tyler's AngelList",

        subText: " ",
      },
      {
        link: "https://medium.com/@tvaw",
        subTitle: "Medium",
        subText: " ",
      },
    ],
  },
  {
    //icon: videosIcon,
    title: "Interviews & Quoted by",
    items: [
      {
        link: "https://copyhour.com/tyler-vawser-interview",

        subTitle:
          "How Tyler Vawser Quit His Job & Went Full-Time As A Marketing Consultant | CopyHour.com",
        subText: " ",
      },
      {
        link:
          "https://wistia.com/learn/showcase/sticker-mule-showcasing-your-product",
        subTitle:
          "Showcasing Your Product: How Sticker Mule Uses Video to Stand Out",
        subText: " ",
      },
      {
        link:
          "https://www.shopify.com/retail/the-power-of-retail-packaging-why-branded-bags-and-mailers-are-worth-the-investment",
        subTitle:
          "The Power of Retail Packaging: Why Branded Mailers Are Worth the Investment",
        subText: " ",
      },
      {
        link:
          "https://mailchimp.com/resources/how-sticker-mule-combines-e-commerce-and-email",

        subTitle: "How Sticker Mule Combines E-Commerce and Email",
        subText: " ",
      },
      {
        link:
          "https://www.fatherly.com/play/12-awesome-activities-to-do-with-your-kids-in-2016/",
        subTitle: "12 Awesome Activities To Do With Your Kids in 2016",
        subText: " ",
      },
      {
        link:
          "https://www.huffpost.com/entry/how-to-make-museums-fun-for-kids_b_8333862",
        subTitle:
          "A Museum Hacker on How to Make Any Museum Awesome For Kids | HuffPost Life",
        subText: " ",
      },
      {
        link:
          "https://okdork.com/interview-with-siggi-hilmarsson-of-siggis-icelandic-skyr-yogurt/",
        subTitle:
          "Interview with Siggi Hilmarsson of Siggi’s Icelandic Skyr Yogurt",

        subText: " ",
      },
      {
        link: "https://www.howitactuallyworks.com/",
        subTitle: "How It Actually Works, the newsletter",
        subText: " ",
      },

      {
        link: "https://cxl.com/blog/conversion-rate-optimization-principles/",
        subTitle:
          "9 Conversion Rate Optimization Principles to Get You Started",

        subText: " ",
      },
    ],
  },

  {
    //icon: travelIcon,
    title: "Content I've written",
    items: [
      {
        link: "https://okdork.com/the-samuel-l-jackson-marketing-hack/",
        subTitle: "The Samuel L. Jackson Email Marketing Hack",
        subText: " ",
      },
      {
        link: "https://www.stickermule.com/blog/author/tyler-vawser",
        subTitle: "Posts by Tyler Vawser | Sticker Mule",

        subText: " ",
      },
      {
        link: "https://buzzsumo.com/blog/5-ways-use-buzzsumo-grow-email-list/ ",
        subTitle: "5 Ways to Use Buzzsumo to Grow Your Email List",
        subText: " ",
      },
      {
        link: "https://sumo.com/stories/guide-to-using-heat-maps",
        subTitle: "Guide to Using Heat Maps | Sumo.com",
        subText: " ",
      },
    ],
  },
]

class Links extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      show: false,
    }

    this.handleClose = () => this.setState({ show: false })
    this.handleShow = () => this.setState({ show: true })
  }

  render() {
    return (
      <>
        <Layout location={this.props.location}>
          <GatsbySeo
            title="Tyler Vawser's Favorites"
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

          <LogoFixedMobile />
          <div>
            <Row>
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
                Links about Tyler Vawser
              </Col>
            </Row>
            <Row>
              <Col
                style={{
                  color: "var(--textNormal)",
                  transitionTimingFunction: `cubic-bezier(0.25, 0.1, 0.25, 1)`,
                  transition: `0.4s`,
                  textAlign: `center`,
                  margin: `auto`,
                  maxWidth: `90vw`,
                  padding: `10vh 10vw 0 10vw`,
                  fontSize: `calc(14px + .7vw)`,
                }}
                className="roboto w-medium"
              >
                Check them out here
              </Col>
            </Row>
            <Row>
              <Col
                style={{
                  color: "var(--textNormal)",
                  transitionTimingFunction: `cubic-bezier(0.25, 0.1, 0.25, 1)`,
                  transition: `0.4s`,
                  textAlign: `center`,
                  margin: `auto`,
                  maxWidth: `90vw`,
                  padding: `0 10vw 0 10vw`,
                  fontSize: `calc(10px + .7vw)`,
                }}
                className="roboto w-medium"
              >
                <img src={arrowIMG} alt="Arrow down"></img>
              </Col>
            </Row>
          </div>
          <Container
            fluid
            style={{
              background: "var(--gradient-background)",
              width: `110vw`,
              margin: `6vh -10vw 0 -10vw`,
            }}
          >
            <Row className="d-flex justify-content-center pb-5">
              <Col
                xs={{ span: 9 }}
                sm={{ span: 9 }}
                md={7}
                lg={7}
                xl={{ span: 6, offset: 1 }}
                className="mb-5 pb-5"
              >
                {LinksArray.map(linkSet => {
                  return (
                    <>
                      <Row className="d-flex align-items-baseline">
                        <span className="px-2 mt-4 wsans w-regular fav-title">
                          {linkSet.title}
                        </span>
                      </Row>
                      {linkSet.items.map(item => {
                        return (
                          <Row className="d-flex ml-2 ml-md-3 w-100 w-md-75">
                            <a
                              href={item.link}
                              target="_blank"
                              style={{ fontSize: `17px` }}
                              className="fancy-link-footer text-light  w-semibold mb-0 "
                            >
                              {item.subTitle}
                            </a>
                            <p
                              className=" text-light p-text w-100 w-md-75 pr-md-5"
                              style={{ fontSize: `17px` }}
                            >
                              {item.subText}
                            </p>
                          </Row>
                        )
                      })}
                    </>
                  )
                })}
              </Col>
            </Row>
          </Container>
        </Layout>
      </>
    )
  }
}

export default Links
