import React from "react"

const Tag = ({ name, count }) => (
    <a href={`/tag/${name}`} className="header-tag">
      {name}
      &nbsp;
      {count}
    </a>
)

export default Tag