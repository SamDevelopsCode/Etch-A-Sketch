const headerContainer = document.querySelector(".header-container");
const gridContainer = document.getElementById("grid-container");

let squaresPerSide = 25;


function createGrid()
{
    for (let i = 0; i < Math.pow(squaresPerSide, 2); i++) 
    {
        if ((i % squaresPerSide) == 0)
        {
            var rowContainer = document.createElement("div");
            rowContainer.classList.add("row-container");
            gridContainer.appendChild(rowContainer);
        }

        var div = document.createElement("div");
        div.classList.add("grid-element");
        rowContainer.appendChild(div);
    }
    assignEventsToGridElements();
}


function assignEventsToGridElements()
{
    var gridElements = document.querySelectorAll("div.grid-element");

    gridElements.forEach((gridElement) => {
        gridElement.addEventListener("mouseover", () => {
            gridElement.classList.add("change-background-color");
        });
    });    
}


function createNewGrid()
{    
    eraseGrid();
    createGrid();
}   


function createNewGridButton()
{
    var button = document.createElement("button");   
    button.textContent = "New Grid";
    headerContainer.appendChild(button);

    button.addEventListener("click", () => 
    {
    squaresPerSide = prompt("Enter 1-100, The lower the #, the larger the brush.", "16");   

    if (squaresPerSide > 100)
    {
        squaresPerSide = 100;
    }    
    createNewGrid();
    })
}


function eraseGrid()
{
    while (gridContainer.firstChild)
    {
        gridContainer.removeChild(gridContainer.lastChild);
    }
}


createGrid();
createNewGridButton();
