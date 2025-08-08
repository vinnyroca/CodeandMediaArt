<script>hljs.highlightAll();</script>

# Processing, Shapes and Color

Get started by openning up **Processing** on your computers.

## About Processing

[**Procesing**](https://processing.org/) is an open source project by [Casey Raes](https://reas.com/) and [Ben Fry](https://www.benfry.com/). It is a development environment in which artists and designers can both produce software art and learn how to code.

Processing conceptually builds on the idea that artists make use of forms of "programming" and instructions.

<figure> <img src = "../assets/images/code_01_martin_01.jpg"><figcaption> Agnes Martin. Untitled. 1999.</figcaption> </figure>

<figure> <img src = "../assets/images/code_01_lewitt_01.jpg"><figcaption> Soll LeWitt. Wall Drawing #260. 1975.</figcaption> </figure>

Processing is a tool for making software.

Processing's approach to software:

- Software is a unique medium with unique qualities
- Every programming language is a distinct material
- Sketching is necessary for the development of ideas
- Programming is not just for engineers

> "Processing...repositions programming in a way that is accessible to people who are
interested in programming but who may be intimidated by or uninterested in the type
taught in computer science departments. The computer originated as a tool for fast
calculations and has evolved into a medium for expression."
>
> -Casey Raes, Ben Fry - Processing: a programming handbook for visual designersand artists

**Processing** started in 2001 and has grown into the [**Processing Foundation**](https://processingfoundation.org/) which includes a web interpretation of Processing called [**P5.js**](https://p5js.org/), created by [Lauren Lee McCarthy](https://get-lauren.net/).

<figure> <img src = "../assets/images/code_01_raes_01.jpg"><figcaption> Still Life (RGB A), 2016, Casey Raes</figcaption> </figure>

<figure> <img src = "../assets/images/code_01_mccarthy_01.jpg"><figcaption> Auto, 2025, Lauren Lee McCarthy</figcaption> </figure>

## What is Processing?

<figure> <img src = "../assets/images/code_01_interface_01.jpg"><figcaption>Interface of Processing</figcaption> </figure>

### Interface of Processing

The interface of Processing is fairly simple:

- The large area in the center functions like a text editor where we can enter the instructions (also know as *code*) for our artworks.
- The play button at the top allows us to run our code.
- The stop button stops our code.
- The top menus allow us to access various options related to the Processing editor.

### Customize your Processing Editor

Navigate to **Tools** -> **Theme Selector** -> the select a theme.

<figure> <img src = "../assets/images/code_01_theme.gif"><figcaption>Selecting a Dark Mode theme</figcaption> </figure>

## Drawing with Code

### size()

[**size()**](https://processing.org/reference/size_.html) sets the size of our sketch.

**size()** takes in the parameters **width** and **height**.

size(width, height);

if we want our sketch to look be 800 pixels by 800 pixels we could write;

```java
//Set our sketch to 800 by 800 pixels
size(800,800);
```

Notice the "//" on the first line. This marks a comment. A comment is meant for human programmers and is not "read" by our computer.

Also notice the semi colon ";" at the end of the second line. For our purposes now, we can think of the semi colon as a period, marking the end of our line of code.

### background()

[backgroud()](https://processing.org/reference/background_.html) sets the background for our sketch.

Background can take in many different types of parameters including color values and images. For now we'll focus on setting a gray scale value.

background(gray) - gray is a decimal number between 0 and 255 with black being 0 and 255 being white.

To draw a middle gray background on our sketch:

```java
//Draw a middle gray background
background(127);
```

### ellipse()

[Reference](https://processing.org/reference/ellipse_.html)

`ellipse()` draws an ellipse to our screen.

`ellipse(a, b, c, d)`

Parameters

- **a**		 - x-coordinate of the ellipse
- **b**		- y-coordinate of the ellipse
- **c**		- width of the ellipse by default
- **d**		- height of the ellipse by default


<figure> <img src = "../assets/images/code_01_grid.jpg"><figcaption>Coordinate system of Processing</figcaption> </figure>

<figure> <img src = "../assets/images/code_01_sketchgrid.jpg" width = "400"; height = "400"><figcaption> Our current sketch with grid lines every 20 pixels</figcaption> </figure>

To draw a circle with a diameter of 200 in the center our screen we would write:

```java
ellipse(400,400,200,200);
```
<figure> <img src = "../assets/images/code_01_ellipse.jpg" width = "400"; height = "400"><figcaption> Our ellipse</figcaption> </figure>

<figure> <img src = "../assets/images/code_01_ellipsegrid.jpg" width = "400"; height = "400"><figcaption> Our ellipse on a coordinate grid</figcaption> </figure>

### Drawing Order

The order that we write our code is important! The computer "reads" our code from the top to bottom, just like we do. The drawing order in Processing is the same. Each shape is drawn on top of the previous shape.

Try adding a line of code to make a new circle in the center our our sketch with a diameter of 400 pixels.

```java
ellipse(400,400,400,400);
```

Because our code now looks like this:

```java
//Set our sketch to 800 by 800 pixels
size(800,800);

//Draw a middle gray background
background(127);
ellipse(400,400,200,200);
ellipse(400,400,400,400);
```
We are first drawing our background, then drawing our smaller ellipse, and, finally, the larger ellipse on top.

<figure> <img src = "../assets/images/code_01_ellipse_04.jpg" width = "400"; height = "400"><figcaption> Our larger ellipse covering our smaller ellipse</figcaption> </figure>

If we change the ordering of our ellipses:
```java
ellipse(400,400,400,400);
ellipse(400,400,200,200);
```
We'll see the smaller ellipse drawn on top of the larger one:

<figure> <img src = "../assets/images/code_01_ellipse_05.jpg" width = "400"; height = "400"><figcaption> </figcaption> </figure>

### rect()

[Reference](https://processing.org/reference/rect_.html) 

`rect()` draws a rectangle to our screen.

`rect(a, b, c, d)`	

Parameters

- **a**		- x-coordinate
- **b**		- y-coordinate
- **c**		- width 
- **d**		- height

Try drawing a square at (400,400) with a size and width of 200.

```java
rect(400,400,200,200);
```

What do you notice?

<figure> <img src = "../assets/images/code_01_rect_01.jpg" width = "400"; height = "400"><figcaption> </figcaption> </figure>

Unlike `ellipse()` which places the ellipse's center at the given (x,y) parameter, `rect()` places the rectangle at its top left corner. We can think of this as simliar to how you might draw out a rectangle on the desktop of your computer.

### rectMode()

[Reference](https://processing.org/reference/rectMode_.html)

We can modify how rectangles our drawn by using the function `rectMode()`.

`rectMode()` can take in a few parameters, but we will focus on `CENTER` and `CORNER`

`rectMode(CORNER)` is the default behavior with our rectangle being draw from the upper left corner.

`rectMode(CENTER)` will draw our retangle at the center of the given (x,y) coordinates.

If we were to write:

```java
rect(400,400,200,200);
rectMode(CENTER);
```

We would notice that nothing happens.

For `rectMode()` to work properly, we need to tell our computer to draw our rectangles in the center *before* drawing our rectangle.

If we write:
```java
rectMode(CENTER);
rect(400,400,200,200);
```
We get this result:

<figure> <img src = "../assets/images/code_01_rectMode_01.jpg" width = "400"; height = "400"><figcaption> </figcaption> </figure>

In essence, `rectMode()` will effect any rectangle after it is called. With this in mind, we can call `rectMode()` multiple times in a sketch to change the behavior of different rectangles.

Let's try writing:

```java
rectMode(CENTER);
rect(400,400,200,200);
rectMode(CORNER);
rect(400,400,200,200);
```
We can see out first rectangle remain in the center, while our second is drawn from the corner.

<figure> <img src = "../assets/images/code_01_rectMode_02.jpg" width = "400"; height = "400"><figcaption> </figcaption> </figure>

### fill()

`fill()` is simliar to `rectMode()` in that it changes the behavior of our shapes. `fill()` sets the color that shapes are filled with.

Before moving onto color, `fill()` can also take in a `gray` value between 0 - 255.

Writing `fill()` before our most recent rectangle:

```java
rectMode(CORNER);
fill(127);
rect(400,400,200,200);
```

It changes the color of our rectangle to gray.

<figure> <img src = "../assets/images/code_01_fill_01.jpg" width = "400"; height = "400"><figcaption> </figcaption> </figure>

## Class Exercise - Shapes, Fills, and Strokes

For this exercise, create the below 800 by 800 pixel drawing using the code we have learned so far.

Additionally, to get comfortable looking at Processing's reference, to complete this exercise, you'll need to look into the following functions and figure out how to use them in your sketch.

`line()` [(Reference)](https://processing.org/reference/line_.html) - Draws lines to screen

`stroke()` [(Reference)](https://processing.org/reference/stroke_.html) - Sets line and border color

`noStroke()` [(Reference)](https://processing.org/reference/noStroke_.html) - Turns off strokes

`strokeWeight()` [(Reference)](https://processing.org/reference/strokeWeight_.html) - Changes the thinkness of strokes

Be sure to comment your code to keep track of what you are writing!

Begin with:

```java
size(800,800);
background(200);
```

<figure> <img src = "../assets/images/code_01_exercise.jpg" ><figcaption> </figcaption> </figure>

Mavis Pusey, “Personante” (1990), oil on canvas, 53 ½ × 75 inches (courtesy the Neil Lane-Jacobson Family Foundation)

Quad tool

hint, you can draw shapes beyond the bound of the canvas

<figure> <img src = "../assets/images/code_01_marvis_01.jpg" ><figcaption> </figcaption> </figure>
<figure> <img src = "../assets/images/code_01_marvis_02.jpg" ><figcaption> </figcaption> </figure>
<figure> <img src = "../assets/images/code_01_marvis_03.jpg" ><figcaption> </figcaption> </figure>














