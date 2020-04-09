import React from "react"
import { graphql } from "gatsby"

//import Content from "../components/content"

const BlogPost = ({ data }) => {
  console.log("blog post template: ", data)
  
  return (
    <div>
      header
      siderbar
      <div>
        <h1>{data.markdownRemark.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html}} />
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
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug} }) {
      html
      frontmatter {
        title
      }
    }
  }
`
export default BlogPost