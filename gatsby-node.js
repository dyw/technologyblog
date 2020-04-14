const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const createPaginatedPage = require(`gatsby-paginate`)

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
  const { createPage } = actions
  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              title
              date
              tags
              description
              headerImage
            }
          }
        }
      }
    }
  `)
  console.log(JSON.stringify(result, null, 4))
  
  const { edges } = result.data.allMarkdownRemark
  const tagSet = new Set()

  createPaginatedPage({
    edges,
    createPage,
    pageTemplate: `src/templates/index.js`,
    context: {
      totalCount: edges.length,
    },
    pathPrefix: `pages`,
    buildPath: (index, pathPrefix) => {
      if (index > 1) {
        return `${pathPrefix}/${index}`
      }
      return `/`
    }
  })

  edges.forEach(({ node }, index ) => {
    const { id, frontmatter, fields } = node
    const { tags } = frontmatter

    if (tags) {
      tags.forEach(item => tagSet.add(item) )
    }

    createPage({
      path: node.fields.slug,
      tags,
      component: path.resolve(`./src/templates/blog-post.js`),
      context: {
        slug: node.fields.slug,
        id,
      },
    })
  })
}

exports.onCreateWebpackConfig = ({ plugins, actions }) => {
  actions.setWebpackConfig({
    plugins: [
      plugins.contextReplacement(
        /highlight\.js\/lib\/languages$/,
        new RegExp(`^./(${['javascript', 'bash'].join('|')})$`),
      ),
    ],
  })
}