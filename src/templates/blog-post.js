import React from "react"
import { graphql } from "gatsby"

import Header from "../components/header"
import Sidebar from "../components/sidebar"
import Content from "../components/content"
import ShareBox from "../components/sharebox"
import SEO from "../components/seo"

import { parseChineseDate } from "../utils"
import config from "../config"

import "./blog-post.scss"


const { name, iconUrl } = config

const BlogPost = ({ data }) => {
  console.log("blog post template: ", data)
  
  return (
    <div className="row post order-2">
      <Header
        img={data.markdownRemark.frontmatter.headerImage || 'https//i.imgur.com/M795H8A.jpg'}
        title={data.markdownRemark.frontmatter.title}
        authorName={name}
        authorImage={iconUrl}
        subTitle={parseChineseDate(data.markdownRemark.frontmatter.date)}
      />
      <Sidebar />
      <div className="col-xl-7 col-lg-6 col-md-12 col-sm-12 order-10 content">
        <Content post={data.markdownRemark.html} />
        <div className="m-message" style={{ padding: '10px 30px', background: 'white'}}>
          link
          link
        </div>
        <div />    
      </div>
        <ShareBox url={data.markdownRemark.fields.slug}/>
        
    </div>
  )
}

export const pageQuery = graphql`
query($slug: String!) {
  markdownRemark(fields: { slug: { eq: $slug }}) {
    fields {
      slug
    }
    html
    frontmatter {
      title
      date
      headerImage
    }
  }
}
`
export default BlogPost