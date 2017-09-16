---
layout: post
title: "New Jekyll Gems"
date: 2017-04-14
---
It has been eons since I've touched this... Shamefully, I am back, even though I should have been back to edit this earlier haha. School after internship last year was pretty busy with <!-- more --> entre and ML, but this term was much more breathable. 

So upon coming back. Did some major changes which included:
- Having a proper `Gemfile`
- Installing `jekyll-contentblocks` and `jekyll-assets` gems

`jekyll-contentblocks` is really helpful. It is basically I don't even know how to explain. 
In `_layouts/`, `default.html`:


```
{% contentblock scripts %}
```

Then in your html file that uses the default layout, you can just use:


```
{% contentfor scripts %}
	/*** Scripts go here ***/
{% endcontentfor %}
```

It is pretty neat I love it. 

`jekyll-assets` is an asset pipeline which is a pain in my ass. Basically after installing the gem, editing the config file, creating a _assets folder, move the _sass folder and css folder into stylesheets inside of _assets. 

Alot of issues came up -_- like my assets disappearing (pictures not showing, then after it is okay on my local server, it disappeared on github pages -_-). So the asset_path is useful, but the syntax was confusing cos different sources said different things really. Had to change all the css to scss to use the asset_path properly. And the github page not rendering the assets turned out to be because gh doesn't support such dependencies?? Idk, had multiple emails of github being unable to build the page. 

So in the end, the easy way out is to remove the whole folder, and merely upload the _site folder which is generated while running jekyll serve on my local server. So now I have two repos:
- `kohrongying.github.io` that has only the contents in the `_site` folder
- `ghpagerepo` that has all the other layouts and htmls and stuff 

SIBEI ANNOYING. Ugh, then somehow assets keep cocking up, duno is it the config or whatever. So basically before pushing the _site to git, have to `rm -rf .asset-cache` in order for the assets to render correctly on gh pages. 

And then there was the bootstrap issue. Lol resolved it by adding it in the gemfile and importing bootstrap in each of my scss file.. But I don't think that's the best way... 

So hope to spend more time on the portfolio page! 
Landing page is sort of ... 可以见人哈哈. Another day fellas! 