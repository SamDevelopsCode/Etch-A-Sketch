const gridContainer = document.getElementById("container");



function createGrids()
{
    for (let i = 0; i < 256; i++) 
    {
        if ((i % 16) == 0)
        {
            var rowContainer = document.createElement("div");
            rowContainer.classList.add("row-container");
            gridContainer.appendChild(rowContainer);
        }

        var div = document.createElement("div");
        div.classList.add("grid-element");
        rowContainer.appendChild(div);
    }
}

function assignEventsToGridElements()
{
    var gridElements = document.querySelectorAll("div.grid-element");

    gridElements.forEach((gridElement) => {
        gridElement.addEventListener("mouseover", () => {
            gridElement.classList.add("change-background-color");
        });
    });

    // we use the .forEach method to iterate through each
    
}

createGrids();
assignEventsToGridElements();