import React, { useEffect } from "react"
import { scroller } from "react-scroll"
import Aos from "aos"
import "aos/dist/aos.css"

// components
import PageTransition from "../components/page-transition"
import Footer from "../components/footer"
import Header from "../components/header"

// images
import brain from "../assets/biofeedback/brain.png"
import facebook from "../assets/svg_icons/facebook-light.svg"
import instagram from "../assets/svg_icons/instagram-light.svg"
import twitter from "../assets/svg_icons/twitter-light.svg"
import youtube from "../assets/svg_icons/youtube-light.svg"

// stylesheet
import "../styles/biofeedback.scss"

const scrollToAboutProject = () => {
  scroller.scrollTo("about-project-segment", {
    duration: 500,
    delay: 0,
    smooth: "easeInOutQuart",
  })
}

export default function MisingPage() {
  useEffect(() => {
    Aos.init({ duration: 500 })
  })
  return (
    <div className="biofeedback-page">
      <PageTransition
        duration={500}
        delay={300}
        releasePointerEvents={600}
      ></PageTransition>
      <Header isBiofeedback />
      <div className="first-segment">
        <div className="first-segment-container">
          <div
            className="biofeedback-header"
            data-aos="fade-right"
            data-aos-delay="500"
            data-aos-duration="750"
          >
            LUNA BIOFEEDBACK
          </div>
          <div
            className="biofeedback-desc"
            data-aos="fade-right"
            data-aos-delay="600"
            data-aos-duration="750"
          >
            “Brainpower is the bridge to the future; it is what transports you
            from wishful thinking to willful doing.”
            <br /> - Dilip Mukerjea
          </div>
          <div
            data-aos="fade-right"
            data-aos-delay="700"
            data-aos-duration="750"
          >
            <div
              role="button"
              tabIndex={0}
              className="biofeedback-button"
              onClick={scrollToAboutProject}
              onKeyDown={scrollToAboutProject}
            >
              READ MORE
            </div>
          </div>
        </div>
      </div>
      <div className="about-project-segment">
        <div className="about-project-container">
          <div className="about-project-left">
            <img
              src={brain}
              alt="asronout"
              data-aos="fade-right"
              data-aos-duration="750"
            ></img>
          </div>
          <div className="about-project-right">
            <div
              className="about-project-header"
              data-aos="fade-left"
              data-aos-duration="750"
              data-aos-delay="150"
            >
              ABOUT THE PROJECT
            </div>
            <div
              className="about-project-desc"
              data-aos="fade-left"
              data-aos-duration="750"
              data-aos-delay="250"
            >
              Our objective is to design compact devices capable of collecting
              definitive signals from human organisms and then interpreting the
              data for a large range of applications. This project is very
              versatile, so we will be able to work on devices that can be used
              for entertainment and even cerebral development.
            </div>
            <div
              className="about-project-follow-us"
              data-aos="fade-left"
              data-aos-duration="750"
              data-aos-delay="350"
            >
              <span>Follow us: </span>{" "}
              <div className="media-icons">
                <a
                  href="https://www.facebook.com/lunatechnologysociety"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img className="each-icon" src={facebook} alt="facebook" />
                </a>
                <a
                  href="https://www.instagram.com/lbflunabiofeedback/?hl=en"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img className="each-icon" src={instagram} alt="instagram" />
                </a>
                <a
                  href="https://twitter.com/society_luna"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img className="each-icon" src={twitter} alt="twitter" />
                </a>
                <a
                  href="https://www.youtube.com/channel/UCFuCQAG9OiW6nleLCV2zO9Q"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img className="each-icon" src={youtube} alt="youtube" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="next-segment">
        <div className="comming-soon" data-aos="zoom-in">
          MORE INFO COMMING SOON...
        </div>
      </div>
      <Footer isBiofeedback />
    </div>
  )
}
