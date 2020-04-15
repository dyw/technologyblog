import React from "react"
import ReactGA from "react-ga"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"

import config from "../../config"
import { gotoPage } from "../../utils/url"

import Item from "./item"

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
        className="navbar-brand btn btn-default"
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
        <FontAwesomeIcon icon={faBars} />
      </button>
      <div
        className="collapse navbar-collapse flex-row-reverse"
        id="navbarSupportedContent"
      >
        <ul className="navbar-nav mr-2">
          {navbarList.map(item => (
            <Item
              name={item.title}
              key={item.href}
              url={item.href}
              list={item.list}
            />
          ))} 
        </ul>
      </div>
    </div>
  </nav>
)

export default Navbar