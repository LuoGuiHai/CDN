---
title:
date:
updated:
tags:
categories:
keywords:
description:
top_img:
comments:
cover:
toc:
toc_number:
copyright:
copyright_author:
copyright_author_href:
copyright_url:
copyright_info:
mathjax:
katex:
aplayer:
highlight_shrink:
aside:
---
# Displays outdated notice for a post (文章过期提醒)
 noticeOutdate: 
  enable: true 
  style: flat # style: simple/flat 
  limit _day: 365 # When will it be shown 
  position: top # position: top/bottom 
  message_ prev: It has been 
  message _next: days since the last update, the content of the article may be outdated.

{% note default %}
default 提示块标签
{% endnote %}

{% note primary no-icon %}
primary 提示块标签
{% endnote %}

{% note success %}
success 提示块标签
{% endnote %}

{% note info %}
info 提示块标签
{% endnote %}

{% note warning %}
warning 提示块标签
{% endnote %}

{% note danger %}
danger 提示块标签
{% endnote %}

```
{% note [class] [no-icon] %} 
Any content (support inline tags too.io). 
{% endnote %}

[class] : default | primary | success | info | warning | danger. 
[no-icon] : Disable icon in note.

All parameters are optional.

```


```
<div class="gallery-group-main"> 
{% galleryGroup name description link img-url %} 
{% galleryGroup name description link img-url %} 
{% galleryGroup name description link img-url %} 
</div>

name：图库名字
description：图库描述
link：连接到对应相册的地址
img-url：图库封面的地址

<div class="gallery-group-main"> 
{% galleryGroup '壁纸' '收藏的一些壁纸' '/Gallery/wallpaper' https://i.loli.net/2019/11/10/T7Mu8Aod3egmC4Q.png % } 
{% galleryGroup '漫威' '关于漫威的图片' '/Gallery/marvel' https://i.loli.net/2019/12/25/8t97aVlp4hgyBGu.jpg %} 
{% galleryGroup 'OH MY GIRL' '关于OH MY GIRL的图片' '/Gallery/ohmygirl' https://i.loli.net/2019/12/25/hOqbQ3BIwa6KWpo.jpg %} 
</div>

```


```
{% gallery %}
markdown 图片格式
{% endgallery %}
{% gallery %}
![](https://i.loli.net/2019/12/25/Fze9jchtnyJXMHN.jpg)
![](https://i.loli.net/2019/12/25/ryLVePaqkYm4TEK.jpg)
![](https://i.loli.net/2019/12/25/gEy5Zc1Ai6VuO4N.jpg)
![](https://i.loli.net/2019/12/25/d6QHbytlSYO4FBG.jpg)
![](https://i.loli.net/2019/12/25/6nepIJ1xTgufatZ.jpg)
![](https://i.loli.net/2019/12/25/E7Jvr4eIPwUNmzq.jpg)
![](https://i.loli.net/2019/12/25/mh19anwBSWIkGlH.jpg)
![](https://i.loli.net/2019/12/25/2tu9JC8ewpBFagv.jpg)
{% endgallery %}


```


```
https://demo.jerryc.me/posts/4aa8abbe/#%E6%A8%99%E7%B1%A4%E5%A4%96%E6%8E%9B%EF%BC%88Tag-Plugins%EF%BC%89
```