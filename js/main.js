const grid = document.querySelector(".grid");

function squareGrid() {
    for (let i = 0; i < 256; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        grid.appendChild(square);
    }
}


squareGrid();

const square = document.querySelector("div");
square.addEventListener("mouseover", function(e) {
    e.target.classList.replace("square", "color");
});