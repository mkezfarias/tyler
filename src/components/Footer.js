import React from "react"

import AniLink from "gatsby-plugin-transition-link/AniLink"
import logoWhite from "../images/logo-white.svg"
import { Row, Container } from "react-bootstrap"

const FooterBlue = () => {
  return (
    <>
      <Container
        fluid
        className=""
        style={{
          backgroundColor: `var(--skyblue)`,
          position: "absolute",
          bottom: `0`,
          right: `0`,
          left: `0`,
          margin: `0 0 0 0`,
        }}
      >
        <Row className="d-flex justify-content-around flex-column flex-md-row">
          <div>
            <AniLink
              style={{
                color: "var(--textTitle)",
              }}
              to="/"
              cover
              bg="var(--gradient-background)"
              direction="left"
              top="entry"
              duration={1}
              entryOffset={800}
              className="py-5"
            >
              <img src={logoWhite} alt="Tyler Vawser" className="pl-5" 
                style={{
                  height: "100%",
                }}
              />
            </AniLink>
          </div>
          <div className="d-flex justify-content-start flex-column flex-md-row">
            <div className="text-light roboto w-medium d-flex flex-column justify-content-end border-footer px-2 px-md-4">
              <div className="footer-title py-0 my-0 text-left text-md-right px-5 px-md-1">
                Get in touch
              </div>
              <div className="d-flex text-right px-5 px-md-1">
                <div className="footer-links">
                  <AniLink
                    style={{
                      color: "var(--textTitle)",
                    }}
                    cover
                    bg="var(--gradient-background)"
                    direction="right"
                    top="entry"
                    duration={1}
                    entryOffset={800}
                    to="/connect/"
                    className="text-light fancy-link-footer"
                  >
                    Set up a Call
                  </AniLink>
                </div>
                <div className="px-2 footer-links">/</div>
                <div className="footer-links">
                  <a
                    href="https://twitter.com/tvaw"
                    target="_blank"
                    className="text-light fancy-link-footer"
                  >
                    Twitter
                  </a>
                </div>
                <div className="px-2 footer-links">/</div>
                <div className="footer-links">
                  <a
                    href="mailto:tvawser@gmail.com?subject=Saw%20your%20website%20lets%20chat"
                    className="text-light fancy-link-footer"
                    target="_blank"
                  >
                    Email
                  </a>
                </div>
                <div className="px-2 footer-links">/</div>
                <div className="footer-links">
                  <a
                    href="https://www.linkedin.com/in/tylervawser/"
                    className="text-light fancy-link-footer"
                    target="_blank"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
            <div className="text-light roboto w-medium d-flex flex-column justify-content-end border-footer px-5 px-md-4 ml-2">
              <div className="footer-title py-0 my-0 text-left text-md-right">
                Learn More
              </div>
              <div className="d-flex text-right">
                <div className="footer-links">
                  <AniLink
                    style={{
                      color: "var(--textTitle)",
                    }}
                    cover
                    bg="var(--gradient-background)"
                    direction="right"
                    top="entry"
                    duration={1}
                    entryOffset={800}
                    to="/about/"
                    className="text-light fancy-link-footer"
                  >
                    About
                  </AniLink>
                </div>
                <div className="px-2 footer-links">/</div>
                <div className="footer-links">
                  <AniLink
                    style={{
                      color: "var(--textTitle)",
                    }}
                    cover
                    bg="var(--gradient-background)"
                    direction="right"
                    top="entry"
                    duration={1}
                    entryOffset={800}
                    to="/blog/"
                    className="text-light fancy-link-footer"
                  >
                    Posts
                  </AniLink>
                </div>
                <div className="px-2 footer-links">/</div>
                <div className="footer-links">
                  <AniLink
                    style={{
                      color: "var(--textTitle)",
                    }}
                    cover
                    bg="var(--gradient-background)"
                    direction="right"
                    top="entry"
                    duration={1}
                    entryOffset={800}
                    className="text-light fancy-link-footer"
                    to="/favorites/"
                    className="text-light fancy-link-footer"
                  >
                    Favorites
                  </AniLink>
                </div>
                <div className="px-2 footer-links">/</div>
                <div className="footer-links">
                  <AniLink
                    style={{
                      color: "var(--textTitle)",
                    }}
                    cover
                    bg="var(--gradient-background)"
                    direction="right"
                    top="entry"
                    duration={1}
                    entryOffset={800}
                    to="/links/"
                    className="text-light fancy-link-footer"
                  >
                    Links
                  </AniLink>
                </div>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </>
  )
}

export default FooterBlue
