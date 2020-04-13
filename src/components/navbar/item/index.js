import React from "react"
import { Link } from "gatsby"
import ReactGA from "react-ga"

import { gotoPage } from "../../../utils/url"

const Item = ({ url, name, list = [] }) => {
  if (list.length === 0) {
    return (
      <Link
        className="nav-btn btn btn-link"
        href={url}
        to={url}
        onClick={() => {
          ReactGA.event({
            category: 'User',
            action: `Click nav-menu: ${name}`,
          })
          gotoPage(url)
        }}
      >
        {name}
      </Link>
    )
  }
}

export default Item