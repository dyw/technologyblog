import React, { Fragment } from "react"
import { Link } from "gatsby"

import Card from "../components/card"
import Sidebar from "../components/sidebar"

import "./index.scss"

const NavLinkText = ({ color, text }) => (
    <div>
      {text}
    </div>
)

const NavLink = ({ test, url, text }) => {
  if (!test) {
    return <NavLinkText color="#7d7d7d" text={test} />
  }

  return (
    <Link to={`${url}`}>
      <NavLinkText color="#66ccff" text={text} />
    </Link>
  )
}

const Page = ({ pageContext }) => {
  console.log("pageContext: ", pageContext)
  //console.log("data: ", data)
  //const { edges } = data.allMarkdownRemark
  //const { tag } = pageContext
  const { group, index, first, last, pathPrefix } = pageContext

  const previousUrl = index - 1 === 1 ? '' : `/${pathPrefix}/${index - 1}`
  const nextUrl = `/${pathPrefix}/${index + 1}`

  return (
    <Fragment>
      <div
        className="row homepage"
        style={{ marginTop: 20, }}
      >
        <Sidebar />
        <div className="col-xl-6 col-lg-7 col-md-12 col-xs-12 order-2">
          {group.map(({ node }) => (
            <Card
              {...node.frontmatter}
              key={node.id}
              url={node.frontmatter.slug ? node.frontmatter.slug : node.fields.slug}
             />
          ))}
        </div>

        <div
            className="row"
            style={{
              justifyContent: 'space-around',
              marginBottom: '20px',
            }}
          >
            <div className="previousLink">
              <NavLink test={!first} url={previousUrl} text="Previous" />
            </div>
            <div className="nextLink">
              <NavLink test={!last} url={nextUrl} text="Next" />
            </div>
        </div>

      </div> 
    </Fragment>
  )
}

export default Page