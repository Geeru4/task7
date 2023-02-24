let matrix = [
    "1111111111111111111".split(""),
    "1000000000010100001".split(""),
    "1111101111010101001".split(""),
    "1000001000010100001".split(""),
    "1011111011110000001".split(""),
    "1010000010110110001".split(""),
    "1010111110110100111".split(""),
    "1010000000000100001".split(""),
    "1P11111111111110101".split(""),
    "1010001010001000101".split(""),
    "1010001000001000111".split(""),
    "1011100000100000001".split(""),
    "1000110111111111001".split(""),
    "1010010000000001101".split(""),
    "1011011111111101111".split(""),
    "1010000000000101101".split(""),
    "1011111111100100001".split(""),
    "10100010001001111F1".split(""),
    "1000100010110010001".split(""),
    "1111111111111111111".split("")
]

let coordsPlayer = {
    "X":1,
    "Y":8
}
const pointElem = document.querySelector("h1")
const play = document.querySelector("#player")
play.style.top = String(coordsPlayer["Y"] * 25)+"px";
play.style.left = String(coordsPlayer["X"] * 25)+"px";
const field = document.querySelector(".maze-field")
for (line in matrix){
    for (cell in matrix[line]){
        if (matrix[line][cell] == "1"){
            let elem = document.createElement("div");
            elem.classList.add("maze-block");
            elem.style.top = String(line*25)+"px";
            elem.style.left = String(cell*25)+"px";
            field.append(elem);
        }
        else if (matrix[line][cell] == "F"){
            let elemFinish = document.createElement("div");
            elemFinish.classList.add("finish");
            elemFinish.style.top = String(line*25)+"px";
            elemFinish.style.left = String(cell*25)+"px";
            field.append(elemFinish);
        }
    }
}


function checkFinish(){
    if (matrix[coordsPlayer["Y"]][coordsPlayer["X"]] != "F") {
        matrix[coordsPlayer["Y"]][coordsPlayer["X"]] = "P";}        
    else{
        pointElem.innerHTML = "Points 1"
        field.removeChild(document.querySelector(".finish"))
        document.removeEventListener('keydown',movePlayer)
        }
    
}
function movePlayer(event){
    if (event.code == 'KeyW'){
        if (matrix[coordsPlayer["Y"] - 1][coordsPlayer["X"]] != 1){
            matrix[coordsPlayer["Y"]][coordsPlayer["X"]] = "0";
            coordsPlayer["Y"] -= 1;
            checkFinish()

        }
    }
    else if (event.code == 'KeyS'){
        if (matrix[coordsPlayer["Y"] + 1][coordsPlayer["X"]] != 1){
            matrix[coordsPlayer["Y"]][coordsPlayer["X"]] = "0";
            coordsPlayer["Y"] += 1;
            checkFinish()

        }
    }
    else if (event.code == 'KeyA'){
        if (matrix[coordsPlayer["Y"]][coordsPlayer["X"] - 1] != 1){
            matrix[coordsPlayer["Y"]][coordsPlayer["X"]] = "0";
            coordsPlayer["X"] -= 1;
            checkFinish()

        }
    }
    else if (event.code == 'KeyD'){
        if (matrix[coordsPlayer["Y"]][coordsPlayer["X"] + 1] != 1){
            matrix[coordsPlayer["Y"]][coordsPlayer["X"]] = "0";
            coordsPlayer["X"] += 1;
            checkFinish()

            }
        }

    
    play.style.top = String(coordsPlayer["Y"] * 25)+"px";
    play.style.left = String(coordsPlayer["X"] * 25)+"px";
}
document.addEventListener('keydown',movePlayer)
