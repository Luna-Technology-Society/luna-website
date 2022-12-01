import React, { useEffect, useState } from "react"
import { Link } from "gatsby"
import { scroller } from "react-scroll"
import { exists, window } from "browser-monads"

import main_logo from "../assets/luna_logo.jpg"
import logo_biofeedback from "../assets/logo-biofeedback.png"
import logo_spacedev from "../assets/logo-spacedev.png"

import "../styles/header.scss"

export default function Header(props) {
  const [navbar, setNavbar] = useState(false)
  const [logo, setLogo] = useState(main_logo)
  const [displayDropdownNav, setDisplayDropdownNav] = useState(false)

  useEffect(() => {
    if (!props.isLanding) {
      setNavbar(true)
    }
    if (props.isBiofeedback) {
      setLogo(logo_biofeedback)
    }
    if (props.isSpaceDev) {
      setLogo(logo_spacedev)
    }
  }, [])

  const updateHeaderStatus = () => {
    if (!props.isLanding || window.scrollY >= 20) {
      setNavbar(true)
    } else {
      setNavbar(false)
      setDisplayDropdownNav(false)
    }
  }

  const scrollToTop = () => {
    updateHeaderStatus()
    setDisplayDropdownNav(false)
    scroller.scrollTo("top", {
      duration: 500,
      delay: 0,
      smooth: "easeInOutQuart",
    })
  }

  const scrollToAboutUs = () => {
    updateHeaderStatus()
    setDisplayDropdownNav(false)
    setTimeout(() => {
      scroller.scrollTo("about-us", {
        duration: 500,
        delay: 0,
        smooth: "easeInOutQuart",
      })
    }, 100)
  }

  if (props.isLanding && exists(window)) {
    // this is a memory leak! I shall fix it later,
    // it is not causing much harm the way it is right now
    window.addEventListener("scroll", updateHeaderStatus)
  }
  return (
    <div className={"header" + (navbar ? " show-header" : "")}>
      <div className="header-container">
        <div
          className="logo-container"
          onClick={props.isLanding ? scrollToTop : () => {}}
        >
          <Link to="/">
            <img src={logo} alt="logo"></img>
          </Link>
        </div>
        <div
          className={
            "header-navigation" + (displayDropdownNav ? " show-navigation" : "")
          }
        >
          <div className="each-link" onClick={scrollToTop}>
            {props.isLanding ? <div>HOME</div> : <Link to="/">HOME</Link>}
          </div>
          <div className="each-link" onClick={scrollToAboutUs}>
            {props.isLanding ? (
              <div>ABOUT US</div>
            ) : (
              <Link to="/">ABOUT US</Link>
            )}
          </div>
          <div className="each-link" onClick={scrollToTop}>
            <Link to="/biofeedback/">BIOFEEDBACK</Link>
          </div>
          <div className="each-link" onClick={scrollToTop}>
            {props.isSpaceDev ? (
              <div>SPACE DEVELOPMENT</div>
            ) : (
              <Link to="/space-development/">SPACE DEVELOPMENT</Link>
            )}
          </div>
        </div>

        <div
          className="hamburger"
          onClick={() => {
            displayDropdownNav
              ? setDisplayDropdownNav(false)
              : setDisplayDropdownNav(true)
          }}
        >
          <svg
            width="28"
            height="20"
            viewBox="0 0 28 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2 4H26C27.104 4 28 3.104 28 2C28 0.896 27.104 0 26 0H2C0.896 0 0 0.896 0 2C0 3.104 0.896 4 2 4ZM26 8H2C0.896 8 0 8.896 0 10C0 11.104 0.896 12 2 12H26C27.104 12 28 11.104 28 10C28 8.896 27.104 8 26 8ZM26 16H2C0.896 16 0 16.896 0 18C0 19.104 0.896 20 2 20H26C27.104 20 28 19.104 28 18C28 16.896 27.104 16 26 16Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
    </div>
  )
}
