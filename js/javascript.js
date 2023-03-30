const gridContainer = document.getElementById("container");

function createGrids()
{
    for (let i = 0; i < 32; i++) 
    {
        // creates the squares and childs them to container
        var div = document.createElement("div");
        div.classList.add("grid-element")
        gridContainer.appendChild(div);     
    }
}

createGrids();