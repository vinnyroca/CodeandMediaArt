# In-class Exercise: Painting Program

## Description

Using this sketch as a base, Spend some time to create your own painting program!

Be sure to play with `fill()`, `stroke()`, and other attributes we have learned in class thus far.

What will your program do when you press your mouse?
<script src="/assets/sketches/p5.js"></script>
<script src="/assets/sketches/code_02/code_02_07.js"></script>

```js
function setup(){
    size(400,400);
    background(12,123,220);
}

function draw(){
    noStroke();
    fill(255,194,10);
    circle(mouseX,mouseY,10);
}

function mousePressed(){
    background(12,123,220);
}
```

<div id="07"></div>