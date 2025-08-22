# Schedule
<!--removes sidebar outline-->
<style>
  table {
    border: none !important;
    border-collapse: collapse !important;
    
    
 
  }

  tbody td{
  border: .15em solid !important;
    }
    td:nth-child(1){
        border: none !important;
    }
  tbody{
    
    
  }
  td{
   
  }
  th{
    border: none !important;
  }

  
  tbody tr:nth-child(4n+1),
    tbody tr:nth-child(4n+2) {
  background-color: 
#dee0e3

;
    }
tbody td:first-child {
  border-right: none;
}

#no-class{
    background-color: pink;
}




body{
   
}
}

</style>
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

## Course Plan

|W|Day|Class|Due|
|---|---|---|---|
|1|TUES<br>8/26|- [Introduction(s)](./Introduction.md)<br>- [Playing with Code(s)](./00_procedural_experiments.md)||
||THUR<br>8/28|**- Tutorial:** [p5.js, Shape, and Color](./01_Processing.md)|**Due:**<br>- [Sign up for p5.js](https://editor.p5js.org/signup)|
|2|TUES<br>9/2|**- Tutorial:** [Variables](./02_variables.md)|**Due:**<br>- [Drawing In Color](./01_Processing.md/#independent-exercise-drawing-in-color)|
||THUR<br>9/4|**- Tutorial:** [Flow]|**Due:**<br>- [Face Generator](./02_variables.md/#independent-exercise-face-generator)|
|3|TUES<br>9/9|**- Tutorial:** [Repeat]|**Due:**<br> - Flow Exercise|
||THUR<br>9/11|**- Tutorial:** [Math && Time]<br>**- Assign:** Time|**Due:**<br> - Repeat Exercise|
|4|TUES<br>9/16|<span style="background-color: lightskyblue;">**- Discussion &#128214;**</span><br>**- Studio Time:** Time|**Due:**<br> - Begin work on Time project<br>**Due on Monday Before 5 pm:**<br> - Art && Technology Response|
||THUR<br>9/18|<p style="background-color: lightgreen;">CRIT &#127774;: Time</p>|**Due:**<br> - Time Project|
|5|TUES<br>9/23|**- Tutorial:** [Interactivity && Transforms]||
||THUR<br>9/25|**- Tutorial:** [Text && Arrays] |**Due:**<br> - Exercise|
|6|TUES<br>9/30|**- Tutorial:** [Image && Algorithms]|**Due:**<br> - Exercise|
||THUR<br>10/2|**- Tutorial** [Functions]|**Due:**<br> - Exercise|
|7|TUES<br>10/7|<span style="background-color: lightskyblue;">**- Discussion &#128214;**</span><br>**- Studio Time:** Narrative|**Due:**<br> - Begin work on Narrative project<br>**Due on Monday Before 5 pm:**<br> - Culture && Ideology Response|
||THUR<br>10/9|<p style="background-color: lightgreen;">CRIT &#127774;: Narrative</p>|**Due:**<br>Narrative Project|
|8|TUES<br>10/14|<p style="background-color: pink;">No Class &#127773;: Break</p>|<p style="background-color: pink;">Break</p>|
||THUR<br>10/16|**- Tutorial:** [Sound In && Sound Out]<br> **- Assign:** Performance||
|9|TUES<br>10/21|**- Tutorial:** [Capture]|**Due:**<br> - Sound Exercise <br> - Performance Groups|
||THUR<br>10/23|<span style="background-color: lightskyblue;">**- Discussion &#128214;**</span><br>**- Studio Time:** Performance|**Due:**<br> - Begin work on Performance project<br>**Due on Monday Before 5 pm:**<br> - Power && Surveillance Response|
|10|TUES<br>10/28|**- Studio Time:** Testing Performance|**Due:**<br> - Completed Framework of Performance Project|
||THUR<br>10/30|<p style="background-color: lightgreen;">CRIT &#127774;: Performance</p>|**Due:**<br> - Performance Project|
|11|TUES<br>11/4|**- Tutorial:** [Classes && Objects]||
||THUR<br>11/6|**- Tutorial:** [Classes && Objects]|**Due:**<br> - Classes Exercise|
|12|TUES<br>11/11|**- Tutorial:** [VS Code && HTML]|**Due:**<br> - Game Ring Design Document|
||THUR<br>11/13|**- Tutorial:** [CSS + Github]|**Due:**<br> - Game Ring HTML Mock-up|
|13|TUES<br>11/18|**- Studio Time:** Game Ring|**Due:**<br> - Git Repository and Game Ring Web Address|
||THUR<br>11/20|<span style="background-color: lightskyblue;">**- Discussion &#128214;**</span>**<br>- Studio Time:** Game Ring|**Due on Monday Before 5 pm:**<br> - Play && Internet Response|
|14|TUES<br>11/25|**- Studio Time:** Game Ring|**Due:**<br> - Continued work on Game Ring|
||THUR<br>11/27|<p style="background-color: pink;">No Class &#127773;: Break</p>|<p style="background-color: pink;">Break</p>|
|15|TUES<br>12/2|<p style="background-color: lightgreen;">CRIT &#127774;: Game Ring</p>|**Due:**<br> Game Ring Project|





