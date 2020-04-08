const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  console.log("node_internal_type: ",node.internal.type)
  if (node.internal.type === `MarkdownRemark`) {
    console.log("node_type_md: ", node.internal.type)
    const fileNode = getNode(node.parent)
    console.log(`\n`, fileNode.relativePath)
    console.log("createFilePath: ", createFilePath({ node, getNode, basePath: `pages` }))

    const { slug = '' } = node.frontmatter
    if (slug === null || slug.trim() === '') {
       const slug = createFilePath({ node, getNode, basePath: `pages`})
       createNodeField({
         node,
         name: `slug`,
         value: slug
       })
    }
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  console.log(JSON.stringify(result, null, 4))

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    this.createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templetes/blog-posts.js`),
      context: {
        slug: node.fields.slug,
      },
    })
  })
}