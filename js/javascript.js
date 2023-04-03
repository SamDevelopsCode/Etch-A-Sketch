const headerContainer = document.querySelector(".header-container");
const gridContainer = document.getElementById("grid-container");

let squareGridsPerSide = 40;


function createGrid()
{
    for (let i = 0; i < Math.pow(squareGridsPerSide, 2); i++) 
    {
        if ((i % squareGridsPerSide) == 0)
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
    createGrid();

    var button = document.createElement("button");   
    button.textContent = "New Grid";
    headerContainer.appendChild(button);
    button.addEventListener("click", () => 
    {
    squareGridsPerSide = prompt("Enter the number of squares per side", "16");    
    if (squareGridsPerSide > 100)
    {
        squareGridsPerSide = 100;
    }
    resetGridToDefault();
    createGrid();
    })    
}


function resetGridToDefault()
{
    while (gridContainer.firstChild)
    {
        gridContainer.removeChild(gridContainer.lastChild);
    }
}

createNewGrid();
