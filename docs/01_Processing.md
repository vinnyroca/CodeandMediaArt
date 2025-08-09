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


# Processing, Shapes and Color

Get started by opening up **Processing** on your computers.

## About Processing

[**Procesing**](https://processing.org/) is an open source project by [Casey Raes](https://reas.com/) and [Ben Fry](https://www.benfry.com/). It is a development environment in which artists and designers can both produce software art and learn how to code.

Processing conceptually builds on the idea that artists make use of forms of "programming" and instructions.

<figure> <img src = "../assets/images/code_01_martin_01.jpg"><figcaption> Agnes Martin. Untitled. 1999.</figcaption> </figure>

<figure> <img src = "../assets/images/code_01_lewitt_01.jpg"><figcaption> Soll LeWitt. Wall Drawing #260. 1975.</figcaption> </figure>

Processing is a tool for making software.

Processing's approach to software:

- `Software is a unique medium with unique qualities`
- `Every programming language is a distinct material`
- `Sketching is necessary for the development of ideas`
- `Programming is not just for engineers`

> "Processing...repositions programming in a way that is accessible to people who are
interested in programming but who may be intimidated by or uninterested in the type
taught in computer science departments. The computer originated as a tool for fast
calculations and has evolved into a medium for expression."
>
> -Casey Raes, Ben Fry - Processing: a programming handbook for visual designersand artists

**Processing** started in 2001 and has grown into the [**Processing Foundation**](https://processingfoundation.org/) which includes a web interpretation of Processing called [**P5.js**](https://p5js.org/), created by [Lauren Lee McCarthy](https://get-lauren.net/).

## Artist Spotlight

### Casey Raes
> American, b. 1972

> [Artist Website](https://reas.com/)

#### *Atomism*

Series, 2012-Present

<figure> <img src = "../assets/images/code_01_raes_01.jpg"><figcaption> Casey Raes. Still Life (RGB A). 2016.</figcaption> </figure>

<figure> <img src = "../assets/images/code_01_raes_02.jpg"><figcaption> Casey Raes. RGB-056-006-080-823-715. 2015.</figcaption> </figure>

<figure> <img src = "../assets/images/code_01_raes_03.jpg"><figcaption> Casey Raes. RGB-056-006-080-823-715. 2015.</figcaption> </figure>

### Lauren Lee McCarthy
> American, b. 1987

> [Artist Website](https://get-lauren.net/)

#### *Auto*

2025

[Website](https://get-lauren.net/Auto)

<figure> <img src = "../assets/images/code_01_mccarthy_01.jpg"><figcaption>Lauren Lee McCarthy. Auto. 2025</figcaption> </figure>

#### *Surrogate*

2021

[Website](https://get-lauren.net/Surrogate)

<figure> <img src = "../assets/images/code_01_mccarthy_02.jpg"><figcaption>Lauren Lee McCarthy. Surrogate. 2021</figcaption> </figure>

## What is Processing?

We spent our first day drawing with are human understandable instructions. To write instructions for our computer to make artworks with our computer, we need to write our instructions in a language the computer understanding.

To do that we are going to be writing instructions for our code in the Processing programming language.

Processing is built on **Java.**

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

Code is written in particular "languages." These languages are not as complicated as "human" languages, but each language is slightly different and expects you to write your code is specific ways.

### size()
[Reference](https://processing.org/reference/size_.html)

`size()` is a function that sets the size of our sketch.

The way to call a function, sometimes refereed to as a command, is the function name followed by open and closed parentheses.

Functions are very similar to how you might have learned them in your math classes, such as f(x).

A function takes in a value, x, and often times, returns a value, f(x).

It is important to note that not all functions take in values, but we will take about that a bit later.

`size()`, for example, takes in the parameters **width** and **height**.

The reference for `size()` would look something like this:

---

Syntax: `size(a, b)`

Parameters

- **a**		- width
- **b**		- height
---

**Syntax** is the word we use to describe the particular writing style of a programming language. Every programming language has a different **syntax**.

The syntax for size is that it takes in and a and b parameter.

a is equal to the width of our sketch and b is equal to our height.

If we want our sketch to look be 800 pixels by 800 pixels we could write;

```java
//Set our sketch to 800 by 800 pixels
size(800,800);
```

Notice the "//" on the first line. This marks a comment. A comment is meant for human programmers and is not "read" by our computer.

Also notice the semi colon ";" at the end of the second line. For our purposes now, we can think of the semi colon as a period, marking the end of our line of code.

### Errors

If I forget to add a semicolon, my sketch won't run, and Processing will let me know I have an error.

```java
//Set our sketch to 800 by 800 pixels
size(800,800)
```

<figure> <img src = "../assets/images/code_01_error.jpg"><figcaption></figcaption> </figure>

### background()

[Reference](https://processing.org/reference/background_.html)

`background()` is a function that sets the background for our sketch.

`background()` can take in many different types of parameters including color values and images. For now we'll focus on setting a gray scale value.

---

Syntax: `background(a)`

Parameters

- **a**		- Gray value (0-255)

---

To draw a middle gray background on our sketch:

```java
//Draw a middle gray background
background(127);
```

### circle()

[Reference](https://processing.org/reference/circle_.html)

`circle()` is a function that draws an circle to our screen.

---

Syntax: `circle(a, b, c)`

Parameters

- **a**		 - x-coordinate of the circle
- **b**		- y-coordinate of the circle
- **c**		- width and height

---


<figure> <img src = "../assets/images/code_01_grid.jpg"><figcaption>Coordinate system of Processing</figcaption> </figure>

<figure> <img src = "../assets/images/code_01_sketchgrid.jpg" width = "400"; height = "400"><figcaption> Our current sketch with grid lines every 20 pixels</figcaption> </figure>

To draw a circle with a diameter of 200 in the center our screen we would write:

```java
circle(400,400,200);
```
<figure> <img src = "../assets/images/code_01_ellipse.jpg" width = "400"; height = "400"><figcaption> Our circle</figcaption> </figure>

<figure> <img src = "../assets/images/code_01_ellipsegrid.jpg" width = "400"; height = "400"><figcaption> Our circle on a coordinate grid</figcaption> </figure>

### Drawing Order

The order that we write our code is important! The computer "reads" our code from the top to bottom, just like we do. The drawing order in Processing is the same. Each shape is drawn on top of the previous shape.

Try adding a line of code to make a new circle in the center our our sketch with a diameter of 400 pixels.

```java
circle(400,400,400);
```

Because our code now looks like this:

```java
//Set our sketch to 800 by 800 pixels
size(800,800);

//Draw a middle gray background
background(127);
circle(400,400,200);
circle(400,400,400);
```
We are first drawing our background, then drawing our smaller circle, and, finally, the larger circle on top.

<figure> <img src = "../assets/images/code_01_ellipse_04.jpg" width = "400"; height = "400"><figcaption> Our larger circle covering our smaller circle</figcaption> </figure>

If we change the ordering of our circles:
```java
circle(400,400,400);
circle(400,400,200);
```
We'll see the smaller circle drawn on top of the larger one:

<figure> <img src = "../assets/images/code_01_ellipse_05.jpg" width = "400"; height = "400"><figcaption> </figcaption> </figure>

### rect() and square()

[Reference](https://processing.org/reference/rect_.html) 

`rect()` draws a rectangle to our screen.

---

Syntax: `rect(a, b, c, d)`	

Parameters

- **a**		- x-coordinate
- **b**		- y-coordinate
- **c**		- width 
- **d**		- height

---

For drawing a rectangle with equal sides, we can also use the `square()` function. Although for most of this course you might find it helpful to change the sides of your rectangle independently of one another.

---

Syntax: `square(a, b, c)`	

Parameters

- **a**		- x-coordinate
- **b**		- y-coordinate
- **c**		- width and height

---

Try drawing a square at (400,400) with a size and width of 200.

```java
rect(400,400,200,200);
```

What do you notice?

<figure> <img src = "../assets/images/code_01_rect_01.jpg" width = "400"; height = "400"><figcaption> </figcaption> </figure>

Unlike `circle()` which places the circle's center at the given (x,y) parameter, `rect()` places the rectangle at its top left corner. We can think of this as similar to how you might draw out a rectangle on the desktop of your computer.

### rectMode()

[Reference](https://processing.org/reference/rectMode_.html)

We can modify how rectangles are drawn by using the function `rectMode()`.

`rectMode()` can take in a few parameters, but we will focus on `CENTER` and `CORNER`

`rectMode(CORNER)` is the default behavior with our rectangle being draw from the upper left corner.

`rectMode(CENTER)` will draw our rectangle at the center of the given (x,y) coordinates.

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

[Reference](https://processing.org/reference/fill_.html)

`fill()` is similar to `rectMode()` in that it changes the behavior of our shapes. `fill()` sets the color that shapes are filled with.

Before moving onto color, `fill()` can also take in a `gray` value between 0 - 255.

---

Syntax: `fill(a)`

Parameters

- **a**		- Gray value (0-255)

---

Writing `fill()` before our most recent rectangle:

```java
rectMode(CORNER);
fill(127);
rect(400,400,200,200);
```

It changes the color of our rectangle to gray.

<figure> <img src = "../assets/images/code_01_fill_01.jpg" width = "400"; height = "400"><figcaption> </figcaption> </figure>

## Saving

Let's save and name our sketch.

We can press **Ctrl + Shift + S** or navigate to **File** -> **Save As**

Your Processing sketch will save as a folder. Inside that folder will be your sketch, save as a .pde file.

To save our file as we continue sketching, we can press **Ctrl+S**.

## Drawing Exercise

Navigate to **File** -> **New**

For this exercise, create the below 800 by 800 pixel drawing using the code we have learned so far.

Additionally, to get comfortable looking at Processing's reference, to complete this exercise, you'll need to look into the following functions and figure out how to use them in your sketch.

`line()` [(Reference)](https://processing.org/reference/line_.html) - Draws lines to screen

`stroke()` [(Reference)](https://processing.org/reference/stroke_.html) - Sets line and border color

`noStroke()` [(Reference)](https://processing.org/reference/noStroke_.html) - Turns off strokes

`strokeWeight()` [(Reference)](https://processing.org/reference/strokeWeight_.html) - Changes the thickness of strokes

Be sure to comment your code to keep track of what you are writing!

Begin with:

```java
size(800,800);
background(200);
```
<figure> <img src = "../assets/images/code_01_exercise.jpg" ><figcaption> </figcaption> </figure>

## Color

[Color Reference](https://processing.org/tutorials/color)

[Josef & Anni Albers Foundation](https://www.albersfoundation.org/)

<figure> <img src = "../assets/images/code_01_albers_00.jpg"width = "400";><figcaption>Anni Albers. Black White Yellow. 1926.</figcaption> </figure>

<figure> <img src = "../assets/images/code_01_albers_02.jpeg"width = "400"; height = "400" ><figcaption>Josef Albers. Homage to the Square: "Ascending". 1953.</figcaption> </figure>

<figure> <img src = "../assets/images/code_01_albers_01.jpg" width = "400"; height = "400"><figcaption>Recreation of Josef Albers' painting in Processing</figcaption> </figure>

Code:

```java
//Home to the Square: "Ascending"

size(800, 800);

background(247, 238, 220);

//Attributes
noStroke();
rectMode(CENTER);

//Squares
fill(138, 200, 237);
rect(400, 400, 780, 780);

fill(196, 195, 194);
rect(400, 440, 630, 630);

fill(255, 250, 244);
rect(400, 478, 470, 470);

fill(254, 226, 21);
rect(400, 517, 313, 313);
```

If we copy this sketch into processing, we notice our `fill()` looks quite different. Before we would write `fill(127);` and see our shapes turn gray.

Now we can see the syntax is `fill(a, b, c)`. Processing by default represents colors in Red, Blue and Green values, or RGB for short.

---

Syntax: `fill(a,b,c)`

- **a**		- amount of red (0-255);
- **b**		- amount of green (0-255);
- **c**		- amount of blue (0-255);

---

This is also true for our `background()`

---

Syntax: `background(a,b,c)`

- **a**		- amount of red (0-255);
- **b**		- amount of green (0-255);
- **c**		- amount of blue (0-255);

---


Try changing some of the colors in the Albers' sketch to see the effects.

With RGB, we "mix" red, green, and blue together to get different results.

For example if we wanted to fill our shapes will yellow, we would write:

```java
//Yellow in RGB
fill(255,255,0);
```

<figure> <img src = "../assets/images/code_01_color_01.jpg" width = "400"; height = "400"><figcaption>A yellow circle</figcaption> </figure>

Mixing RGB values leads to a variety of colors:

```java
//purple
fill(255,0,255);

//cyan
fill(0,255,255);

//white
fill(255,255,255);

//black
fill(0,0,0);
```
### Color Selector

We can also see the RGB values of colors using Processing's built in color picker.

Navigate to **Tools** -> **Color Selector**

<figure> <img src = "../assets/images/code_01_color_02.jpg" width = "400"; ><figcaption></figcaption> </figure>

### Color Exercise

Using the the **Color Selector** tool for reference, create and 800 x 800 image of three or more shapes that, next to each other, form a gradient. Choose a background color that compliments your gradient.

Example:

<figure> <img src = "../assets/images/code_01_color_03.jpg" width = "400"; ><figcaption>Three circles forming a color gradient</figcaption> </figure>


## Opacity

<figure> <img src = "../assets/images/code_01_albers_03.jpg "width = "380"; height = "500" ><figcaption>Josef Albers' opacity illusion painting</figcaption> </figure>

<figure> <img src = "../assets/images/code_01_albers_04.jpg" width = "380"; height = "500"><figcaption>Recreation of Josef Albers' painting using opacity</figcaption> </figure>

Code:

```java
background(134, 119, 90);

noStroke();
rectMode(CENTER);

fill(97, 88, 89);

//Three rectangles behind
rect(337.5, 500, 520, 170);
rect(337.5, 750, 520, 170);
rect(337.5, 250, 520, 170);

//Main Center rectangle
fill(254, 255, 223);
rect(337.5, 500, 350, 850);


//Center Rectangles with Opacity
fill(97, 88, 89, 230);
rect(337.5, 750, 350, 170);

fill(97, 88, 89, 180);
rect(337.5, 500, 350, 170);

fill(97, 88, 89, 100);
rect(337.5, 250, 350, 170);
```
With our colors for our `fill()`, there is a hidden fourth parameter, **alpha**, commonly known as opacity!

---

Syntax: `fill(a, b, c, d)`

- **a**		- amount of red (whole number  0-255)
- **b**		- amount of green (whole number 0-255)
- **c**		- amount of blue (whole number 0-255)
- **d**		- alpha (decimal number 0-255)

---

We'll talk about this more next class, but for now note the while **alpha** can be a decimal number(e.g. 1.67, 3.14, 88.666), our RGB values can only be entered in as whole number (e.g. 0, 45, 73).

In programming, a whole numbers is called an **integer** or `int`, for short. A decimal number is called **floating-point number**, or `float` for short. We will go into more detail on this next class.

<figure> <img src = "../assets/images/code_01_opacity_01.jpg" width = "200px"><figcaption>Cicle at full opacity</figcaption> </figure>

<figure> <img src = "../assets/images/code_01_opacity_02.jpg" width = "200px"><figcaption>Cicle at half opacity</figcaption> </figure>

<figure> <img src = "../assets/images/code_01_opacity_03.jpg" width = "200px"><figcaption>Cicle at a quarter opacity</figcaption> </figure>

<figure> <img src = "../assets/images/code_01_opacity_04.jpg" width = "200px"><figcaption>Notice how the background color blends with my shape's fill color</figcaption> </figure>

## Opacity Exercise

Try creating an image similar to the one you created for the Color Exercise. Instead of using multiple colors, use one color and change the alpha parameter of the `fill()` function.

## Independent Exercise: Drawing in Color

**Due next at the start of next class session.**

### Part 1: Turrell

At either sunrise or sunset between now and our next class session attend the lighting program at James Turrell's *Dividing the Light* at Pomona College [Skyspace](https://www.pomona.edu/museum/collections/james-turrell-skyspace).

<figure> <img src = "../assets/images/code_01_turrell_01.jpg" width = "400px"><figcaption>James Turell. Dividing the Light. 2007.</figcaption> </figure>

Reflect on your experience between the relationship between the LED color lights, and the color of the sky. This work is a form of new media art! The lights that are part of exhibition had to be programmed to match with the time of day and to change colors as the sky changes.

**Exercise:** Write a poetic set of instructions for James Turrell's *Dividing the Light*. How would you describe the colors? What is the progression of the piece? Be as specific as possible. Next class we'll be talking about how we can change values within our code while our program is running. Consider what values are changing with the lights to given different results.

### Part 2: Pusey

Read the article about the work of Mavis Pusey posted to discord.

Using Processing, recreate the below portion of Pusey's painting *Personate* as an 800x800 sketch.

To make this image, you'll need to look into the functions `quad()` [(Reference)](https://processing.org/reference/quad_.html) and `triangle()`[(Reference)](https://processing.org/reference/triangle_.html).

As a hint you can drawing shapes beyond our 800 x 800 display!

#### Saving

In order to save this image as a PNG, you can add the following line of code to the end of your sketch.

`save("mavis_pusey_exercise.png");`

Every time you run your sketch, this line of code will either save or overwrite a PNG image file in your Processing sketch folder.

For this to work you will need to save your sketch first!

`save()` [reference](https://processing.org/reference/save_.html)

#### Mavis Pusey's *Personante*

<figure> <img src = "../assets/images/code_01_marvis_01.jpg" ><figcaption> Mavis Pusey. Personante. 1990.</figcaption> </figure>
<figure> <img src = "../assets/images/code_01_marvis_02.jpg" ><figcaption> Portion of painting to recreate in Processing</figcaption></figure>
<figure> <img src = "../assets/images/code_01_marvis_03.jpg" ><figcaption>Portion of painting with grid lines every 100 pixels</figcaption> </figure>

<figure> <img src = "../assets/images/code_01_exercise_color.jpg" ><figcaption>Colors of painting with RGB values</figcaption> </figure>

### Submit

Use the box link in discord to submit the following:

A zipped folder with:

1. Your processing folder containing:
> a. Your Processing sketch
>
>b. Image of your Mavis Pusey sketch in PNG format

2. A PDF of your *Dividing the Light* instructions

Your Zipped folder should be named using the following format:

`Firstname_LastName_DrawingandColor`

If you make a mistake and need to upload another folder, append the zipped file name with a numerical value:

`Firstname_LastName_DrawingandColor_02`

Additionally, post your PNG image and *Dividing the Light* instructions to the assignments discord channel.













