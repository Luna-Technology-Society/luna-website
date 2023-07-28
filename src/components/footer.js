import React from "react"
import { scroller } from "react-scroll"
import { Link } from "gatsby"

import "../styles/footer.scss"

import facebook from "../assets/svg_icons/facebook.svg"
import instagram from "../assets/svg_icons/instagram.svg"
import twitter from "../assets/svg_icons/twitter.svg"
import youtube from "../assets/svg_icons/youtube.svg"

export default function Footer(props) {
  const scrollToTop = () => {
    scroller.scrollTo("top", {
      duration: 500,
      delay: 0,
      smooth: "easeInOutQuart",
    })
  }
  /**
   * Comented out for now. The footer will likely be changed to acommodate the scrollTo function.
   */
  // const scrollToAboutUs = () => {
  //   setTimeout(() => {
  //     scroller.scrollTo("about-us", {
  //       duration: 500,
  //       delay: 0,
  //       smooth: "easeInOutQuart",
  //     })
  //   }, 100)
  // }

  return (
    <div className="footer">
      <div className="footer-navigation">
        {/* =============== HOME =============== */}
        <div
          className="each-link"
          onClick={scrollToTop}
          onKeyDown={scrollToTop}
          role="button"
          tabIndex={0}
        >
          <Link to="/">HOME</Link>
        </div>

        {/* =============== EDUCATION =============== */}
        <div
          className="each-link"
          onClick={scrollToTop}
          onKeyDown={scrollToTop}
          role="button"
          tabIndex={0}
        >
          <Link to="/education/">EDUCATION</Link>
        </div>

        {/* =============== JOIN US =============== */}
        <div
          className="each-link"
          onClick={scrollToTop}
          onKeyDown={scrollToTop}
          role="button"
          tabIndex={0}
        >
          <Link to="/joinus/">JOIN US</Link>
        </div>

        {/* =============== SPACE DEVELOPMENT =============== */}
        <div
          className="each-link"
          onClick={scrollToTop}
          onKeyDown={scrollToTop}
          role="button"
          tabIndex={0}
        >
          <Link to="/space-development/">SPACE DEVELOPMENT</Link>
        </div>
      </div>
      <div className="footer-media-icons">
        <a
          href="https://www.facebook.com/lunatechnologysociety"
          target="_blank"
          rel="noreferrer"
        >
          <img src={facebook} alt="facebook" />
        </a>
        <a
          href="https://www.instagram.com/lsdlunaspacedevelopment/?hl=en"
          target="_blank"
          rel="noreferrer"
        >
          <img src={instagram} alt="instagram" />
        </a>
        <a
          href="https://twitter.com/society_luna"
          target="_blank"
          rel="noreferrer"
        >
          <img src={twitter} alt="twitter" />
        </a>
        <a
          href="https://www.youtube.com/channel/UCFuCQAG9OiW6nleLCV2zO9Q"
          target="_blank"
          rel="noreferrer"
        >
          <img src={youtube} alt="youtube" />
        </a>
      </div>
      <div className="footer-copyright">
        Copyright ©{new Date().getFullYear()} Stowarzyszenie Luna Technology
        Society - info@lunatech.pl
      </div>
      <div className="footer-copyright" style={{ fontWeight: "bold" }}>
        KRS: 0000546604 NIP: 7343530379 REGON: 360982412
      </div>
    </div>
  )
}
