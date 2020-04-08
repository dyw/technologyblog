import React from "react"
import { Link } from "gatsby"

import "./index.css"

const Card = ({
  title,
  date,
  url,
  headerImage,
  headerBackgroundColor,
  description,
  tags = [],
}) => (
  <div>
    <div className="custom-card">
        Header
        <div>
          <span>date</span>
          <span>tags</span>
          <Link to="/">{title}</Link>
          <p>{description}</p>
          <Link to="/">...阅读全文</Link>
        </div>
    </div>
  </div>
)

export default Card