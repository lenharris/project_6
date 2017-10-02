var squareCount = 0;

function getRandomColor(div) {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
      div.style.backgroundColor = color;
    }
    
  }
// * When the browser first loads, create and insert a button labeled `Add Square` into the page.
document.addEventListener('DOMContentLoaded', function () {
    var button = document.createElement('button');

    button.innerHTML = 'Add Square';
    document.body.appendChild(button);
    button.style.display = 'block';

// * When the button is clicked, a new `div` should be added to the page
      
     button.addEventListener('click', function () {
        var div = document.createElement('div');
        
        
         
        document.body.appendChild(div);  
   

//* The `div` should be a black square
      div.style.backgroundColor = 'black';
      div.style.color = 'white';
      div.style.width = '200px';
      div.style.height = '200px';

//* The squares should flow horizontally across the page
     div.style.cssFloat = 'left';
  

//* When there is no more room, they should wrap to the next line (this will happen automatically once you get them next to each other flowing horizontally)


//* All of these `div` elements added to the page should share a single class name
     div.className = 'bsquare';

//* Each `div` should have an `id` with a numerical value equivalent to the number of squares that are in the page when the `Add Square` button is clicked
      div.id = squareCount++;

//* Ex: There are already 7 squares on the page. When the button is clicked, another square should be added to the page, and it should have `id="7"`.

//* In this lab, you may run into scenarios where you will have multiple elements with the same `id`. It will be okay.

// * When hovering over a square, the value of the square's `id` should display centered in the square, and disappear when the cursor is no longer over the square
     div.addEventListener('mouseover', function(){
         div.style.color = 'white',
         div.innerText = div.id;
     });

     div.addEventListener('mouseleave', function(){
         div.style.color = 'transparent';

     });

     
      
//* When a square is clicked, it should change to a random background color (You can randomly choose from a set of colors you predefine if you wish)
div.addEventListener('click', function() {
    getRandomColor(div);
})
//* When a square is double clicked, the following should occur:
   div.addEventListener('dblclick', function() {
     if (div.previousSibling === button) {
         alert ('Nothing to remove.')
     } else if (div.id % 2 != 0) {
         div.previousSibling.remove();
     } else if (div.nextSibling === null) {
         alert ('Nothing to remove.')
     } else if (div.id % 2 === 0) {
         div.nextSibling.remove();
     }
   })
//* If the `id` of the square is even:

//             * The square after the clicked square should be removed from the page

//             * If there isn't a square after the clicked square, display an alert indicating so

//             * If the `id` of the square is odd:

//             * The square before the clicked square should be removed from the page

//             * If there isn't a square before the clicked square, display an alert indicating so

})
})
