import React, { useEffect } from "react"
import { scroller } from "react-scroll"
import Aos from "aos"
import "aos/dist/aos.css"

// components
import PageTransition from "../components/page-transition"
import Footer from "../components/footer"
import Header from "../components/header"

// images
import formsIcon from "../assets/svg_icons/forms-round.svg"
import grupaImg from "../assets/joinus/grupa.jpg"
import artdisplayImg from "../assets/joinus/artdisplay.jpg"

// stylesheet
import "../styles/joinus.scss"

const scrollToAboutProject = () => {
  scroller.scrollTo("about-joinus-segment", {
    duration: 500,
    delay: 0,
    smooth: "easeInOutQuart",
    offset: -99,
  })
}

export default function JoinUs() {
  useEffect(() => {
    Aos.init({ duration: 500 })
  }, [])

  return (
    <div className="joinus-page">
      <PageTransition
        duration={500}
        delay={300}
        releasePointerEvents={600}
      ></PageTransition>
      <Header isJoinus />
      <section className="first-segment">
        <div className="first-segment-container">
          <h1
            className="joinus-header"
            data-aos="fade-right"
            data-aos-delay="500"
            data-aos-duration="750"
          >
            Join LUNA <br /> Shape your future
          </h1>
          <p
            className="joinus-desc"
            data-aos="fade-right"
            data-aos-delay="600"
            data-aos-duration="750"
          >
            “An investment in knowledge pays the best interest.”
            <br /> – Benjamin Franklin
          </p>
          <div
            data-aos="fade-right"
            data-aos-delay="700"
            data-aos-duration="750"
          >
            <div
              role="button"
              tabIndex={0}
              className="joinus-button"
              onClick={scrollToAboutProject}
              onKeyDown={scrollToAboutProject}
            >
              READ MORE
            </div>
          </div>
        </div>
      </section>

      {/* ==================== FIRST SEGMENT ==================== */}
      <section className="project-segment" id="about-joinus-segment">
        <div className="project-segment-container">
          <div className="project-segment-left">
            <img
              src={grupaImg}
              className="project-image"
              alt="kids"
              data-aos="fade-right"
              data-aos-duration="750"
            />
          </div>

          <div className="project-segment-right">
            <h2
              className="project-segment-header"
              data-aos="fade-left"
              data-aos-duration="750"
              data-aos-delay="150"
            >
              BECOME A MEMBER
            </h2>
            <p
              className="project-segment-desc"
              data-aos="fade-left"
              data-aos-duration="750"
              data-aos-delay="250"
            >
              LUNA members take part in most events ran by the society. As a LUNA member you will be given a role and you will be expected to meet your responsibilities. Our roles vary from social media managment to engineering and research. LUNA Members are a close community of down-to-earth individuals. Please apply in the form below to join our community.
            </p>
            <div
              className="project-segment-follow-us"
              data-aos="fade-left"
              data-aos-duration="750"
              data-aos-delay="350"
            >
              <span>Application form: </span>{" "}
              <div className="media-icons">
                <a
                  href="https://forms.gle/9wyh6rK8eSwPBBoP9"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="each-icon"
                    src={formsIcon}
                    alt="Google Forms"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== SECOND SEGMENT ==================== */}
      <section className="project-segment volunteer-segment">
        <div className="project-segment-container">
          <div className="project-segment-left">
            <h2
              className="project-segment-header"
              data-aos="fade-right"
              data-aos-duration="750"
              data-aos-delay="150"
            >
              BECOME A VOLUNTEER
            </h2>
            <p
              className="project-segment-desc"
              data-aos="fade-right"
              data-aos-duration="750"
              data-aos-delay="250"
            >
              LUNA volunteers are temporary members who are help out during some events and are not expected to participate in the long term. By becoming a volunteer you can learn a lot about space science and event organization. If you would like to help us out but you don't want to commit then becoming a LUNA volunteer is your best option. Fill out the form below and come see us in-person!
            </p>
            <div
              className="project-segment-follow-us"
              data-aos="fade-right"
              data-aos-duration="750"
              data-aos-delay="350"
            >
              <span>Application form: </span>{" "}
              <div className="media-icons">
                <a
                  href="https://forms.gle/9wyh6rK8eSwPBBoP9"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="each-icon"
                    src={formsIcon}
                    alt="Google Forms"
                  />
                </a>
              </div>
            </div>
          </div>

          <div className="project-segment-right">
            <img
              src={artdisplayImg}
              className="project-image"
              alt="asronout"
              data-aos="fade-right"
              data-aos-duration="750"
            />
          </div>
        </div>
      </section>

      <Footer isBiofeedback />
    </div>
  )
}
