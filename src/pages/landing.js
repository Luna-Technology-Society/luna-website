import React, { useEffect } from "react"
import { scroller } from "react-scroll"
import { Link } from "gatsby"
import Aos from "aos"
import "aos/dist/aos.css"

// components
import Footer from "../components/footer"
import Header from "../components/header"
import PageTransition from "../components/page-transition"

//images
import naukowaWioska from "../assets/landing/naukowawioska.png"
import arrowDown from "../assets/svg_icons/arrow-down.svg"

// stylesheet
import "../styles/landing.scss"

// data
import { managmentMemebers, otherMembers } from "../static_data/members"

export default function Landing() {
  useEffect(() => {
    Aos.init({ duration: 500 })
  })

  /**
   * When triggered will animate the screen to glide to the about-us section.
   */
  const scrollToAboutUs = () => {
    scroller.scrollTo("about-us", {
      duration: 750,
      delay: 0,
      smooth: "easeInOutQuart",
    })
  }

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
        <div
          role="button"
          tabIndex={0}
          onClick={scrollToAboutUs}
          onKeyDown={scrollToAboutUs}
        >
          <img
            src={arrowDown}
            alt="v"
            className="arrow-down"
            data-aos="fade-down"
            data-aos-delay="1000"
            data-aos-duration="750"
            data-aos-anchor-placement="bottom-bottom"
          />
        </div>

        <div className="landing-left">
          <div
            className="landing-left-heading"
            data-aos="fade-right"
            data-aos-delay="0"
            data-aos-duration="750"
          >
            <br/>
            JOIN US
          </div>
          <div
            className="landing-left-desc"
            data-aos="fade-right"
            data-aos-delay="100"
            data-aos-duration="750"
          >
            Luna is currently looking for both temporary volunteers and long-term members. Check out the join us page for more information.
            <br/>
            <br/>
          </div>
          <div
            data-aos="fade-right"
            data-aos-delay="200"
            data-aos-duration="750"
          >
            <Link to="/joinus/" className="biofeedback_button">
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
      {/* =============== TEAMS =============== */}
      <div className="team-segment">
        <div className="team-header" data-aos="zoom-in">
          OUR TEAM
        </div>
        <div className="team-members-container">
          <div className="heading" data-aos="zoom-in">
            MANAGEMENT
          </div>
          <div className="each-section managment-container">
            {managmentMemebers.map((member, index) => (
              <div
                className="each-member"
                data-aos="zoom-in"
                data-aos-delay={50 * index}
                key={index}
              >
                <div className="member-picture">
                  <img src={member.image} alt={member.name}></img>
                </div>
                <div className="member-name"> {member.name}</div>
                <div className="member-role">{member.role}</div>
              </div>
            ))}
          </div>
          <div className="heading" data-aos="zoom-in">
            OTHER MEMBERS
          </div>
          <div className="each-section others-container">
            {otherMembers.map((member, index) => (
              <div
                className="each-member"
                data-aos="zoom-in"
                data-aos-delay={50 * index}
                key={index}
              >
                <div className="member-name">{member.name}</div>
                <div className="member-role">{member.role}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* =============== OUR PARTNERS =============== */}
      <div className="our-partners-segment">
        <div className="our-partners-header" data-aos="zoom-in">
          OUR PARTNERS
        </div>
        <a
          className="each-partner"
          data-aos="zoom-in"
          href="https://naukowawioska.pl/"
        >
          <img src={naukowaWioska} alt="Naukowa Wioska" />
        </a>
      </div>
      {/* =============== CONTACT US =============== */}
      <div className="contact-us-segment" name="contact-us">
        <div className="contact-us-header" data-aos="zoom-in">
          CONTACT US
        </div>
        <div className="contact-methods-container">
          <div className="each-contact-method" data-aos="zoom-in">
            <div className="each-contact-left">Phone no:</div>
            <div className="each-contact-right">000 000 000</div>
          </div>
          <div className="each-contact-method" data-aos="zoom-in">
            <div className="each-contact-left">Email:</div>
            <div className="each-contact-right">info@lunatech.pl</div>
          </div>
        </div>
      </div>
      <Footer isLanding />
    </div>
  )
}
