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
import footerIMG from "../images/footer.png"
import footerIMG2 from "../images/footer@2x.png"
import Menu from "../components/menu"
import LogoFixedMobile from "../components/LogoFixedMobile"
import FooterBlue from "../components/Footer"
import { GatsbySeo } from "gatsby-plugin-next-seo"

const favoritesArray = [
  {
    icon: toolsIcon,
    title: "Favorite tools",
    items: [
      {
        link: "https://www.alfredapp.com/",
        subTitle: "Alfred App",
        subText:
          "The single most powerful app on my computer. With the powerpack (paid) you can create workflows, hotkeys, text expansion, etc. It’s very powerful but requires some time and deep dives to take full advantage.",
      },
      {
        link: "https://bear.app/",
        subTitle: "Bear App",
        subText:
          "I wanted something much faster than Evernote (RIP) & has more function/style/organization than TextEdit. Bear is exactly that. It pairs nicely with my Alfred workflows.",
      },
      {
        link: "https://www.gmailtabs.com/",
        subTitle: "Gmail Tabs",
        subText:
          "The budget (aka free) version of Superhuman email. I use this to organize my inbox with tabs that create saved searches.",
      },
      {
        link: "https://www.overdrive.com/",
        subTitle: "Overdrive",
        subText:
          "Audible for free (via libraries). An incredible resource that allows you to download audio books and ebooks immediately via a local library.",
      },
      {
        link: "https://www.mowglii.com/itsycal/",
        subTitle: "ItsyCal",
        subText:
          " I spend 50% to 85% of my day on Zoom calls. I hate having to open a browser to view my calendar mid-call. Itsycal makes it easy to see your schedule and with a hotkey it opens automatically over any windows you have. ",
      },
      {
        link: "https://www.tynsoe.org/v2/geektool/",
        subTitle: "GeekTool",
        subText:
          "90% aesthetics, 10% function. This is a nice tool to make your desktop custom by adding scripts. For example, I added the time and date to the center of my menu bar (just below my webcam) so I don’t have to take my eyes away from a video call.",
      },
      {
        link: "https://www.macbartender.com/",
        subTitle: "Bartender",
        subText:
          "A simple app that hides all of the menu bar icons I have (wifi, battery, etc). I only have two menu bar icons active and 15 hidden. Makes the desktop cleaner.",
      },
    ],
  },
  {
    icon: videosIcon,
    title: "Favorite books",
    items: [
      {
        link:
          "https://bookshop.org/books/the-brothers-karamazov-9781911091059/9780374528379",
        subTitle: "Brothers Karamazov",
        subText:
          "A book about life itself. Beautiful and tragic it lays bare the ideas and decisions we each wrestle with about who we will be, what we’ll believe, and who we will love.",
      },
      {
        link:
          "https://bookshop.org/books/fathers-and-sons-9781627651486/9780199536047",
        subTitle: "Fathers & Sons",
        subText:
          "More idealistic than Brothers K, it’s a novel that shows how young and old view the world differently. A book that helped me understand that the problems of the present are not so different than the past.",
      },
      {
        link:
          "https://www.amazon.com/Whats-Best-Next-Gospel-Transforms/dp/0310533988",
        subTitle: "What’s Best Next",
        subText:
          "A productivity book that is half theology and half tactics. If nothing else, it has helped me ask the most important question during my day, “What is best next?” ",
      },
      {
        link:
          "https://bookshop.org/books/the-wind-up-bird-chronicle/9780679775430",
        subTitle: "The Wind Up Bird Chronicle",
        subText:
          "Murakami is one of my favorite authors because his writing dives deep into the characters and how they think. Despite a wandering storyline, Chronicle (which is really 3 books in 1)  mirrors real life. Like many Murakami books, it doesn't all make sense (which seems like life to me).",
      },
      {
        link:
          "https://bookshop.org/books/the-way-of-the-superior-man-a-spiritual-guide-to-mastering-the-challenges-of-women-work-and-sexual-desire-20th-anniversary-edition-9781622038329/9781622038329",
        subTitle: "Way of the Superior Man",
        subText:
          "I agree 100% with 20% of this book. The early chapters about life, finding your edge, dealing with fear, and living from your source are some of the most inspiring pages I’ve read. Highly recommend Part 1 but skip Part 2 and Part 3.",
      },
      {
        link: "https://www.reinventingorganizations.com/",
        subTitle: "Reinventing Organizations",
        subText:
          "An excellent book for anyone that wants to really dig into what is possible in business: trusting employees, letting those closest to the work make decisions, and rejecting traditional org models. The result = meaningful work and effective teams.",
      },
      {
        link:
          "https://bookshop.org/books/superhuman-social-skills-a-guide-to-being-likeable-winning-friends-and-building-your-social-circle/9781515179870",
        subTitle: "Superhuman Social Skills",
        subText:
          "Tynan is an exceptional writer. His succinct, down to earth style never gets stuck in research or having to repeatedly prove his points. This book makes my Favorites list for its advice and the reminder that our ability to connect with people and build friendships is a skill like any other.",
      },
      {
        link: "https://bookshop.org/books/the-great-bridge/9780671457112",
        subTitle: "The Great Bridge",
        subText:
          "An exceptional book about New York, Brooklyn and the bridge that connects them. It’s a historical book, but is compelling, never slow and shows that great things are possible with resilience.",
      },
    ],
  },

  {
    icon: travelIcon,
    title: "Favorite things",
    items: [
      {
        link: "https://www.tombihn.com/products/aeronaut-45",
        subTitle: "Tom Bihn - Aeronaut 45 Bag",
        subText:
          "An excellent bag for overnight trips that are 2 to 10 days long. Noah Kagan got this for me in 2013 and I’ve used it for every domestic and international trip since. Has a hidden built in backpack as well.",
      },
      {
        link: "https://www.baabuk.com/",
        subTitle: "Baabuk Shoes",
        subText:
          "Wool sneakers and slippers that look great and weigh nothing. It’s European version of all birds, which means it looks much better and costs more. ",
      },
      {
        link: "https://mylesapparel.com/collections/momentum-short",
        subTitle: "Myles Momentum Shorts",
        subText:
          "The best shorts I’ve ever worn. Comfortable and cool they work great for summer lounging or year round runs.",
      },
      {
        link:
          "https://olukai.com/products/ohana-mens-beach-sandals-dark-java-ray",
        subTitle: "Olukai ‘Ohana Sandals",
        subText:
          "Comfortable, durable and as stylish as flip-flops can be. I’ve worn two pairs over the last 6 years.",
      },
      {
        link: "https://buy.garmin.com/en-US/US/p/602068",
        subTitle: "Garmin vivoactive 3 watchm",
        subText:
          "I hate the learning curve for Garmin’s eco-system, but got used it to after a couple of months. This has become a favorite item and being able to leave my phone at home while still having GPS and music on a run has been helpful.",
      },
      {
        link: "https://www.youtube.com/watch?v=0TjLYgN3tEg",
        subTitle: "Chrome Pike Backpack",
        subText:
          "A great EDC (every day carrier) that is versatile and has some cool access and pockets. (Link is a video because Chrome doesn't offer the grey color anymore.)",
      },
      {
        link: "https://tommyjohn.com/collections/mens",
        subTitle: "Tommy John Undershirts and Underwear",
        subText:
          "Incredibly comfortable. I haven't bought anything else since 2014.",
      },
      {
        link: "https://republicwireless.com/",
        subTitle: "Republic Wireless",
        subText:
          "In 2016 I reduced my phone bill from ~$150 a month to $45 with Republic Wireless. It's been an excellent service that is similar to Google Fi, but cheaper.",
      },
    ],
  },
  {
    icon: podcastsIcon,
    title: "Favorite links",
    items: [
      {
        link:
          "https://elemental.medium.com/extreme-athleticism-is-the-new-midlife-crisis-d87199a18bed",
        subTitle: "Extreme Athleticism Is the New Midlife Crisis",
        subText:
          " “...a fear that the weaknesses that have dogged you are not just temporary challenges to cope with, but a permanent part of who you are.” ",
      },
      {
        link:
          "https://medium.com/@thejakers/raising-entrepreneurs-26be9abf3c52",
        subTitle: "Raising Entrepreneurs",
        subText:
          " “Part of parenting is being able to receive feedback, learn from it, and put it those lessons into practice, no matter what form it comes in.” ",
      },
      {
        link: "https://www.financialsamurai.com/",
        subTitle: "Financial Samurai",
        subText:
          " “dig deep, no matter what, and have an unwavering focus to keep on going despite all the worry.” ",
      },
      {
        link: "https://tynan.com/lovework",
        subTitle: "Love Work",
        subText:
          " “Work is a skill. Like any skill, you'll enjoy it more if you are good at it. And this is how you get good at it-- you do it a lot, you dive deep into it, and you create a positive attitude around it.” ",
      },
    ],
  },
]

class Favorites extends React.Component {
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
            canonical="https://www.tylervawser.com/"
          keywords="tylervawser,tyler vawser,favorite tools" // keywords list
          openGraph={{
            url: "https://www.tylervawser.com/about",
            title: "About Tyler Vawser",
            description: "Tyler Vawser creates connections with people and creates growth in companies.",
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
          {/* <SEO
            title="Tyler Vawser"
            keywords={[`blog`, `Tyler Vawser`, `Tvawser`, `react`]}
          /> */}
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
                Tyler wants to share some of his favorite resources{" "}
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
                {favoritesArray.map(favoriteSet => {
                  return (
                    <>
                      <Row className="d-flex align-items-baseline">
                        <img
                          src={favoriteSet.icon}
                          alt={favoriteSet.title}
                        ></img>
                        <span className="px-2 mt-4 wsans w-regular fav-title">
                          {favoriteSet.title}
                        </span>
                      </Row>
                      {favoriteSet.items.map(item => {
                        return (
                          <Row className="d-flex ml-2 ml-md-5 w-100 w-md-75">
                            <Link to={item.link} target="_blank">
                              <p className=" text-light  w-semibold mb-0 ">
                                {" "}
                                {item.subTitle}{" "}
                              </p>
                              <p
                                className=" text-light p-text w-100 w-md-75"
                                style={{ fontSize: `14px` }}
                              >
                                {item.subText}
                              </p>
                            </Link>
                          </Row>
                        )
                      })}
                    </>
                  )
                })}
              </Col>
            </Row>
          </Container>

          <FooterBlue />
        </Layout>
      </>
    )
  }
}

export default Favorites
