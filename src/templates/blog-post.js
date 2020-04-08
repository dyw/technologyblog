import React from "react"
import { graphql } from "gatsby"

const BlogPost = ({ data }) => {
  console.log("blog post template: ", data)
  return (
    <div>
      header
      siderbar
      <div>
        content
        <div>
          link
          link
        </div>
        <div />
       
      </div>
        sharebox
        seo
    </div>
  )
}

export const pageQuery = graphql`
  fragment post on MarkdownRemark {
    fields {
      slug
    }
    frontmatter {
      title
      date
    }
  }

  query BlogPostQuery {
    allMarkdownRemark {
      edges {
        node {
          id
          excerpt
        }
      }
    }
  }
`
export default BlogPost