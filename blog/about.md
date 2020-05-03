---
title: About
---

## About

This website is a curated place for sharing the domain knowledge, reproducible tutorials between L.O.R.A members, university students and the rest of the world.

### Pre-requiresities

In order to structure the post properly, you must be familiar with basic [markdown](https://markdownguide.org) writing styles.

### Features

This website has a few built-in useful features, namely

- Code Syntax Highlighting
- Tip, Warning, Danger and Details blocks
- [Medium](https://medium.com) Style Image Zooming
- [Disqus](https://disqus.com) Commenting (only show in posts)

This is the code syntax highlighting block. You can also specify the programming language.

Check out for more [valid languages](https://prismjs.com/#languages-list).

**Input**

````
``` py
import os
os.getcwd()
```
````

**Output**

```py
# This is python code, you can see top right corner specifying `py` as python
import os
os.getcwd()
```

You can also highlight the line numbers.

**Input**

````
``` py{2}
import os
os.getcwd()
```
````

**Output**

```py{2}
# This is python code, you can see top right corner specifying `py` as python
import os
os.getcwd()
```

You can also hightlight the multiple line numbers.

**Input**

````
``` py{1,3}
import os
os.getcwd()
```
````

**Output**

```py{1,3}
# This is python code, you can see top right corner specifying `py` as python
import os
os.getcwd()
```

**Input**

````
``` py{2-3}
import os
os.getcwd()
```
````

**Output**

```py{2-3}
# This is python code, you can see top right corner specifying `py` as python
import os
os.getcwd()
```

This is how to write tip, warning, danger block and details blocks.

**Input**

```md
::: tip
This is a tip
:::

::: warning
This is a warning
:::

::: danger
This is a danger.
:::

::: details
This is a details block, which does not work in IE / Edge
:::
```

**Output**
::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a danger.
:::

::: details
This is a details block, which does not work in IE / Edge.
:::

You can also specify your custom tip, warning, danger titles.

**Input**

```md
::: tip CUSTOM TIP TITLE
This is a tip.
:::

::: warning CUSTOM WARNING TITLE
This is a warning.
:::

::: danger CUSTOM DANGER TITLE
This is a danger.

::: details Click me to see more
Now you see me :D :tada:
:::
```

**Output**

::: tip CUSTOM TIP TITLE
This is a tip.
:::

::: warning CUSTOM WARNING TITLE
This is a warning.
:::

::: danger CUSTOM DANGER TITLE
This is a danger.
:::

::: details Click me to see more
Now you see me :D :tada:
:::

This is a medium style zooming. Click the image below to zoom.

![img](/apple-touch-icon.png)

### So, Who can join?

Every L.O.R.A members can share their domain knowledge, their recent studies, recommended books, reproducible tutorials, tips and tricks and best practices regardless of their majors. If you are willing to share what you have known to the rest of the team and world, please fill [this form](https://bit.ly/lora-mbrs). You will soon be reached out via email.

### What about non L.O.R.A members?

We also accept guest posts from external contributors if you are not a member of L.O.R.A and willing to share your knowledge. Please contact via [this form](https://bit.ly/lora-ext).


Thank You!

L.O.R.A