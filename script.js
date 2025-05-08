const container = document.getElementById("container");
const block = document.getElementById("square");
const adjust = document.getElementById("adjust");
const pixNumber = document.getElementById("pixNumber");

var horizontal = 100;
var totalSquare = horizontal **2;

function changePixel() {
    removeBlock()
    horizontal = pixNumber.value;
    totalSquare = horizontal **2;
    pixNumber.value="";
    generateBlock();

};

addEventListener("load",()=>{
    generateBlock();
})

function removeBlock(){
   while(container.firstChild) {
    container.removeChild(container.firstChild);
   }
}

function generateBlock(){
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
}



