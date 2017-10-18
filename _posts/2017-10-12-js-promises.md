---
layout: post
title:  "Promise me Javascript would be easy"
date:   2017-10-12
---

Right, Javascript. I honestly think I've underestimated the power of Javascript and all its <!--more-->associated libraries and framework and very much overestimated myself and my knowledge of it. Over the week, I was doing Udacity courses on Javascript Design Patterns and Intro to AJAX. Which kind of opened my eyes a little. 

Javascript Design Patterns involved learning about the M-V-O (Model, View, Octopus - I really don't know why Octopus) framework of organising code instead of having it spaghetti-ed. So out from there, MV(Controller), MV(ViewModel), MV* were born! Javascript frameworks like [Knockout.js](http://knockoutjs.com/ "Knockmeout Documentation") employes MVVM, and got a bit of a taste from [Backbone.js](http://backbonejs.org/ "Backbone.js Documentation") but it takes more than a Udacity course to fully get the hang of those.. :( 

But anyway this post is regarding JS promises! Before that, I was learning about AJAX. Besides using a Javascript library like jQuery to handle ajax requests `$.ajax() //islove`, the most basic javascript command (which jQuery ajax calls fundamentally uses) is `XMLHttpRequest() //xhr.open(), .onload() etc`. Something new I learnt was the [Fetch API](https://fetch.spec.whatwg.org/ "fetch Fetch, geddit?") which uses JS promises to handle callbacks and results!

So finally, what are PROMISES? 

![Promises aren't always real, sowee](http://gph.is/1USqlsP)

Once upon a time, in the land of JS far far away, there lived a couple, called Callback and EventListener. 

```
var myBtn = document.querySelector('.custom-btn');

myBtn.addEventListener('load', function() {
  // do something
});

myBtn.addEventListener('error', function() {
  // ok handle error
});

```

They had a child called Async and Async gets upset when the event happened but Mom and Pop weren't ready to listen to her. So, Uncle Promise enters and proves to be very helpful for async success/failure! 

(ok I tried hahahha)

```
yourPromise()
    .then(data => { // do something when promise is fulfilled})
    .catch(err => { // handle error when promise is rejected})
```

```
new Promise(function(resolve[,reject]{
    var value = something();
    if (worked){
        resolve(value); //value gets passed as argument to then
    } else {
        reject();
    }
}).then(function(value){
    //success
}).catch(handleRejection);

```

- Promises can only succeed or fail once (settle once) (cannot fail/succeed twice or switch from success to failure)
- Promises that have failed / succeeded already can still have the correct callback even if the success/failure callback is added after the event has occured

Vocab
- Fulfilled(Resolved): Success!
- Rejected: Failure
- Pending: Waiting
- Settled: Either fulfilled or rejected

And how Fetch comes into the picture:
```
fetch(url, {
    method:'GET',
    mode: 'cors',
    redirect: 'follow',
    headers: new Headers({
        'Content-Type': 'text/plain'
        })
    })
    .then(response => { response.json(); }) //convert data into json object
    .then(data => { console.log(data.object); })
    .catch(err => { console.log(err); })

```

Fetch / Promises can be chained too! Am I the only one who imagines a golden retriever running back to me after a 'fetch'? Urge to scream atta boy!

So yeah, life changing? I'm not sure hahaha, just on the receiving end of new cool tech without having to suffer through the events and callbacks. But happy that I still learnt something new! Alright, that was tiring. 

[Promise you its good liao!](https://developers.google.com/web/fundamentals/primers/promises) [This too!](https://zellwk.com/blog/js-promises/)
