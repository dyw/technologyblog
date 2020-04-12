import React from "react"

import Head from "./head"

import Navbar from "../navbar"
import Transition from "../transition"
import Footer from "../footer"

import "./index.scss"

const Layout = ({ children, location }) => (
  <div className="layout">
    <Head />
    <Navbar location={location} />
    <Transition location={location}>
      <div className="container-fluid">{children}</div>
    </Transition>
    <Footer />
  </div>
)

export default Layout