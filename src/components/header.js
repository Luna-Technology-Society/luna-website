import React, { useCallback, useEffect, useState } from "react"
import { Link } from "gatsby"
import { scroller } from "react-scroll"
// import { exists, window } from "browser-monads"

import main_logo from "../assets/navigation/luna_tech_soc.png"
import logo_spacedev from "../assets/navigation/logo-spacedev.png"

import "../styles/header.scss"

export default function Header(props) {
  const [navbar, setNavbar] = useState(false)
  const [logo, setLogo] = useState(main_logo)
  const [displayDropdownNav, setDisplayDropdownNav] = useState(false)

  const updateHeaderStatus = useCallback(() => {
    if (!props.isLanding || window.scrollY > 1) {
      setNavbar(true)
    } else {
      setNavbar(false)
      setDisplayDropdownNav(false)
    }
  }, [props.isLanding])

  useEffect(() => {
    if (!props.isLanding) {
      setNavbar(true)
    }
    if (props.isBiofeedback) {
      setLogo(main_logo)
    }
    if (props.isSpaceDev) {
      setLogo(logo_spacedev)
    }
    if (props.isEducation) {
      setLogo(main_logo)
    }
  }, [props])

  useEffect(() => {
    if (props.isLanding && window) {
      window.addEventListener(
        "scroll",
        updateHeaderStatus ? updateHeaderStatus : null
      )
    }
    return () => {
      if (props.isLanding && window) {
        window.removeEventListener(
          "scroll",
          updateHeaderStatus ? updateHeaderStatus : null
        )
      }
    }
  }, [props.isLanding, updateHeaderStatus])

  const scrollToTop = () => {
    updateHeaderStatus()
    setDisplayDropdownNav(false)
    scroller.scrollTo("top", {
      duration: 500,
      delay: 0,
      smooth: "easeInOutQuart",
    })
  }

  const scrollToContactUs = async () => {
    updateHeaderStatus()
    setDisplayDropdownNav(false)
    setTimeout(() => {
      scroller.scrollTo("contact-us", {
        duration: 500,
        delay: 0,
        smooth: "easeInOutQuart",
      })
    }, 100)
  }

  return (
    <div className={"header" + (navbar ? " show-header" : "")}>
      <div className="header-container">
        {/* =============== HOME =============== */}
        <div
          className={
            "each-link el-home " + (displayDropdownNav ? "show-hamb-dd" : "")
          }
          onClick={scrollToTop}
          onKeyDown={scrollToTop}
          role="button"
          tabIndex={0}
        >
          {props.isLanding ? <div>HOME</div> : <Link to="/">HOME</Link>}
        </div>

        {/* =============== PROJECTS =============== */}
        <div
          className={
            "each-link dropdownable el-projects " +
            (displayDropdownNav ? "show-hamb-dd" : "")
          }
        >
          <div>PROJECTS</div>
          <div className="dropdown">
            <div
              className="dd-each"
              onClick={scrollToTop}
              onKeyDown={scrollToTop}
              role="button"
              tabIndex={0}
            >
              {props.isBiofeedback ? (
                <div>EDUCATION</div>
              ) : (
                <Link to="/education/">EDUCATION</Link>
              )}
            </div>
            <div
              className="dd-each"
              onClick={scrollToTop}
              onKeyDown={scrollToTop}
              role="button"
              tabIndex={0}
            >
              {props.isSpaceDev ? (
                <div>SPACE DEVELOPMENT</div>
              ) : (
                <Link to="/space-development/">SPACE DEVELOPMENT</Link>
              )}
            </div>
          </div>
        </div>

        

        {/* =============== LOGO =============== */}
        <div
          className="logo-container"
          onClick={props.isLanding ? scrollToTop : () => {}}
          onKeyDown={scrollToTop}
          role="button"
          tabIndex={0}
        >
          <Link to="/">
            <img src={logo} alt="logo"></img>
          </Link>
        </div>

        {/* =============== EDUCATION =============== */}
        <div
          className={
            "each-link el-edu " + (displayDropdownNav ? "show-hamb-dd" : "")
          }
          onClick={scrollToTop}
          onKeyDown={scrollToTop}
          role="button"
          tabIndex={0}
        >
          {props.isEducation ? (
            <div>JOIN US</div>
          ) : (
            <Link to="/joinus/">JOIN US</Link>
          )}
        </div>

        {/* =============== CONTACT =============== */}
        <div
          className={
            "each-link el-contact " + (displayDropdownNav ? "show-hamb-dd" : "")
          }
          onClick={scrollToTop}
          onKeyDown={scrollToTop}
          role="button"
          tabIndex={0}
        >
          {props.isLanding ? (
            <div
              onClick={scrollToContactUs}
              onKeyDown={scrollToContactUs}
              role="button"
              tabIndex={0}
            >
              CONTACT
            </div>
          ) : (
            <Link to="/" onClick={scrollToContactUs}>CONTACT</Link>
          )}
        </div>

        {/* =============== DROPDOWN BG =============== */}
        <div
          className={
            "hamb-dropdown-bg " + (displayDropdownNav ? "show-hamb-dd-bg" : "")
          }
        />

        {/* =============== (MOBILE NAVIGATION ICON) =============== */}
        <div
          className="hamburger"
          onClick={() => {
            displayDropdownNav
              ? setDisplayDropdownNav(false)
              : setDisplayDropdownNav(true)
          }}
          onKeyDown={() => {
            displayDropdownNav
              ? setDisplayDropdownNav(false)
              : setDisplayDropdownNav(true)
          }}
          role="button"
          tabIndex={0}
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
