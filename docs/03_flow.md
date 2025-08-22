<script src="../assets/sketches/p5.js"></script>
<script src="../assets/sketches/code_03/code_03_pong.js"></script>
<script src="../assets/sketches/code_03/code_03_01.js"></script>
<script src="../assets/sketches/code_03/code_03_02.js"></script>
<script src="../assets/sketches/code_03/code_03_03.js"></script>
<script src="../assets/sketches/code_03/code_03_04.js"></script>
<script src="../assets/sketches/code_03/code_03_05.js"></script>
<div id ="pong"></div>

# Flow

> `RECAP:` What we learned last class:

> - `setup()` and `draw()`
> - How to write blocks of code
> - `mouseX` and `mouseY`
> - `mousePressed()`
> - `width` and `height`
> - Basic math in p5.js
> - How to make our own variables
> - How to use incrementation operators
> - `random()`

> `PLAN:`

> - `if`
> - boolean expressions
> - relational operators
> - `else` and `else if`
> - logical operators
> - boolean data type


Conditional Statement

## Conditional: if

A conditional statement, often called an "if statement", is a block of code that only runs if a certain *condition* is met. We can think of conditions as statements that start with "if".

Thinking back to our exercise on James Turrell. We could say:

```
If the sky is light blue, the lights turn orange.

If the sky is black, the light turn white.
```

Or, as an example relevant to our moving ball from last class:

```
If the circle reaches the edge of the sketch,
move in the opposite direction.
```

We'll slowly work towards this example, but first we need to know what an `if` statement looks like in code.

```js
if(...some condition...){
	//run this code
}
```
With the parentheses of our `if` statement, we are looking to see if some condition is true. If it is true, the block of code will run. If it is not true, p5 will skip over the block of code and move on.

We call the condition the if statement is checking a **boolean expression**.

One way to create boolean expression is by using **relational operators**.

## Relational Operators

Relational operators compare the values of two numbers and returns a value of true or false.

- `>` - greater than
- `<` - less than
- `>=` - greater than or equal to
- `<=` - less than or equal to
- `==` - equal to
- `!=` - not equal to

For example:

0 > 255 = true
54.5 < 54.4 = false

Relational operators work best when we use them with variables.

Let's use an `if` statement and a **relational operator** in our code to change the color of our sketch when our mouse is on the right side of our canvas.

<div id ="01"></div>

```js
function setup() {
  createCanvas(400, 400);
}

function draw() {
	background(255, 255, 0);
  if (mouseX > width / 2) {
    background(255, 0, 0);
  }

  stroke(0, 0, 255);
  strokeWeight(4);
  line(width / 2, 0, width / 2, height);
}
```

## Conditional: else

We can use an `else` statement in conjunction with an `if` statement. And `else` statement is a block of code that will only run if the condition within our if statement is *not* met.

A pseudo code example might look like:

```js
if(my birthday){
	//Sing Happy Birthday!
} else{
	//Wait for my Birthday
}
```

We can use else in our screen color example to check when our mouse is on the right side of the screen.

<div id ="02"></div>

```js
function setup() {
  createCanvas(400, 400);
}

function draw() {
  if (mouseX > width / 2) {
    background(255, 0, 0);
  } else {
    background(255, 255, 0);
  }

  stroke(0, 0, 255);
  strokeWeight(4);
  line(width / 2, 0, width / 2, height);
}
```

## Conditional: else if

In addition to else, we can use an `else if` statement after our `if` statement to check for specific conditions. `else if`, like `if`, checks to see if a boolean expression is true.

If we change the size of our canvas to 300 by 300 or 600 by 600, we can easily divide our canvas into thirds. From there we can use an `if`, `else if`, and `if` statement to change the color of our canvas when our mouse is in the left, right, and center.

<div id ="03"></div>

```js
function setup() {
  createCanvas(300, 300);
}

function draw() {
  if (mouseX < 100) {
    background(0, 0, 255);
  } else if (mouseX < 200) {
    background(0, 255, 0);
  } else {
    background(255, 0, 0);
  }

  stroke(0);
  line(100, 0, 100, height);
  line(200, 0, 200, height);
}
```

## Class Exercise: Conditional

Use what we have learned thus far to make the below example. Start with a 400 by 200 canvas.
As a hint, you'll need to use two `else if` statements! No need to include the "HOVER TO START" message. That is just to keep the class website tidy!

<div id ="04"></div>

## Logical Operators

Logical Operators:

- `&&` - And
- `||` - Or
- `!` - Not

We can use logical operators to check for multiple boolean expressions.

Let's work towards making this hover effect!

<div id ="05"></div>

To begin, we could start by detecting in our mouse passes over the left side of our square.

```js
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(200);

  if (mouseX > 100) {
    fill(255);
  } else {
    fill(0);
  }

  noStroke();
  rectMode(CENTER);
  square(200, 200, 200);
}
```

We can use the logical operator `&&` to check if our `mouseX` and `mouseY` are within our circle.

```js
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(200);

  if (mouseX > 100 && mouseX < 300 && mouseY > 100 && mouseY < 300) {
    fill(255);
  } else {
    fill(0);
  }

  noStroke();
  rectMode(CENTER);
  square(200, 200, 200);
}
```

We can also simply this code by replacing the x , y and width of our square with variables. If I keep my rectMode using CENTER, I can check my mouse position at the relationship between my x or y variable and half my width. This allows our code to work when our square is at any location and has any size.

```js
let x = 200;
let y = 200;
let w = 200;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(200);

  if (mouseX > x-w/2 && mouseX <x+w/2 && mouseY > y-w/2 && mouseY<y+w/2 ) {
    fill(255);
  } else {
    fill(0);
  }

  noStroke();
  rectMode(CENTER);
  square(x, y, w);
  fill(255)
  circle(x,y,10);
}
```






if
it is a new block of code
only executed if a certain condition is what 
what goes inside our parantheses
boolean expression
relational operators
compares two values
use relation operators with variable
change color based on side of mouse

else
when there is a relationshp between different things

else if

exercise

logical operators
and , or and not

roller over

exercise fadded circle - dist();

bouncing ball

==

show mistake
x = x-7;
x = x+7;

show print

variable for speed

multiply -1

or statement

Y

gravity

mousePressed

another variable, mouse pressed 

boolean = !boolean.

indpendent exercise



