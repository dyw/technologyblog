import React from "react"
import { graphql } from "gatsby"

//import Content from "../components/content"
import Header from "../components/header"

const BlogPost = ({ data }) => {
  console.log("blog post template: ", data)
  
  return (
    <div>
      <Header title={data.markdownRemark.frontmatter.title} />
      siderbar
      <div>
       
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