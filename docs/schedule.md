# Schedule
<!--removes sidebar outline-->
<style>
  table {
    border: none !important;
    border-collapse: collapse !important;
    line-height: 1.2em !important;
    
 
  }

  tbody td{
  border: .01em solid !important;
    }
    td:nth-child(1){
        border: none !important;
    }
  tbody{
    
    
  }
  td{
    padding: .2em !important;
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
|1|TUES<br>8/26|**- Introduction(s)**<br>**- Procedural Experiments**||
||THUR<br>8/28|**- Tutorial:** [Processing, Shape, and Color](./01_Processing.md)|**Due:**<br>- [Install Processing](https://processing.org/download)|
|2|TUES<br>9/2|**- Tutorial:** [Variables]|**Due:**<br>- [Drawing In Color](./01_Processing.md/#independent-exercise-drawing-in-color)|
||THUR<br>9/4|**- Tutorial:** [Flow]|**Due:**<br>|
|3|TUES<br>9/9|**- Tutorial:** [Repeat]|**Due:**<br>|
||THUR<br>9/11|**- Tutorial:** [Math && Time]<br>|**Due:**<br>|
|4|TUES<br>9/16|<span style="background-color: lightskyblue;">**- Discussion**</span><br>**- Studio Time:** Time|**Due:**<br>|
||THUR<br>9/18|<p style="background-color: lightgreen;">CRIT: Time</p>|**Due:**<br>|
|5|TUES<br>9/23|**- Tutorial:** [Interactivity]|**Due:**<br>|
||THUR<br>9/25|**- Tutorial:** [Text && Arrays] Project|**Due:**<br>|
|6|TUES<br>9/30|**- Tutorial:** [Image && Transform]|**Due:**<br>|
||THUR<br>10/2|**- Tutorial** [Functions]|**Due:**<br>|
|7|TUES<br>10/7|**- Studio Time:** Interactive|**Due:**<br>|
||THUR<br>10/9|<span style="background-color: lightskyblue;">**- Discussion**</span><br>**- Studio Time:** Interactive|**Due:**<br>|
|8|TUES<br>10/14|<p style="background-color: pink;">No Class: Break</p>|**Due:**<br>|
||THUR<br>10/16|<p style="background-color: lightgreen;">CRIT: Interactive</p>|**Due:**<br>|
|9|TUES<br>10/21|**- Tutorial:** [Sound In && Sound Out]|**Due:**<br>|
||THUR<br>10/23|**- Tutorial:** [Procedural Program Structure]|**Due:**<br>|
|10|TUES<br>10/28|<span style="background-color: lightskyblue;">**- Discussion**</span><br>**- Studio Time:** Performance|**Due:**<br>|
||THUR<br>10/30|**- Studio Time:** Performance|**Due:**<br>|
|11|TUES<br>11/4|<p style="background-color: lightgreen;">CRIT: Performance</p>|**Due:**<br>|
||THUR<br>11/6|**- Tutorial:** [Classes && Objects]|**Due:**<br>|
|12|TUES<br>11/11|**- Tutorial:** [ArrayLists]|**Due:**<br>|
||THUR<br>11/13|**- Tutorial:** [PVectors]|**Due:**<br>|
|13|TUES<br>11/18|**- Tutorial:** [Game Logic]|**Due:**<br>|
||THUR<br>11/20|**- Studio Time:** Game|**Due:**<br>|
|14|TUES<br>11/25|**- Studio Time:** Game|**Due:**<br>|
||THUR<br>11/27|<p style="background-color: pink;">No Class: Break</p>|**Due:**<br>|
|15|TUES<br>12/2|<p style="background-color: lightgreen;">CRIT: Game</p>|**Due:**<br>|





