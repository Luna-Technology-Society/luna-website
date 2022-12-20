import React, { useEffect } from "react"
import { scroller } from "react-scroll"
import { Link } from "gatsby"
import Aos from "aos"
import "aos/dist/aos.css"

// components
import Footer from "../components/footer"
import Header from "../components/header"
import PageTransition from "../components/page-transition"

// images
import tomoPic from "../assets/profile_pics/tomo.png"
import ignacyPic from "../assets/profile_pics/ignacy.png"
import olekPic from "../assets/profile_pics/olek.png"
import konradPic from "../assets/profile_pics/konrad.png"
import naukowaWioska from "../assets/landing/naukowawioska.png"
import arrowDown from "../assets/svg_icons/arrow-down.svg"

// stylesheet
import "../styles/landing.scss"

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
      {/* =============== LANDING SCREEN =============== */}
      <div className="first-segment" name="top">
        <div className="linear-bg-dim" />
        <img
          src={arrowDown}
          alt="v"
          className="arrow-down"
          data-aos="fade-down"
          data-aos-delay="1000"
          data-aos-duration="750"
          data-aos-anchor-placement="bottom-bottom"
          onClick={scrollToAboutUs}
        />
        <div className="landing-left">
          <div
            className="landing-left-heading"
            data-aos="fade-right"
            data-aos-delay="0"
            data-aos-duration="750"
          >
            LUNA <br />
            BIOFEEDBACK
          </div>
          <div
            className="landing-left-desc"
            data-aos="fade-right"
            data-aos-delay="100"
            data-aos-duration="750"
          >
            Luna Biofeedback was designed to create ground-breaking technology
            that will aid in making your daily life slightly more effortless.
          </div>
          <div
            data-aos="fade-right"
            data-aos-delay="200"
            data-aos-duration="750"
          >
            <Link to="/biofeedback/" className="biofeedback_button">
              GO TO PAGE
            </Link>
          </div>
        </div>

        <div className="landing-middle">
          <div
            className="landing-middle-heading"
            data-aos="zoom-in"
            data-aos-delay="300"
            data-aos-duration="750"
          >
            LUNA
            <br />
            EDUCATION
          </div>
          <div
            className="landing-middle-desc"
            data-aos="zoom-in"
            data-aos-delay="400"
            data-aos-duration="750"
          >
            Inspiring young minds to uncover the wonders of science &
            technology. We host workshops and educational campaigns for schools
            and businesses in Poland.
          </div>
          <div data-aos="zoom-in" data-aos-delay="500" data-aos-duration="750">
            <Link to="/education/" className="education_button">
              GO TO PAGE
            </Link>
          </div>
        </div>

        <div className="landing-right">
          <div
            className="landing-right-heading"
            data-aos="fade-left"
            data-aos-delay="600"
            data-aos-duration="750"
          >
            LUNA SPACE
            <br />
            DEVELOPMENT
          </div>
          <div
            className="landing-right-desc"
            data-aos="fade-left"
            data-aos-delay="700"
            data-aos-duration="750"
          >
            Luna space development was established by a group of individuals who
            share the same vision and have a keen interest in the space
            industry.
          </div>
          <div
            data-aos="fade-left"
            data-aos-delay="800"
            data-aos-duration="750"
          >
            <Link to="/space-development/" className="spacedev_button">
              GO TO PAGE
            </Link>
          </div>
        </div>
      </div>
      {/* =============== ABOUT US =============== */}
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
      {/* =============== TEAM S =============== */}
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
              <div className="member-role">
                CEO | Space Development Supervisor
              </div>
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
        <a
          className="each-partner"
          data-aos="zoom-in"
          href="http://scienceville.pl/"
        >
          <img src={naukowaWioska} alt="Naukowa Wioska" />
        </a>
      </div>
      <Footer isLanding />
    </div>
  )
}
