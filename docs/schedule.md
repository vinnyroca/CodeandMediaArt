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
|8/28|- **Tutorial:** [Processing, Shape, and Color](./01_Processing.md)<br> - Begin Merhutu Exercise|**Assignment Due:**<br>- Install Processing|
|9/2|||
|9/4|||
|9/9|||
|9/11|||
|9/16|||
|9/18|||
|9/23|||
|9/25|||
|9/30|||
|10/2|||
|10/7|||
|10/9|||
|10/14|||
|10/16|||
|10/21|||
|10/23|||
|10/28|||
|10/30|||
|11/4|||
|11/6|||
|11/11|||
|11/13|||
|11/18|||
|11/20|||
|11/25|||
|11/27|||
|12/2|||
|12/4|||




