---
title: MVVM模式
author:
createTime: 2024/07/18 17:23:47
permalink: /vue/r1f3vxl2/
---


# MVVM模式

MVVM模式，`M`即 model，数据模型；`V`即 view，视图；`VM`即 view-model，视图模型。
<!-- more -->
![](https://cdn.jsdelivr.net/gh/xugaoyi/image_store/blog/20200204123438.png)

**理解**

首先，数据Model通过Data Bindings把数据绑定在View视图上，

当View视图有交互（有改变）的时候，Dom listeners会自动监听，然后更新数据Model。





**Q：什么是MVVM模式？**

A：MVVM模式，第一个M代表数据模型，V代表视图，VM代表视图模型；
它的实际操作原理是：后台数据通过视图模型来渲染视图，就是页面。当用户在页面上进行操作的时候，
视图模型会自动监听到用户的操作，从而改变后台数据。
