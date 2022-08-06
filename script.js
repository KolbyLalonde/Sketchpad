/**
@author Kolby Lalonde
version: 1.0
since: 1.0
*/

// Connecting HTML elements
let containerDiv = document.querySelector('.grid');
let userValue = document.getElementById('userInput');
let submitButton = document.getElementById('submit');
let clearButton = document.getElementById('clear');

// Adding button eventListeners
submitButton.addEventListener('click', createGrid);
clearButton.addEventListener('click', clear);

// Default call to create 10x10 grid
createGrid();
sketch();

/*
createGrid() - Is a funtion used to create the grid pattern. It
uses the input of the user to create equal DOM div elements.
*/ 
function createGrid(){
    let size = userValue.value;
    containerDiv.innerHTML = "";
    if(size < 2|| size > 99 || isNaN(size)){
        for(let i = 0; i < 10 ; i++){
            let row = document.createElement('div');
            row.classList.add('row');
            containerDiv.appendChild(row);
            for(let j = 0; j < 10 ; j++){
                let column = document.createElement('div');
                column.classList.add('column');
                row.appendChild(column);
            }
        }
    }
    else {
        for(let i = 0; i < size ; i++){
            let row = document.createElement('div');
            row.classList.add('row');
            containerDiv.appendChild(row);
            for(let j = 0; j < size ; j++){
                let column = document.createElement('div');
                column.classList.add('column');
                row.appendChild(column);
            }
        }
    }
    sketch(); // call to function to prepare for drawing
}

/*
sketch() - Is a function used to ready the grid for drawing. The nested
fill fuction allows to user to select the tool they want to sketch with.
*/
function sketch(){
    let boxes = document.getElementsByClassName("column");
    for(let i = 0; i < boxes.length; i++){
        boxes[i].addEventListener("mouseover", fill);
    }
    function fill(){

        let blackRadio = document.getElementById('black');
        let blueRadio = document.getElementById('blue');
        let redRadio = document.getElementById('red');
        let eraseRadio = document.getElementById('erase');

        if(blackRadio.checked){
            this.style.backgroundColor = "black";
        }
        else if(blueRadio.checked){
            this.style.backgroundColor = "blue";
        }
        else if(redRadio.checked){
            this.style.backgroundColor = "red";
        }
        else if(eraseRadio.checked){
            this.style.backgroundColor = "white";
        }

    }
}

/*
clear() - Is a function that can clear the grid back to initial state
with all white boxes.
*/
function clear() {
    let boxes = document.getElementsByClassName("column");
    for(let i = 0; i < boxes.length; i++){
        boxes[i].style.backgroundColor = 'white';
    }
}


