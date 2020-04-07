import React from "react"
import { graphql } from "gatsby"

export default ({ data }) => {
  console.log(data)
  return (
    <div>
      <h2>{data.site.siteMetadata.title}</h2>
      <p>Hello World</p>
    </div> 
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