<script>hljs.highlightAll();</script>

# Syllabus

```js
function setup(){
    createCanvas(400,400);
}

function draw(){
    background(220);
}
```
## Multiple Sketches with Instance Mode

<div id="sketch-container-1"></div>


<script>
  const s2 = (p) => {
    p.setup = () => {
      let c = p.createCanvas(windowWidth, 200);
      c.parent("sketch-container-2");
      p.background(230);
    };
    p.draw = () => {
      p.fill(0, 0, 255, 100);
      p.rect(p.mouseX, p.mouseY, 40, 40);
    };
  };

 
  new p5(s2);
</script>

hello

<div id="sketch-container-2"></div>

<script>
  const s1 = (p) => {
    p.setup = () => {
      let c = p.createCanvas(windowWidth, 600);
      c.parent("sketch-container-1");
      p.background(255);
    };
    p.draw = () => {
      p.fill(255, 0, 0, 100);
      p.ellipse(p.mouseX, p.mouseY, 40);
    };
  };
 new p5(s1);

  </script>

