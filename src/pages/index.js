import React, { Fragment } from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import { css } from "@emotion/core"

import Card from "../components/card"

const Page = ({ data, pageContext }) => {
  console.log("pageContext: ", pageContext)
  return (
    <Fragment>
      <div>
        <h2>{data.site.siteMetadata.title}</h2>
        <p>Hello World</p>
        <Card title="my blog title" />
      </div> 
    </Fragment>
  )
}


export const query = graphql`
  query  {
      allFile {
        edges {
          node {
            relativePath
            prettySize
            extension
            birthTime
          }
        }
      }
      allMarkdownRemark {
        edges {
          node {
            id
            excerpt
          }
        }
      }
      site {
        siteMetadata {
            title
        }
      }     
  }
`
export default Page