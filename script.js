const container = document.getElementById("container");

for(let i = 0; i < 256; i++){
    let square = document.createElement("div");
    square.setAttribute("id", "square");
    square.setAttribute("class", "square");
    square.addEventListener("mouseenter", () =>{
        square.style.backgroundColor = "black";
    }
    )
    container.appendChild(square);
    
}

