const container = document.getElementById("container");
const block = document.getElementById("square");
const adjust = document.getElementById("adjust");
const pixNumber = document.getElementById("pixNumber");
const pixel = document.getElementById("pixel");
const scale = document.querySelector("span");
const color = document.getElementById("color");

pixel.addEventListener("input", ()=>{
    let scaleNumber = pixel.value;
    scale.textContent = ` ${scaleNumber} x ${scaleNumber}`
})


var horizontal = 16;
var totalSquare = horizontal **2;

function changePixel() {
    removeBlock()
    horizontal = pixel.value;
    totalSquare = horizontal **2;
    pixel.value=""; 
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
        let opacity = 0;
        square.addEventListener("mouseenter", () =>{
            // square.style.backgroundColor = "black";
            opacity += 0.1;
            if(opacity > 1){
                opacity = 1;
                console.log(opacity)
            }
            getColorCode();
            square.style.backgroundColor = getColorCode();
            square.style.opacity = opacity;
        }
        )
        container.appendChild(square);
    }
}

function getColorCode(){
    const number = "1234567890#abcdefghijklnmopqrstuvwxyz";
    let colorCode = color.value;
    let splitChars = colorCode.split('');
    let filteredChars = splitChars.filter((char)=> number.includes(char));
    let onlyColorCode = filteredChars.join('');
    return onlyColorCode;
}


getColorCode()
