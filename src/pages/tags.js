import React, { Fragment } from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import { css } from "@emotion/core"

import Card from "../components/card"

const Page = ({ data, pageContext }) => {
  console.log("pageContext: ", pageContext)
  console.log("data: ", data)
  const { edges } = data.allMarkdownRemark
  const { tag } = pageContext
  return (
    <Fragment>
      <div className="container">
        <div
          style={{
            fontSize: 20,
            margin: 15,
          }}
        >
          {edges.length}
          &npsp;Articles in&nbsp;
          {tag}
        </div>
        <div>
          {edges.map(({ node }) => (
            <Card {...node.frontmatter} key={node.id} />
          ))}
        </div>
        
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
            fields {
              slug
            }
            frontmatter {
              title
              date
            }
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