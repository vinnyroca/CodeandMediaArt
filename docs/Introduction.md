

<style>
/* Button styling */
#focusToggle {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000;
  padding: 0.2em .5em;
  background: #333;
  color: #fff;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  opacity: .5;
}

/* Hide button on small screens */
@media (max-width: 767.9px) {
  #focusToggle {
    display: none;
  }
}

/* Focus mode styles */
.focus-mode .section-content,
.focus-mode h2 {
  display: none; /* hide all by default in focus mode */
}

.focus-mode .section-content.active,
.focus-mode h2.active {
  display: block; /* show only active section */
}
</style>

<button id="focusToggle">Focus</button>

<script>
document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("focusToggle");
  let focusEnabled = false;

  // Wrap content after each h2
  const headings = document.querySelectorAll("h2");
  headings.forEach(h2 => {
    const wrapper = document.createElement("div");
    wrapper.classList.add("section-content");

    let sibling = h2.nextElementSibling;
    while (sibling && sibling.tagName !== "H2") {
      const next = sibling.nextElementSibling;
      wrapper.appendChild(sibling);
      sibling = next;
    }
    h2.insertAdjacentElement("afterend", wrapper);
  });

  const sections = document.querySelectorAll(".section-content");

  function showSectionById(id) {
    sections.forEach(wrapper => {
      const h2 = wrapper.previousElementSibling;
      if (h2.id === id) {
        wrapper.classList.add("active");
        h2.classList.add("active");
      } else {
        wrapper.classList.remove("active");
        h2.classList.remove("active");
      }
    });
  }

  // Default section
  if (location.hash) {
    showSectionById(location.hash.substring(1));
  } else if (headings.length) {
    showSectionById(headings[0].id);
  }

  window.addEventListener("hashchange", () => {
    showSectionById(location.hash.substring(1));
  });

  // Toggle focus mode
  function toggleFocusMode(enable) {
    focusEnabled = enable;
    document.body.classList.toggle("focus-mode", focusEnabled);
    button.textContent = focusEnabled ? "Exit Focus" : "Focus";
  }

  button.addEventListener("click", () => {
    toggleFocusMode(!focusEnabled);
  });

  // Disable focus mode on small screens
  function checkScreenWidth() {
    if (window.innerWidth <= 767.9) {
      toggleFocusMode(false); // automatically turn off
      button.style.display = "none"; // hide button
    } else {
      button.style.display = "block"; // show button
    }
  }

  window.addEventListener("resize", checkScreenWidth);
  checkScreenWidth(); // initial check
});
</script>


# HELLO!

## Plan For Today

2 Hours 30 min


- Introductions - 15 min
- About Me - 5 min
- Syllabus Review - 10 min
- Schedule and Class Website - 5 min
- Class Discord - 10 min
- Break - 10 min
- Course Goals - 10 min
- Playing With Code(s)



## Introductions

- Name
- Pronouns
- Home college/Major/Year
- Any experience you have had with Code or Programming?
- Why were you interested in signing up for this course and what is one thing you are looking to take away from this class?
- If you have one, favorite art work that combines art and technology?

## About Me

- Vincent Roca, Assistant Professor of Media Studies (you can call me Vinny)
- He/Him
- Media Art/Games/Animation/Sculpture

## Syllabus

[Class Syllabus](./index.md)

Note: Some parts of this class will require:

1. A personal computer with a camera, microphone, and sound output
2. Headphones
   
If you do not have access to this technology please contact me as soon as possible.

## Class Website and Schedule

Class Website: code.vinnyroca.info

If you see an error or typo, please send me an email or Discord message.

[Schedule](./schedule.md)


## Class Discord

[Join the Class Discord](https://discord.gg/RcBPBnxu)

Please change your nickname on the server to match your name in the classroom.

[How to change your server nickname](https://support.discord.com/hc/en-us/articles/219070107-Server-Nicknames)


## Course Goals

To learn the fundamentals of the programming for artistic practice.
To examine the relationship between code, art and technology critically in a variety of contexts.

## Practice

### p5.js and JavaScript

- Learn the foundations of programming from variables to objects
- Learn how to create visual, sonic and interactive media artworks

### Basics of HTML and CSS

- Learn how to put on p5.js projects on the internet on our own websites!

## Projects

### Time

An experimental clock that provides a different relationship to time,

### Narrative

Blend text, functions and algorithms together to reveal a narrative or experience through the manipulation of images.

### Performance (Group Project of 3-4)

Use sound, camera, and interactive inputs and outputs to generate a projected performance.

### Game Ring

Use new knowledge in object oriented program to create a game that emerges from your lived experience of the world. The class will create a series of websites for our games that are all interconnected through a web ring.

## Thinking, Reading, Watching

In this course, we will be studying the cultural, artistic, and political impacts of programming.

To facilitate this study, we will hold four critical discussions throughout the quarter, each covering a different topic.

### Art && Technology
- *History of the Future*, Casey Raes
- *Glitch Feminism*, Legacy Russell
- *Cyberfeminist Index*, Mindy Seu

### Culture && Ideology

- *Algorithms of Oppression*, Safiya Noble
- *Indigenous Circuits: Navajo Women and the Racialization of Early Electronic Manufacture*, Lisa Nakamura
- *It’s In the Game’17* - Sondra Perry

### Surveillance && Power

- *Citizenfour*, Laura Poitras
- *Helga Tawil-Souri*, Digital Occupation
- *Facial Weaponization Suite*, Zach Blas

### Internet && Play

- *Making Space for A Handmade Web*, Chia Amisola
- *A Handmade Web*, J. R. Carpenter
- *Against the Dark Forest*, Erin Kissane

