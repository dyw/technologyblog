import React from "react"
import { Link } from "gatsby"

import "./index.scss"

import Tag from "../tag"

import { parseImgur } from "../../utils/images"

const imageStyle = (headerImage, color) => (
  {
    backgroundColor: `#${color}`,
    backgroundImage: `url(${parseImgur(headerImage, 'large')})`,
  }
)

const CardHeader = ({ url, image, backgroundColor }) => (
  <Link to={url} href={url}>
    <div className="wrapper" style={imageStyle(image, backgroundColor)} />
  </Link>
)

const Card = ({
  title,
  date,
  url,
  headerImage,
  headerBackgroundColor,
  description,
  tags = ["gatsby"],
}) => (
  <div className="col-sm-12 pb-4">
    <div className="custom-card">
      {headerImage && (
        <CardHeader
          url={url}
          image={headerImage}
          backgroundColor={headerBackgroundColor}
        />
      )}
      <div className="data">
        <div className="content">
          <div className="stats">
            <span className="date">{date}</span>
            {tags.map(name => (
              <Tag name={name} key={name}/>
            ))}
            <Link to={url} href={url}>
              <h4 className="title">{title}</h4>
            </Link>
            <p>{description}</p>
            <Link to={url} href={url}>阅读全文</Link>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Card