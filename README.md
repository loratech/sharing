## L.O.R.A Sharing

Since every memeber can be sharing/writing post at the same time, it's recommended to create a branch with your post name. And, you can write, delete, commit, push, add or whatever you want, it's totally safe.

If you want to preview your post, you will need [node](https://nodejs.org/en/) and [yarn](https://yarnpkg.com/) installed.
And then, go to the directory,

```sh
yarn install
yarn dev
```

After you have satisfied writing or want to view what you have written, just push to your branch and create a pull request to the `master` branch. You will get a preview url on pull request page after sometime.

If the preview url has your post sucessfully posted and ready to share, you can merge it with merge button on the pull request page. If you can't merge it or don't have permission to merge, ping @ydcjeff or @HtetMyatAung13 or another owner to merge.

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
