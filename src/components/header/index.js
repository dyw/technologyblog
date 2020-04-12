import React from "react"

const Header = ({
    img,
    title,
    subTitle,
    authorImage,
    authorName,
}) => (
    <div>
      <div>
        {title && <h1>{title}</h1>}
        {subTitle && (
            <div>
                <div>
                    {authorImage && (
                        <img src="" alt="dyw" />
                    )}
                    <span>{authorName}</span>
                </div>
            </div>
        )}
      </div>
    </div>
)

export default Header