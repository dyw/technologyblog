import React from "react"
import { Link } from "gatsby"

import "./index.scss"

const LatestPost = ({ posts }) => (
  <div className="latest-post">
    <p>最新文章</p>
    {posts.map(({ node }) => (
      <Link
        to={node.frontmatter.url || node.frontmatter.slug || node.fields.slug}
        key={node.frontmatter.url || node.frontmatter.slug || node.fields.slug}
        href={node.frontmatter.url || node.frontmatter.slug || node.fields.slug}
      >
        {node.frontmatter.title}
      </Link>
    ))}
  </div>
)

export default LatestPost