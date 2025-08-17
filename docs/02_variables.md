<script>hljs.highlightAll();</script>

<script>
// Get the header element
let header = document.querySelector('header');

// Get the height of the header
document.querySelectorAll('a[href^="#"]')
.forEach(function (anchor) {
    anchor.addEventListener('click', 
    function (event) {
        event.preventDefault();

        // Get the target element that 
        // the anchor link points to
        let target = document.querySelector(
            this.getAttribute('href')
        );
        
        let headerHeight = header.offsetHeight*2;
        
        let targetPosition = target
            .getBoundingClientRect().top - headerHeight;

        window.scrollTo({
            top: targetPosition + window.scrollY,
            behavior: 'smooth'
        });
    });
});
</script>

<style>
  #sketch_01-container {
    width: 85%;
    max-width: 400px;  
    margin: auto;
  }

  #sketch_01-container canvas {
    width: 85% !important;   
    height: auto !important;  
    display: block;
  }
</style>


<script src="../assets/sketches/p5.js"></script>
<script src="../assets/sketches/code_02/code_02_01.js"></script>
<script src="../assets/sketches/code_02/code_02_02.js"></script>
<script src="../assets/sketches/code_02/code_02_03.js"></script>
<script src="../assets/sketches/code_02/code_02_04.js"></script>
<script src="../assets/sketches/code_02/code_02_05.js"></script>
<script src="../assets/sketches/code_02/code_02_06.js"></script>
<script src="../assets/sketches/code_02/code_02_07.js"></script>
<script src="../assets/sketches/code_02/code_02_08.js"></script>
<script src="../assets/sketches/code_02/code_02_09.js"></script>
<script src="../assets/sketches/code_02/code_02_10.js"></script>
<script src="../assets/sketches/code_02/code_02_11.js"></script>
<script src="../assets/sketches/code_02/code_02_12.js"></script>
<script src="../assets/sketches/code_02/code_02_13.js"></script>
<script src="../assets/sketches/code_02/code_02_14.js"></script>
<script src="../assets/sketches/code_02/code_02_15.js"></script>





# Variables

> `RECAP:` What we learned last class:

> - What is p5.js?
> - How to code essential shapes
> - How to code colors
> - How to code attributes

> `PLAN:`

> - The flow of p5.js
> - `setup()` and `draw()`
> - How to write blocks of code
> - `mouseX` and `mouseY`
> - `mousePressed()`
> - `width` and `height`
> - Basic math in p5.js
> - How to make our own variables
> - How to use incrementation operators
> - `random()`
> - Independent exercise: Face Generator
## setup() and draw()

`setup()` -> The starting conditions of our p5 sketch.

`draw() ` -> The continuous loop of our p5 sketch.

<figure> <img src = "../assets/images/code_02_flow_01.png"><figcaption>Setup condition of a tennis match (Serena vs. Venus Williams, 2027)</figcaption></figure>
<figure> <img src = "../assets/images/code_02_flow_02.gif"><figcaption>Draw condition of a tennis match (Serena vs. Venus Williams, 2027)</figcaption></figure>
<figure> <img src = "../assets/images/code_02_flow_03.png"><figcaption>Setup condition of a Pong</figcaption></figure>
<figure> <img src = "../assets/images/code_02_flow_04.gif"><figcaption>Draw condition of a Pong</figcaption></figure>
<div id="01"></div>
<small>Setup condition of p5 sketch</small>

<div id="02"></div>
<small>Draw condition of p5 sketch (Click to restart)</small>

## Code Block

To understand the logic of setting up our sketch with `setup()` then continually drawing our sketch with `draw()` , we need to learn about the syntax of these functions. To do that we need to examine the code blocks.

In short, a code block is a section of code that is grouped together.

Example:

```js
function setup(){
	//some code
	//some more code
	//even more code
}
```

This code block above consists of a few elements:

1. `function` - This designates our code block as a function.
2. `setup()` - This is the name of our function. `setup()` is a special function that p5 already knows how to handle.
3. `{ }` - Open and closed curly brackets, these indicate where we will write our code.
4. **Body** - this is just the code that we will be writing.

>`NOTE`: Unlike when we were drawing without `setup()` and `draw()`, the order of these functions doesn't matter. We could reverse their positions and `setup()` would still run first. *However*, the order inside our code blocks *does* matter. Code will be executed from the top line to the bottom.

## Drawing with Variables

Let's start by going over all we did last class by using the following to draw a circle:

- `createCanvas()`
- `background()`
- `noStroke()`
- `fill()`
- `circle()`

```js
function setup(){
  createCanvas(400,400);
}

function draw(){
  background(12,123,220);
  noStroke();
  fill(255,194,10);
  circle(200,200,80);
}


```
<div id="03"></div>
<small>Result of the above code</small>

Looking more closely at `draw()`, we can see that even though draw is happening over and over again, it's drawing the same thing!

In order to make our sketch draw dynamically, we need to change the values of our sketch dynamically. We can do this with **variables**

## mouseX and mouseY

To start we'll use some of p5's built-in variables.

[Reference](https://p5js.org/reference/p5/mouseX/)

`mouseX` is a variable that always stores our mouse's horizontal position.
`mouseY` is a variable that always stores our mouse's vertical position.

These values update as we move our mouse!

As an experiment, let's replace our `circle()` x value with `mouseX`

```js
	circle(mouseX,200,80);
```
<div id="04"></div>

If we change the y value to `mouseY`, our circle will follow our mouse:

```java
	circle(mouseX,mouseY,80);
```
<div id="05"></div>


Let's see what happens if we move our `background()` to the top of our `setup()` and change the size of our circle to 10. Remember, this will cause `background()` to only run once.

```js
function setup(){
	createCanvas(400,400);
	background(12,123,220);
}

function draw(){
	noStroke();
	fill(255,194,10);
	circle(mouseX,mouseY,10);
}
```

<div id="06"></div>
<small>We made a painting program!</small>

Our sketch is now drawing our circle over and over again at our `mouseX` and `mouseY` position without redrawing the background.

## mousePressed()

`mousePressed()` is a special function within p5 that is called every time we click our mouse. We can use this to clear our drawing to start on a fresh background.

To use `mousePressed()` we need to make a new block of code. To clear our background when our mouse is pressed, we can add a new `background()` in our `mousePressed()` function.

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
<small>We made resetting painting program!</small>

As a note, `mouseX` and `mouseY` can replace any value in our sketch.

If I move my `background()` from `setup()` to `draw()` and replace my circle diameter with `mouseX`.

```js
	circle(200, 200, mouseX);
```
Our `mouseX` variable now changes the size of our circle!

<div id="08"></div>
<small>The size of our circle controlled by the position of our mouse!</small>

## In-class Exercise: Painting Program

Spend some time using the sketch we wrote to create your own painting program!

Try adjusting the opacity value in your `fill()` to get new results!

## width and height

Some other built in p5 variables include `width` and `height`.

These variables always store the width and height of my sketch.

```js
function setup(){
	createCanvas(400,400);
}

function draw(){
	background(12,123,220);
	noStroke();
	fill(255,194,10);
	circle(width/2,height/2,80);
}
```

<div id="09"></div>

## Arithmetic Operators

- `+` - Addition 
- `-` - Subtraction
- `*` - Multiplication
- `/` - Division
- `=` - Equals

## What is a Variable?

What is `mouseX` or `width`?

Variables are named storage locations in our computer's memory where we can store values.

`mouseX` and `width` are both named storage location where p5 is constantly updating their associated values.

<figure> <img src = "../assets/images/code_02_variable_01.png"width = "400px"><figcaption>Simplified drawing of variables in memory</figcaption></figure>

## Making our Own Variable

<div id="10"></div>

Let's work towards this example: our circle moves across our canvas and we can click to reset it's position to the start.

Click the canvas to reset our Circle!

### Steps to Making a Variable

- Stating `let`
- Name of variable
- Initialize variable

### let

We can use the keyword `let` to begin declaring a variable.

Example:

```js
let frog;
let toad;
let bird;
```
In JavaScript, we don't need to tell our editor what type of variable we are making. In other words, we don't need to let JavaScript know if our variable is a Number, a word, or something else. In part, it is up to the artist to keep track of what type of variable we want each new variable to be.

Some variable types:

JavaScript variables:

- Number: both decimal and whole numbers
- String: words or sentences
- ...and many more


### Name

We can name our variable anything, but it is good to use a name that allows us to keep track of what we want it to do. As an example, `circleX` to control the x position of our circle.

Some rules to follow:

- Lower case letter to start `Dog` vs. `dog`
- No numbers as first character `1dog` vs. `dog1`
- No spaces `black cat` vs. `blackCat`
- use camelCase `blackcat` vs. `blackCat`
- Don’t use reserved keywords or existing p5 variable names.

### Initialize

Give our variable an initial value to start with.

We can do this within a block of code:

```js
let circleX;

function setup(){
	createCanvas(400,400);
	circleX = 40;
}
```
Or, when we declare our variable:

``` js
let circleX = 40;

function setup(){
	createCanvas(400,400);
}
```


### Variable Scope

Variables have two levels of scope, **global** and **local**.

We won't go into too much detail about this now, but in short:

**Global** variables are declared at the top of our sketch. They can be used within any block of code.

**Local** variables are declared within a function and can only be used within that function.

### Making our Circle Move

After we declare the type and name of our variable and initialize its value, we should have this sketch:

```js
let circleX = 0;

function setup(){
  createCanvas(400,400);
  
}

function draw(){
  background(12,123,220);
  noStroke();
  fill(255,194,10);
  circle(200,200,80);
}
```

Then we need to replace our circle's X value with our new variable:

```java
circle(circleX,200,80);
```

Lastly, we need a way to increase our variable over time. For this, we can use an incrementation operator.

## Incrementation Operators

We need to increase our variable by a certain value, then assign that new value back to our variable.

- `ourVariable = ourVariable+1` = `ourVariable+=1` = `ourVariable++`
- Subtraction - `ourVariable-=2`
- Multiplication - `ourVariable*=2`
- Division - `ourVariable/=2`

To move our circle, we can increment our variable `circleX` by `1` each time `draw()` is called.

```js
let circleX = 0;

function setup(){
  createCanvas(400, 400);
  
}

function draw(){
  background(12, 123, 220);
  noStroke();
  fill(255, 194, 10);
  circle(circleX, 200, 80);
  circleX += 1;
}
```


<div id="11"></div>

<small>This example is repeating. Some extra code was added to make this example for the website. We'll learn more about this next class.</small>

We can change how fast the circle is moving by changing incrementation value.

```java
  circleX += 10;
```
<div id="12"></div>

<small>This example is repeating. Some extra code was added to make this example for the website. We'll learn more about this next class.</small>

## random()
[Reference](https://p5js.org/reference/p5/random/)

Syntax:	

- `random(max)`
	- returns a random value between **0** and **max**
- `random(min,max)` 
	- returns a random value between **min** and **max**

Parameters

- **min**	- (Number) lower limit
- **max**	- (Number) upper limit

This is the first function we’ve used that returns a value!

### Using Random

We can use `random()` to give `circleX` a random value when we press our mouse!

```js
function mousePressed()
{
  circleX = random(0,width);
}
```

<div id="13"></div>


Or, by moving our `background()` and adding some more variables, we can make many circles appear randomly on our screen.

Variables:

- `x`
- `y`
- `a`
- `r`
- `b`
- `g` 

``` js
let x;
let y; 
let a;
let r;
let g;
let b;

function setup(){
  createCanvas(400, 400);
  background(12, 123, 220);
}

function draw(){
  
  noStroke();
  
  y = random(height);
  x = random(width);
  a = random(60,200);
  r = random(200,255);
  g = random(200,255);
  b = random(100);
  
  fill(r, g, b,a);
  circle(x, y,10);
  
}
```

<div id="14"></div>

## Independent Exercise: Face Generator

**DUE: By beginning of next class**

<div id="15"></div>

**Click on the above sketch to make a random face!**

Open up the code template below and go to **File** -> **Duplicate** Read this code and play around with it to figure out how it works - a large part of learning to program is by reading the code of others!

[Code Template](https://editor.p5js.org/pickpanpuck/sketches/I9p11QaWe)

Use this code to make your own custom face generator! Maybe you add a nose, or hair! Or maybe you start from scratch and try to make your own custom generator. This is only an exercise, so play around and see what you can come up with! The only requirement of this exercise is that you add one more shapes that has its size, position, or color, controlled by a randomized variable. See if you can see the relationships between the different shapes to add your own features.

### Submit

**To Canvas:**

1. Your p5 edit link

**To Discord:**

1. Your p5 edit link
2. Three of your favorite faces captured as screenshots.








