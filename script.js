const grid = document.querySelector("#grid");

// create grid

for (let i = 0; i < 16 * 16; i++) {
    let square = document.createElement("div");
    square.classList.add("square");
    grid.appendChild(square);
}

grid.addEventListener("mouseover", (event) => {
    console.log(event.target)
    if (event.buttons == 1) {
        event.target.style.backgroundColor = "gray";
    }
});

/*
const squares = document.querySelectorAll(".square");
for (const square of squares) {
    square.addEventListener("mouseenter", (event) => {
        if (event.buttons == 1) {
            event.target.style.backgroundColor = "gray";
        }
    })
}
    */