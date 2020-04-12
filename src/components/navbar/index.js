import React from "react"
import ReactGA from "react-ga"

import config from "../../config"
import { gotoPage } from "../../utils/url"

import "./index.scss"

const { navbarList = [] } = config
console.log("navbar page: ", navbarList)

const NavbarClass = [
    'navbar',
    'navbar-expand-md',
    'sticky-top',
    'custom-navbar',
  ]

const Navbar = () => (
    <nav id="m-navbar" className={`${NavbarClass.join(' ')} navbar-night`}>
    <div className="container">
      <button
        type="button"
        className="navbar-brand"
        onClick={() => {
          ReactGA.event({
            category: 'User',
            action: 'Click navbar logo',
          })
          gotoPage(`/`)
        }} 
      >
        <span className="brand-logo">Dingyw</span>&apos;s Blog
      </button>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
      >
          icon
      </button>
      <div>
        <ul>
          {navbarList.map(item => (
            <li>{item.title}</li>
          ))}
        </ul>
      </div>
    </div>
  </nav>
)

export default Navbar