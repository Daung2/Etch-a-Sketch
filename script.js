const container = document.getElementById("container");
const block = document.getElementById("square");
const adjust = document.getElementById("adjust");
const pixNumber = document.getElementById("pixNumber");
const pixel = document.getElementById("pixel");
const scale = document.querySelector("span");
const color = document.getElementById("color");
const changeStyle = document.getElementById("styleChange");
const Original  = document.getElementById("Original");
const Random = document.getElementById("Random");
let chosenColor = "original";

pixel.addEventListener("input", ()=>{
    let scaleNumber = pixel.value;
    scale.textContent = ` ${scaleNumber} x ${scaleNumber}`
});

changeStyle.addEventListener("click", (e) => {
    let target = e.target;
    switch(target.id) {
        case "Original":
            Original.classList.add("chosenStyle");
            Random.classList.remove("chosenStyle");
            chosenColor = "original";
            break;
        case "Random":
            Original.classList.remove("chosenStyle");
            Random.classList.add("chosenStyle");
            chosenColor = "random";
            break;
    }
});

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
            if(chosenColor == "original"){
                opacity += 0.1;
                if(opacity > 1){
                    opacity = 1;
                    console.log(opacity)
                }
                square.style.backgroundColor = color.value;
                square.style.opacity = opacity;
            }
            
            else{
                function random(){
                    let randomCode = Math.floor(Math.random()*225);
                    return randomCode;
                }
                square.style.backgroundColor = `rgb(${random()}, ${random()}, ${random()})`;

            }
        }
        )
        container.appendChild(square);
    }
}
