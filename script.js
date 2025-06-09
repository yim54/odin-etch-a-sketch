let  grid = document.querySelector("#grid");

// create grid

for (let i = 0; i < 16 * 16; i++) {
    let square = document.createElement("div");
    square.classList.add("square");
    grid.appendChild(square);
}

// check mouse click

let mousedown = false;
grid.addEventListener("mousedown", () => {
    mousedown = true;
})

function draw(event) {
    // check if target is the container itself

    if (event.target.id == "grid") {
        return;
    }

    // check if mouse button is down

    if (mousedown) {
        if (event.target.style.backgroundColor != "gray") {
            event.target.style.opacity = 0.1;
        } else {
            if (event.target.style.opacity != 1) {
                event.target.style.opacity += 0.1;
            }
        }
        event.target.style.backgroundColor = "gray";
    }
}

grid.addEventListener("mouseover", draw);

// check mouse release

document.addEventListener("mouseup", () => {
    mousedown = false;
});

document.addEventListener("dragstart", (event)=> {
    event.preventDefault();
});

let button = document.querySelector("#button");
button.addEventListener("click", (event) => {
    // get new size

    let dim = prompt("How many squares per side? (max 100)");
    dim = Math.min(dim, 100);
    dim = Math.max(dim, 1);
    console.log(dim);

    // create new grid

    grid.remove();
    grid = document.createElement("div");
    grid.id = "grid";
    document.body.appendChild(grid);
    for (let i = 0; i < dim * dim; i++) {
        let square = document.createElement("div");
        square.classList.add("square");
        square.style.flexBasis = `${1/dim * 100}%`;
        grid.appendChild(square);
    }

    // add drawing functionality

    grid.addEventListener("mousedown", () => {
        mousedown = true;
    })
    grid.addEventListener("mouseover", draw);


});