import React from "react"
import { Link } from "gatsby"

import "./index.scss"

import Tag from "../tag"

const Card = ({
  title,
  date,
  url,
  headerImage,
  headerBackgroundColor,
  description,
  tags = ["gatsby"],
}) => (
  <div>
    <div className="custom-card">
        <div className="data">
          <div className="content">
            <div className="stats">
              <span className="date">{date}</span>
              {tags.map(name => (
                <Tag name={name} key={name}/>
              ))}
              <Link to="/">{title}</Link>
              <p>{description}</p>
              <Link to="/">阅读全文</Link>
            </div>
          </div>
        </div>
    </div>
  </div>
)

export default Card