import React from "react"

import LatestPost from "../latestpost"

const Information = ({ totalCount, posts }) => (
  <div className="d-none d-lg-block information my-2">
    <hr />
    <p>
      共&nbsp;
      {totalCount}
      &nbsp;篇文章
    </p>
    <hr />
    <LatestPost posts={posts} />
    <hr />
  </div>
)

export default Information