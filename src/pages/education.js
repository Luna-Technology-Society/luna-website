import React, { useEffect } from "react"
import { scroller } from "react-scroll"
import Aos from "aos"
import "aos/dist/aos.css"

// components
import Footer from "../components/footer"
import Header from "../components/header"
import PageTransition from "../components/page-transition"

// images
import workshops from "../assets/education/workshops_img.jpg"
import campaigns from "../assets/education/campaigns_img.jpg"

// stylesheet
import "../styles/education.scss"

export default function Education() {
  const scrollToAboutProject = () => {
    scroller.scrollTo("wwd-segment", {
      duration: 500,
      delay: 0,
      smooth: "easeInOutQuart",
    })
  }
  useEffect(() => {
    Aos.init({ duration: 500 })
  })
  return (
    <div className="education-page">
      <Header isEducation />
      <PageTransition
        duration={500}
        delay={300}
        releasePointerEvents={600}
      ></PageTransition>
      <div className="first-segment top">
        <div className="first-segment-container">
          <div
            className="education-header"
            data-aos="fade-right"
            data-aos-delay="500"
            data-aos-duration="750"
          >
            LUNA EDUCATION
          </div>
          <div
            className="education-desc"
            data-aos="fade-right"
            data-aos-delay="600"
            data-aos-duration="750"
          >
            "Live as if you were to die tomorrow. Learn as if you were to live
            forever." <br /> - Mahatma Gandhi
          </div>
          <div
            data-aos="fade-right"
            data-aos-delay="700"
            data-aos-duration="750"
          >
            <div className="education-button" onClick={scrollToAboutProject}>
              READ MORE
            </div>
          </div>
        </div>
      </div>
      <div className="wwd-segment">
        <div className="wwd-container">
          <div className="wwd-right">
            <div
              className="wwd-header"
              data-aos="fade-in"
              data-aos-delay="0"
              data-aos-duration="750"
            >
              WHAT WE DO
            </div>
            <div
              className="wwd-desc"
              data-aos="fade-in"
              data-aos-delay="200"
              data-aos-duration="750"
            >
              Passion for science and the experience gained during research are
              the basis of the knowledge we pass on to others. Luna was founded
              to show the mysterious world of science and encourage you to
              explore its secrets. Main idea attributed to education Sector of
              Luna is teaching by conducting workshops, lectures, meetings or
              educational campaigns.
            </div>
          </div>
        </div>
      </div>
      <div className="workshops-segment">
        <div className="workshops-container">
          <div className="workshops-left">
            <div
              className="workshops-header"
              data-aos="fade-right"
              data-aos-duration="750"
            >
              WORKSHOPS
            </div>
            <div
              className="workshops-desc"
              data-aos="fade-right"
              data-aos-duration="750"
              data-aos-delay="100"
            >
              Luna Technology Society is committed to educating and inspiring
              the next generation of space enthusiasts. Our educational
              workshops are a key part of this mission, providing valuable
              information and insights to attendees. In the past, we have
              covered topics such as the basics of space science and our own
              achievements as a society. These workshops are an excellent
              opportunity for anyone interested in technology to learn more
              about this fascinating field and explore their own potential.
            </div>
          </div>
          <div className="workshops-right">
            <img
              className="workshops-image"
              src={workshops}
              alt="#"
              data-aos="fade-left"
              data-aos-duration="750"
              data-aos-delay="0"
              data-aos-anchor-placement="center-bottom"
            ></img>
          </div>
        </div>
      </div>
      <div className="campaigns-segment">
        <div className="campaigns-container">
          <div className="campaigns-left">
            <img
              className="campaigns-image"
              src={campaigns}
              alt="#"
              data-aos="fade-right"
              data-aos-duration="750"
              data-aos-anchor-placement="center-bottom"
            />
          </div>
          <div className="campaigns-right">
            <div
              className="campaigns-header"
              data-aos="fade-left"
              data-aos-duration="500"
            >
              EDUCATIONAL CAMPAIGNS
            </div>
            <div
              className="campaigns-desc"
              data-aos="fade-left"
              data-aos-duration="750"
              data-aos-delay="100"
            >
              The Luna Technology Society is committed to advancing the
              understanding of science and technology. As part of our efforts,
              we run educational campaigns that aim to inspire and engage young
              people in these fields. These campaigns typically involve creating
              informative posters, promoting science-related content on social
              media, and organizing talks about our ongoing projects and the
              latest scientific developments. Our goal is to encourage the next
              generation of scientists and technologists and foster a lifelong
              passion for learning.
            </div>
          </div>
        </div>
      </div>
      <Footer isSpaceDev />
    </div>
  )
}
