const grid = document.querySelector("#grid");

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

grid.addEventListener("mouseover", (event) => {
    // check if target is the container itself

    if (event.target.id == "grid") {
        return;
    }

    // check if mouse button is down

    if (mousedown) {
        event.target.style.backgroundColor = "gray";
    }
});

// check mouse release

document.addEventListener("mouseup", () => {
    mousedown = false;
})

document.addEventListener("dragstart", (event)=> {
    event.preventDefault();
})

