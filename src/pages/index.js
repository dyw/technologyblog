import React, { Fragment } from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import { css } from "@emotion/core"

import Card from "../components/card"

const Page = ({ data, pageContext }) => {
  console.log("pageContext: ", pageContext)
  console.log("data: ", data)
  return (
    <Fragment>
      <div>
        <h2>{data.site.siteMetadata.title}</h2>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <Card title={node.frontmatter.title} description={node.excerpt} 
                key={node.fields.slug} 
                date={node.frontmatter.date}/>
        ))}
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