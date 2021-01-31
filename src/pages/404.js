import React from "react"
import { Link } from "gatsby"
import PageTransition from "../components/page-transition"

export default function MissingPage() {
  return (
    <div className="missing-page">
      <PageTransition
        duration={500}
        delay={300}
        releasePointerEvents={600}
      ></PageTransition>
      <div className="main-segment">
        <div className="four-o-four">404</div>
        <div className="missing-page-desc">This page appears to be missing. Press GO BACK to go back to home page</div>
        <Link to="/" className="back-button">
          GO BACK
        </Link>
      </div>
    </div>
  )
}
