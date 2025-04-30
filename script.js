const container = document.getElementById("container");


for(let i = 0; i < 16; i++){
    let square = document.createElement("div");
    square.setAttribute("id", "square");
    container.appendChild(square);

}
