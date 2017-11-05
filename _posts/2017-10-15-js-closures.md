---
layout: post
title:  "I need some Closure, JS"
date:   2017-10-16
---

Javascript functions are not only functions, but also closures.

According to [MDN web docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures), a closure is the combination of a function and the lexical environment within which the function was declared. 

Lexical - basically means the environment where the function can access other variable. For example, an inner function (A) nested in an outer function (B), can access local variables that are declared in B. But outer function does not have access to inner function's variables. 

```
const glob = 'This can be accessed by everyone';
const init = () => {
    const name = 'Only if init is called';

    const anotherfunction = _ => {
        const location = 'inside anotherfunction';
        alert(name);
    }
}
```

Inner functions are the closures.

Closure can access variables in 3 scopes:
- Variables in its own scope (const location)
- Variables in its parent function scope (const name)
- Variables in global namespace (const glob)

Closures' most widely used application is in building and making functions, as well as in building private methods and variables.

```

function makeAdder(x) {
  return function(y) {
    return x + y;
  };
}

const add5 = makeAdder(5);
const add10 = makeAdder(10);

console.log(add5(2));  // 7
console.log(add10(2)); // 12


var counter = (function() {
  var privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }
  return {
    increment: function() {
      changeBy(1);
    },
    decrement: function() {
      changeBy(-1);
    },
    value: function() {
      return privateCounter;
    }
  };   
})();

console.log(counter.value()); // logs 0
counter.increment();
counter.increment();
console.log(counter.value()); // logs 2
counter.decrement();
console.log(counter.value()); // logs 1

```

And today I found out about function declaration `function init()` vs function expression `const init = function()` and how function hoisting only hoists declared functions (the former) to the top, but not for function expressions. 

And I'm going to START USING LET AND CONST, BYEBYE VAR. And hello you sexy arrow =>. Meet smiley =). 

IIFE is termed as Immediately Invoked Function Expression.

Because of [this!](https://medium.com/coderbyte/a-tricky-javascript-interview-question-asked-by-google-and-amazon-48d212890703)

This is left hanging sorray.