import React, { Fragment } from "react"
import { Router as MyRouter } from "@reach/router"
import { Helmet } from "react-helmet"

import Landing from "./landing"
import SpaceDevelopment from "./space-development"
import BioFeedback from "./biofeedback"
import Education from "./education"

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
        <BioFeedback path="/biofeedback" />
        <Education path="/education" />
      </MyRouter>
    </Fragment>
  )
}
