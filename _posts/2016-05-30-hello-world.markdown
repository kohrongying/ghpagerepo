---
layout: post
title:  "Hello World"
date:   2016-05-30
---

Okay. So Codeacademy led to me installing jekyll and setting up this static webpage. Only got down to trying out the things last weekend. Was really really frustrated yesterday <!-- more --> because I was editing the page in the _sites > page > index.html and realising that everytime I pasted code there, it'll just disappear ugh. Then figured out it was because of the markdown. Then this morning started the whole long drawn process of understanding how to organise things here.



Finally I think some light went through. 
Added bootstrap.css through a link inside the `_includes` `head.html` directory. Okay most accomplished thing today. Okay but 话说回来, should have a mock up before trying to do anything right lol. 

But okay is it time for lunch yet? 

Edit: I realised I completedly missed the whole point of this post. It was supposed to note down what I've learnt. Okay. So basically to add a page, there are some methods but this was what I chose:

1. In the root folder, create a folder for your page. Eg. Contact. 

2. Create a file called index.html. 

* This is the basic layout of the index file. Notice that I didn't add in a layout. This is because I want to customise the page to my liking. 

* I found it frustrating as I wanted my own css file for each page, but I didn't want to add to the thousands of lines of code in `main.scss`. So at first I tried to add a folder assets and add in each page's css there but found that it didn't work that well, as the link to the css had to be added to the `head.html` which was in `_includes' but I couldn't do it.. 

+ So whatever, I just created another folder and figured it would be more convenient for each page to have its own assets. 

```
---
title: Tab Four
permalink: /tabfour/
---
<!DOCTYPE html>
<html>
  <head>
 
    <link rel="stylesheet" href="assets/css/styles.css" >
  </head>
  <body>
    your content
  </body>

</html>
```

3. After creating it, a folder with the page name will be created in `_site` and the index.html is the html with everything included inside. 

4. Also when writing this post, have to name the post as yyyy-mm-dd-postname and better to have no catergories bah, otherwise everything will show up under `_site` and me no likey.

5. Finally getting the hang of things - whereby understanding that Jekyll is a parsing engine. Once parsed, Jekyll stores the result in a self-contained static _site folder. The intention here is that you can serve all contents in this folder statically from a plain static web-server. 

**bold** or __bold__

*italics* or _italics_

[textlink](http://kohrongying.github.io)


[really helpful website](http://pixelcog.com/blog/2013/jekyll-from-scratch-core-architecture/)


# This is an <h1> tag
---------------------

## This is an <h2> tag
---------------------

###### This is an <h6> tag


| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |


> Blockquotes are very handy in email to emulate reply text.
> This line is part of the same quote.