## L.O.R.A Sharing

You can create a folder in [`site/blog/`](https://github.com/loratech/sharing.loratech.org/tree/master/site/blog) with your blog post's name and write your post in that folder in markdown and put any images in that folder you want to put in your post.

**NOTE!**

**PLEASE DO NOT CHANGE ANY OTHER FILES UNLESS YOU KNOW WHAT YOU ARE DOING.**

At the top of your post, make sure to include the following frontmatters.

```js
---
title: Your Post Name
description: Your Post Description
blog: true // always set true to put your post in the blog list
date: Your Post Date
author: Your Name
permalink: /:year/:month/:day/:slug // you should copy this default permalink style
tags: // any tags related to your post
  - Computer Science
  - Python
  - CLI
---
```

After that, you can write your post freely.

You can put your images in your post by using `./image.png` if your images are in `your_post_name` directory.

Happy Sharing!

Cheers!

L.O.R.A
