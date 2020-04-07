const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode }) => {
  console.log("node_internal_type: ",node.internal.type)
  if (node.internal.type === `MarkdownRemark`) {
    console.log("node_type_md: ",node.internal.type)
    const fileNode = getNode(node.parent)
    console.log(`\n`, fileNode.relativePath)
    console.log("createFilePath: ", createFilePath({ node, getNode, basePath: `pages` }))
  }
}