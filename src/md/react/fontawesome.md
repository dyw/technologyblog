---
title: React使用Font Awesome 5
date: 2020-04-13
description: Font Awesome是一个提供图标和社交徽标的网站工具包。React是一个使用JavaScript创建用户界面的编码库。虽然Font Awesome团队已经制作了一个React组件来促进集成，但是对于Font Awesome 5以及它的结构，有一些基本知识需要理解。在本教程中，您将学习如何使用React Font Awesome组件。
headerImage: https://i.imgur.com/GiianIi.png
tags:
  - Font Awesome
  - React
---
![Font Awesome](https://res.cloudinary.com/scotch/image/upload/v1536257911/xn9hk4ukiexdwo1cv9bs.png)

## 使用Font Awesome

在以前版本的Font Awesome中，您可以将.css文件添加到文档的头部，然后使用以下内容：
```
<i class="fa fa-user-happy"></i>
```
这样做的缺点是，即使你只使用了一些字体，你也不得不把整个字体库带来。使用Font Awesome 5，有几种不同的方法可以使用图标。SVG方式的好处是它比字体-面方式更快。使用SVG，我们还可以选择所需的字体，并且只在最终的包大小中包含这些字体。

然而，当同时使用字体Awesome和React时，当使用JavaScript传递HTML时，SVG可能会在React有时间装载其组件之前触发。因此，一旦React安装了它的组件，我们就必须找到解析HTML的方法。

## 使用Font Awesome 5和React

幸运的是，FontAwesome团队已经创建了一个React组件，可以在React中使用FontAwesome。使用此库，我们可以在您选择图标后执行以下操作。我们将使用拳击手套图标并在App.js中执行所有操作：

```
import React from "react";
import { render } from "react-dom";

// get our fontawesome imports
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// create our App
const App = () => (
  <div>
    <FontAwesomeIcon icon={faHome} />
  </div>
);

// render to #root
render(<App />, document.getElementById("root"));
```
请注意，我们如何只选择home图标，以便只将一个图标添加到包大小中。

![Home Icon](https://res.cloudinary.com/scotch/image/upload/v1536259940/sazis8yzph6q8rn20ckq.png)

现在，FontAwesome将确保在安装该组件后，该组件将替换为该图标的SVG版本。

## 选择Fonts

在安装和使用图标之前，了解字体Awesome库的结构是很重要的。由于有许多图标，团队决定将它们分成多个包。
当选择你想要的字体时，建议你访问字体图标页面。注意左边的过滤器。这些是非常重要的，因为它们将指示从哪个包导入图标。
在上面的例子中，我们将home图标从@fortawesome/free-solid-svg-icons包中取出

### 知道Icon属于那个包

通过查看左侧的过滤器，可以确定图标属于哪个包。你也可以点击一个图标来查看它所属的包。

一旦你知道一个字体属于哪个包，记住这个包的三个字母的速记是很重要的。

您可以从“图标”页中搜索特定类型：

![Icon filter](https://res.cloudinary.com/scotch/image/upload/v1536260195/svukdtzik9jldmablikz.png)

### 使用特定包中的图标

如果您浏览字体图标页面，您会注意到同一图标通常有多个版本，如拳击手套图标：

![Boxing glove](https://res.cloudinary.com/scotch/image/upload/v1536260236/rebaoh9rgrh8fvvyukhe.png)

要使用特定图标，需要调整<FontAwesomeIcon>。以下是来自不同软件包的同一图标的多种类型。其中包括前面讨论过的三个字母速记：
请注意，在我们在几个部分中构建图标库之前，以下示例将不起作用：

```
// solid version
<FontAwesomeIcon icon={['fas', 'code']} />

// defaults to solid version if not specified
<FontAwesomeIcon icon={faCode} />
```
和light版本使用fal:

```
// light version
<FontAwesomeIcon icon={['fal', 'code']} />
```
我们不得不将图标属性改为数组，而不是简单的字符串。

## 安装Font Awesome

由于一个图标、多个软件包和free/pro软件包有多个版本，安装它们都需要安装多个npm软件包。

你需要安装多个并选择你想要的图标。

对于本文，我们将安装所有内容，以便演示多种方法：

```
// the base packages
npm i -S @fortawesome/fontawesome-svg-core @fortawesome/react-fontawesome

// regular icons
npm i -S @fortawesome/free-regular-svg-icons
npm i -S @fortawesome/pro-regular-svg-icons

// solid icons
npm i -S @fortawesome/free-solid-svg-icons
npm i -S @fortawesome/pro-solid-svg-icons

// light icons
npm i -S @fortawesome/free-light-svg-icons
npm i -S @fortawesome/pro-light-svg-icons

// brand icons
npm i -S @fortawesome/free-brands-svg-icons
```
或者如果您希望一次性安装它们：

```
// if you just want the free things
npm i -S @fortawesome/fontawesome-svg-core @fortawesome/react-fontawesome @fortawesome/free-regular-svg-icons @fortawesome/free-solid-svg-icons @fortawesome/free-light-svg-icons @fortawesome/free-brands-svg-icons

// if you have pro enabled and an .npmrc
npm i -S @fortawesome/fontawesome-svg-core @fortawesome/react-fontawesome @fortawesome/free-regular-svg-icons @fortawesome/pro-regular-svg-icons @fortawesome/free-solid-svg-icons @fortawesome/pro-solid-svg-icons @fortawesome/free-light-svg-icons @fortawesome/pro-light-svg-icons @fortawesome/free-brands-svg-icons
```

我们已经安装了这些软件包，但还没有在我们的应用程序中使用或添加到我们的应用程序包中。让我们看看我们现在该怎么做。

## 创建图标库

将所需图标导入多个文件可能会很乏味。假设你在几个地方使用Twitter的标志，你不想写那么多次。

要在一个地方导入所有内容，而不是将每个图标导入到每个单独的文件中，我们将创建一个字体Awesome库。

让我们在src文件夹中创建fontawesome.js，然后将其导入index.js。只要您想使用中的图标的组件具有访问权限（是子组件），就可以随意添加此文件。

您甚至可以在index.js或App.js中正确执行此操作，但是最好将此文件移出，因为它可能会变大：

```
// import the library
import { library } from '@fortawesome/fontawesome-svg-core';

// import your icons
import { faMoneyBill } from '@fortawesome/pro-solid-svg-icons';
import { faCode, faHighlighter } from '@fortawesome/free-regular-svg-icons';

library.add(
  faMoneyBill,
  faCode,
  faHighlighter
  // more icons go here
);
```
如果在自己的文件中执行此操作，则需要导入index.js：

```
import React from 'react';
import { render } from 'react-dom';

// import your fontawesome library
import 'fontawesome';

render(<App />, document.getElementById('root'));
```

```
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTable } from '@fortawesome/free-solid-svg-icons'

const cheatSheetElement = <FontAwesomeCheatsheet icon={faTable} />

ReactDOM.render(cheatSheetElement, document.body)
```

