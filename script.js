const container = document.getElementById("container");
var horizontal = 100;
var vertical = 100;
var totalSquare = horizontal * vertical;

for(let i = 0; i < totalSquare; i++){
    let square = document.createElement("div");
    let length = 100/horizontal;
    let lengthContainer = length * horizontal;
    square.setAttribute("id", "square");
    square.setAttribute("class", "square");
    container.style.width = `${lengthContainer}vh`;
    square.style.width = `${length}vh`;
    square.style.height = `${length}vh`;
    square.addEventListener("mouseenter", () =>{
        square.style.backgroundColor = "black";
    }
    )
    container.appendChild(square);
}



