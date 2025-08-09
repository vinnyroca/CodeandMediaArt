`# Schedule
<!--removes sidebar outline-->
<style>
    @media (min-width: 768px) {
        .col-md-9 {
            width: 100% !important;
        }
        
        .d-md-block {
        display: none !important;
        }
        
        #component-content{
            margin-left:0 !important;
        }
    }
</style>

<!--jump to anchor tag adjusted to header height offset-->
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

> Please note that is this is a live schedule and is ever evolving as the course (/world) changes. Please check back frequently for due dates of assignments and course proceedings.

> This scedule contains links to all in-class lectures and tutorials as well as links to class assignments.

#### Typical weekly plan

| Tuesday | Thursday |
| --- | --- |
| Discussion - 50 min <br> Software Tutorial - 1 H 30 M| Review of Assignments - 20 M<br>Software Tutorial - 2 H

## Course Plan

||Class | Due|
|---|---|---|
|8/26|- Introduction(s)<br>- Procedural Play||
|8/28|- **Tutorial:** [Processing, Shape, and Color](./01_Processing.md)<br> - Begin Drawing in Color Assignment|**Assignment Due:**<br>- [Install Processing](https://processing.org/download)|
|9/2||**Assignment Due:**<br>- [Drawing In Color](./01_Processing.md/#independent-exercise-drawing-in-color)|
|9/4||**Assignment Due:**<br>|
|9/9||**Assignment Due:**<br>|
|9/11||**Assignment Due:**<br>|
|9/16|Class Work|**Assignment Due:**<br>|
|9/18|`Clock Crit`|**Assignment Due:**<br>Clock|
|9/23||**Assignment Due:**<br>|
|9/25||**Assignment Due:**<br>|
|9/30||**Assignment Due:**<br>|
|10/2||**Assignment Due:**<br>|
|10/7|Class Work|**Assignment Due:**<br>|
|10/9|Class Work|**Assignment Due:**<br>|
|10/14|No Class|**Assignment Due:**<br>|
|10/16|`Interactive Crit`|**Assignment Due:**<br>Interactive Image|
|10/21||**Assignment Due:**<br>|
|10/23||**Assignment Due:**<br>|
|10/28|Class Work|**Assignment Due:**<br>|
|10/30|Class Work|**Assignment Due:**<br>|
|11/4|`Performance Crit`|**Assignment Due:**<br>Performance|
|11/6||**Assignment Due:**<br>|
|11/11||**Assignment Due:**<br>|
|11/13||**Assignment Due:**<br>|
|11/18||**Assignment Due:**<br>|
|11/20||**Assignment Due:**<br>|
|11/25|Class Work|**Assignment Due:**<br>|
|11/27|No Class|**Assignment Due:**<br>|
|12/2|Class Work|**Assignment Due:**<br>|
|12/4|Class Work|**Assignment Due:**<br>|




