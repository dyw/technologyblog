---
title: "Gatsby 指南"
---

## 了解Gatsby积木

### 使用Gatsby starters
 ```
 gatsby new hello-world [starter]
 cd hello-world
 gatsby develop
 ```
 ### 不使用starters

 ```
 mkdir hello-world && cd hello-world
 npm init
 npm install --save gatsby react react-dom
 gatsby develop
 ```
### 熟悉Gatsby页

在代码编辑器中打开/src目录,里面是一个目录：/pages。

打开src/pages/index.js处的文件，此文件中的代码创建了一个包含单个div和一些适当文本的组件，“Hello world！”