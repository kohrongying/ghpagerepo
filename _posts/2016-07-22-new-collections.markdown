---
layout: post
title:  "New Collections"
date:   2016-07-22
---
So it has been long since the last posting, finally got down to managing this more often, because this is not a hectic week at all. So got around to adding more features on the testing page, <!-- more --> as well as creating my own colour palette (with colours from elsewhere duh), but still proud because it was coded from scratch, while there was also a lot of googling on my end on how to submit forms and how to copy to clipboard, but it was still quite a cool simple project. 

Today was trying to create subpages through this thing called Jekyll Collections. So now I can access like sitename/parent/child etc. Which is great! 

```
collections:
- expt

collections:
  expt:
    output: true
    permalink: /expt/:path/  	
```
Needs to be added to the config file and, 

```
{% for expt in site.expt %}
  <div class="container">
    <div class="row">
      <h2><a href="{{ expt.url }}">{{ expt.title }}</a></h2>
    </div>
  </div>
{% endfor %}
```
Needs to be added to the html or md of the parent page that is going to be rendered. Cool cool. Feels like its going to be a super long time till something concrete turns about but who cares. :)     