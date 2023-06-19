import React, { Fragment } from "react"
import { Router as MyRouter } from "@reach/router"
import { Helmet } from "react-helmet"

// components
import Landing from "./landing"
import SpaceDevelopment from "./space-development"
import JoinUs from "./joinus"
import Education from "./education"

// stylesheet
import "../styles/index.scss"

export default function Home() {
  return (
    <Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>LUNA Technology Society</title>
      </Helmet>
      <MyRouter>
        <Landing path="/" />
        <SpaceDevelopment path="/space-development" />
        <JoinUs path="/joinus" />
        <Education path="/education" />
      </MyRouter>
    </Fragment>
  )
}
