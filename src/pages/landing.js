import React, { useEffect } from "react"
import { scroller } from "react-scroll"
import { Link } from "gatsby"
import Aos from "aos"
import "aos/dist/aos.css"

import Footer from "../components/footer"

import lunaLogo from "../assets/luna_logo.jpg"
import arrowDown from "../assets/arrow-down.svg"

import tomoPic from "../assets/tomo.png"
import ignacyPic from "../assets/ignacy.png"
import oskarPic from "../assets/oskar.png"
import mateuszPic from "../assets/mateusz.png"
import olekPic from "../assets/olek.png"
import konradPic from "../assets/konrad.png"
import naukowaWioska from "../assets/naukowawioska.png"

import "../styles/landing.scss"
import PageTransition from "../components/page-transition"
import Header from "../components/header"

const scrollToAboutUs = () => {
  scroller.scrollTo("about-us", {
    duration: 750,
    delay: 0,
    smooth: "easeInOutQuart",
  })
}

export default function Landing() {
  useEffect(() => {
    Aos.init({ duration: 500 })
  })
  return (
    <div className="landing-page">
      <Header isLanding />
      <PageTransition
        duration={500}
        delay={300}
        releasePointerEvents={600}
      ></PageTransition>
      <div className="first-segment" name="top">
        <div className="landing-left">
          <div
            className="landing-left-heading"
            data-aos="fade-right"
            data-aos-delay="500"
            data-aos-duration="750"
          >
            LUNA <br />
            BIOFEEDBACK
          </div>
          <div
            className="landing-left-desc"
            data-aos="fade-right"
            data-aos-delay="600"
            data-aos-duration="750"
          >
            Luna Biofeedback was designed to create ground-breaking technology
            that will aid in making your daily life slightly more effortless.
          </div>
          <div
            data-aos="fade-right"
            data-aos-delay="700"
            data-aos-duration="750"
          >
            <Link to="/biofeedback/" className="biofeedback_button">
              {"<"} GO TO PAGE
            </Link>
          </div>
        </div>
        <div className="landing-middle" onClick={scrollToAboutUs}>
          <img
            src={lunaLogo}
            alt="luna technology society"
            className="luna-logo"
            data-aos="fade-in"
            data-aos-delay="1500"
            data-aos-duration="750"
          ></img>
          <img
            src={arrowDown}
            alt="v"
            className="arrow-down"
            data-aos="fade-in"
            data-aos-delay="1900"
            data-aos-duration="750"
            data-aos-anchor-placement="bottom-bottom"
          ></img>
        </div>
        <div className="landing-right">
          <div
            className="landing-right-heading"
            data-aos="fade-left"
            data-aos-delay="800"
            data-aos-duration="750"
          >
            LUNA SPACE
            <br />
            DEVELOPMENT
          </div>
          <div
            className="landing-right-desc"
            data-aos="fade-left"
            data-aos-delay="900"
            data-aos-duration="750"
          >
            Luna space development was established by a group of individuals who
            share the same vision and have a keen interest in the space
            industry.
          </div>
          <div
            data-aos="fade-left"
            data-aos-delay="1000"
            data-aos-duration="750"
          >
            <Link to="/space-development/" className="spacedev_button">
              GO TO PAGE {">"}
            </Link>
          </div>
        </div>
      </div>
      <div className="about-us-segment" name="about-us">
        <div
          className="about-us-header"
          data-aos="fade-right"
          data-aos-duration="750"
        >
          ABOUT US
        </div>
        <div
          className="about-us-desc"
          data-aos="fade-left"
          data-aos-delay="150"
          data-aos-duration="750"
        >
          Luna is a community where we exchange ideas and feed into our
          passions. We are a team of Polish students that are currently working
          on the development of leading technologies including rocket science
          and biofeedback.
        </div>
      </div>
      <div className="team-segment">
        <div className="team-header" data-aos="zoom-in">
          OUR TEAM
        </div>
        <div className="team-members-container">
          <div className="heading" data-aos="zoom-in">
            MANAGEMENT
          </div>
          <div className="each-section managment-container">
            <div className="each-member" data-aos="zoom-in" data-aos-delay="0">
              <div className="member-picture">
                <img src={tomoPic} alt="tomo profile pic"></img>
              </div>
              <div className="member-name">Tomasz Mróz</div>
              <div className="member-role">CEO | Space Development Supervisor</div>
            </div>
            <div
              className="each-member"
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              <div className="member-picture">
                <img src={ignacyPic} alt="tomo profile pic"></img>
              </div>
              <div className="member-name">Ignacy Strojny</div>
              <div className="member-role">CFO | Space Development</div>
            </div>
            <div
              className="each-member"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <div className="member-picture">
                <img src={konradPic} alt="tomo profile pic"></img>
              </div>
              <div className="member-name">Konrad Mędoń</div>
              <div className="member-role">COO | Space Development</div>
            </div>
            <div
              className="each-member"
              data-aos="zoom-in"
              data-aos-delay="300"
            >
              <div className="member-picture">
                <img src={olekPic} alt="tomo profile pic"></img>
              </div>
              <div className="member-name">Aleksander Pająk</div>
              <div className="member-role">MEO | Space Development</div>
            </div>
          </div>
          <div className="heading" data-aos="zoom-in">
            OTHER MEMBERS
          </div>
          <div className="each-section others-container">
            <div className="each-member" data-aos="zoom-in" data-aos-delay="0">
              {/* <div className="member-picture">
                <img src={mateuszPic} alt="tomo profile pic"></img>
              </div> */}
              <div className="member-name">Mateusz Szewczyk</div>
              <div className="member-role">BioFeedback Supervisor</div>
            </div>
            <div
              className="each-member"
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              {/* <div className="member-picture">
                <img src={oskarPic} alt="tomo profile pic"></img>
              </div> */}
              <div className="member-name">Oskar Mróz</div>
              <div className="member-role">Web Developer | IT</div>
            </div>
            <div
              className="each-member"
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              {/* <div className="member-picture">
                <img src={oskarPic} alt="tomo profile pic"></img>
              </div> */}
              <div className="member-name">Bartłomiej Mróz</div>
              <div className="member-role">Electronics | IT</div>
            </div>
            <div
              className="each-member"
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              {/* <div className="member-picture">
                <img src={oskarPic} alt="tomo profile pic"></img>
              </div> */}
              <div className="member-name">Wojciech Damian</div>
              <div className="member-role">BioFeedback</div>
            </div>
            <div
              className="each-member"
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              {/* <div className="member-picture">
                <img src={oskarPic} alt="tomo profile pic"></img>
              </div> */}
              <div className="member-name">Zuzanna Mieczkowska</div>
              <div className="member-role">Social MediaI | PR</div>
            </div>
          </div>
        </div>
      </div>
      <div className="our-partners-segment">
        <div className="our-partners-header" data-aos="zoom-in">
          OUR PARTNERS
        </div>
        <a className="each-partner" data-aos="zoom-in" href="http://scienceville.pl/">
          <img src={naukowaWioska} alt="Naukowa Wioska"/>
        </a>
      </div>
      <Footer isLanding />
    </div>
  )
}
