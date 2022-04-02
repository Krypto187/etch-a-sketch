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

function clearGrid() {
    const allSquares = document.querySelectorAll("div");
    allSquares.forEach(element => {
        if (element.classList == "color") {
            element.classList.replace("color", "square");
        }
    });
}

const btn = document.createElement("button");
btn.classList.add("btn")
btn.textContent = "Reset"
btn.addEventListener("click", function(e) {
    clearGrid();
})

document.body.insertBefore(btn, grid);