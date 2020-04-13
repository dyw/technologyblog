---
title: "添加自定义的Webpack配置"
date: "2020-03-28"
---

要添加自定义webpack配置，请在根目录中创建（如果还没有）gatsby-node.js文件。在这个文件中，导出一个名为onCreateWebpackConfig的函数。

当Gatsby创建其webpack配置时，将调用此函数，允许您使用webpack merge修改默认的webpack配置。

Gatsby用不同的配置创建了多个Webpack包。Gatsby称每一个构建类型为“stage”。存在以下阶段：

1. develop: 运行gatsby develop命令时。具有热重新加载和将CSS注入页面的配置
2. develop-html: 与developh相同，但在babel配置中没有react-hmre来呈现html组件。
3. buil-javascript: 生产javascript和CSS构建。为JS和CSS创建路由JS包以及公共块。
4. build-html：生产构建静态html页面