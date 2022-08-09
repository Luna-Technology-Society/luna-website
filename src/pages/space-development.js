import React, { useEffect } from "react"
import Footer from "../components/footer"
import Header from "../components/header"
import PageTransition from "../components/page-transition"
import Aos from "aos"
import "aos/dist/aos.css"

import "../styles/space-development.scss"

import astronout from "../assets/astronout.png"
import facebook from "../assets/facebook-light.svg"
import instagram from "../assets/instagram-light.svg"
import twitter from "../assets/twitter-light.svg"
import youtube from "../assets/youtube-light.svg"
import mantis from "../assets/mantis.jpg"
import prototype from "../assets/prototype.jpg"
import { scroller } from "react-scroll"

export default function SpaceDevelopment() {
  const scrollToAboutProject = () => {
    scroller.scrollTo("about-project-segment", {
      duration: 500,
      delay: 0,
      smooth: "easeInOutQuart",
    })
  }
  useEffect(() => {
    Aos.init({ duration: 500 })
  })
  return (
    <div className="space-dev-page">
      <Header isSpaceDev />
      <PageTransition
        duration={500}
        delay={300}
        releasePointerEvents={600}
      ></PageTransition>
      <div className="first-segment top">
        <div className="first-segment-container">
          <div
            className="space-dev-header"
            data-aos="fade-right"
            data-aos-delay="500"
            data-aos-duration="750"
          >
            Luna Space Development
          </div>
          <div
            className="space-dev-desc"
            data-aos="fade-right"
            data-aos-delay="600"
            data-aos-duration="750"
          >
            “I think it is possible for ordinary people to choose to be
            extraordinary.” <br /> - Elon Musk
          </div>
          <div
            data-aos="fade-right"
            data-aos-delay="700"
            data-aos-duration="750"
          >
            <div className="space-dev-button" onClick={scrollToAboutProject}>
              READ MORE
            </div>
          </div>
        </div>
      </div>
      <div className="about-project-segment">
        <div className="about-project-container">
          <div className="about-project-left">
            <img
              src={astronout}
              alt="asronout"
              data-aos="fade-right"
              data-aos-delay="50"
              data-aos-duration="750"
            />
          </div>
          <div className="about-project-right">
            <div
              className="about-project-header"
              data-aos="fade-left"
              data-aos-delay="350"
              data-aos-duration="750"
            >
              ABOUT THE PROJECT
            </div>
            <div
              className="about-project-desc"
              data-aos="fade-left"
              data-aos-delay="400"
              data-aos-duration="750"
            >
              Luna space development was formed by a group of individuals with
              the same vision for defining, innovating and developing new ways
              to inspire upcoming generations with a mutual passion for space
              epxloration. We are currently working on constructing a hybrid
              propulsion system to launch our improved “mantis” rocket.
            </div>
            <div
              className="about-project-follow-us"
              data-aos="fade-left"
              data-aos-delay="450"
              data-aos-duration="750"
            >
              <span>Follow us: </span>{" "}
              <div className="media-icons">
                <a
                  href="https://www.facebook.com/LunaSpaceDevelopment"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img className="each-icon" src={facebook} alt="facebook" />
                </a>
                <a
                  href="https://www.instagram.com/lsdlunaspacedevelopment/?hl=en"
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
      <div className="project-mantis-segment">
        <div className="mantis-top">
          <div
            className="project-mantis-header"
            data-aos="zoom-in"
            data-aos-duration="500"
          >
            PROJECT MANTIS
          </div>
        </div>
        <div className="mantis-bottom">
          <div
            className="project-mantis-desc"
            data-aos="fade-right"
            data-aos-duration="750"
          >
            Project "Mantis" is our teams current undertaking. The objective at
            hand is to establish a feature that will be able to surpass the
            speed of sound. We intend to reach this goal in 2023.
          </div>
          <img
            className="mantis-solidworks"
            src={mantis}
            alt="#"
            data-aos="fade-left"
            data-aos-duration="750"
            data-aos-delay="150"
            data-aos-anchor-placement="center-bottom"
          ></img>
        </div>
      </div>
      <div className="prototype-segment">
        <div className="prototype-top">
          <div
            className="prototype-header"
            data-aos="zoom-in"
            data-aos-duration="500"
          >
            PROTOTYPE
          </div>
        </div>
        <div className="prototype-bottom">
          <img
            className="prototype-solidworks"
            src={prototype}
            alt="#"
            data-aos="fade-right"
            data-aos-duration="750"
            data-aos-anchor-placement="center-bottom"
          ></img>
          <div
            className="prototype-desc"
            data-aos="fade-left"
            data-aos-duration="750"
            data-aos-delay="150"
          >
            "Prototype" - the first rocket that we made. It is a hybrid-engined
            rocket. We used this prototype to gather the experience required for
            the Mantis project. It reached a maximum height of 168meters <br />
            <a
              href="https://www.youtube.com/watch?v=l3ysM6AlHDk"
              target="_blank"
              rel="noreferrer"
            >
              Launch Video
            </a>
          </div>
        </div>
      </div>
      <Footer isSpaceDev />
    </div>
  )
}
