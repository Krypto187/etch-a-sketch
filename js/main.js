const grid = document.querySelector(".grid");

function squareGrid(x) {
    let amount = x * 4;
    for (let i = 0; i < amount; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        grid.appendChild(square);
    }
}


squareGrid(64);

const square = document.querySelector("div");
square.addEventListener("mouseover", function(e) {
    e.target.classList.replace("square", "color");
});

function clearGrid() {
    const allSquares = document.querySelectorAll(".color,.square");
    allSquares.forEach(element => {
        element.remove();
    });
}

const btn = document.createElement("button");
btn.classList.add("btn")
btn.textContent = "Reset"
btn.addEventListener("click", function(e) {
    clearGrid();
    let amountSquare = prompt("How many squares you want?")
    squareGrid(amountSquare);
})

document.body.insertBefore(btn, grid);

/* */