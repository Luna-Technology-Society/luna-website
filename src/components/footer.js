import React, { useEffect } from "react"
import { scroller } from "react-scroll"
import { Link } from "gatsby"

import "../styles/footer.scss"

import facebook from "../assets/facebook.svg"
import instagram from "../assets/instagram.svg"
import twitter from "../assets/twitter.svg"
import youtube from "../assets/youtube.svg"

export default function Footer(props) {
  // useEffect(()=>{
  //   scrollToTop();
  // }, [])

  const scrollToTop = () => {
    scroller.scrollTo("top", {
      duration: 500,
      delay: 0,
      smooth: "easeInOutQuart",
    })
  }
  const scrollToAboutUs = () => {
    setTimeout(() => {
      scroller.scrollTo("about-us", {
        duration: 500,
        delay: 0,
        smooth: "easeInOutQuart",
      })
    }, 100)
  }

  return (
    <div className="footer">
      <div className="footer-navigation">
        <div className="each-link" onClick={scrollToTop}>
          {props.isLanding ? <div>HOME</div> : <Link to="/">HOME</Link>}
        </div>
        <div className="each-link" onClick={scrollToAboutUs}>
          {props.isLanding ? <div>ABOUT US</div> : <Link to="/">ABOUT US</Link>}
        </div>
        <div className="each-link" onClick={scrollToTop}>
          <Link to="/biofeedback/">BIOFEEDBACK</Link>
        </div>
        <div className="each-link" onClick={scrollToTop}>
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
        Copyright ©2021 lunaSpaceDevelopment 2021 -
        kontakt@lunatechnologysociety.pl
      </div>
    </div>
  )
}
