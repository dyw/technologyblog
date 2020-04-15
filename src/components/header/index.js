import React from "react"

import { parseImgur } from "../../utils/images"

import "./index.scss"

const Header = ({
    img,
    title,
    subTitle,
    authorImage,
    authorName,
}) => (
    <div className="col-12 header" style={{ padding: 0 }} id="header">
      <div
        className="img-container"
        style={{
            backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2) ), url(${img})`,
            marginTop: -58,
        }}
      >
        {title && <h1 className="u-title">{title}</h1>}
        {subTitle && (
            <div className="u-subtitle">
                <div className="m-left">
                  {authorImage && (
                    <img
                      src={parseImgur(authorImage, 'small-square')}
                      alt={authorName}
                      className="author-image"
                    />
                  )}
                  <span className="author-name">{authorName}</span>
                </div>
                <span className="text">{subTitle}</span>
            </div>
        )}
      </div>
    </div>
)

export default Header