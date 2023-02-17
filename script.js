let matrix = [
    ['P', '1', "0", '0', "1", '0', "1", '0', "0", '0'],
    ['0', '0', "0", '1', "0", '0', "0", '0', "0", '0'],
    ['0', '0', "0", '0', "0", '0', "0", '0', "0", '0'],
    ['0', '1', "0", '0', "0", '0', "0", '0', "0", '0'],
    ['0', '0', "0", '0', "0", '0', "0", '0', "0", '0'],
    ['0', '0', "0", '0', "0", '0', "0", '0', "0", '0'],
    ['0', '0', "0", '0', "0", '0', "0", '0', "0", '0'],
    ['0', '1', "0", '0', "0", '1', "0", '0', "0", '0'],
    ['0', '0', "0", '0', "0", '0', "0", '0', "0", '0'],
    ['0', '0', "0", '0', "0", '0', "0", '0', "0", '0'],
    ['0', '0', "0", '0', "0", '0', "0", '0', "0", '0'],
    ['0', '0', "0", '0', "0", '0', "0", '0', "0", '0'],
    ['0', '0', "0", '1', "0", '0', "0", '0', "0", '0'],
    ['1', '0', "0", '0', "0", '0', "0", '0', "0", '0'],
    ['0', '0', "0", '0', "0", '0', "0", '0', "0", '0'],
    ['0', '1', "0", '0', "0", '0', "0", '0', "0", '0'],
    ['0', '0', "0", '0', "0", '0', "0", '0', "0", '0'],
    ['0', '0', "1", '0', "0", '0', "0", '0', "0", '0'],
    ['0', '0', "0", '0', "0", '0', "0", '0', "0", '0'],
    ['0', '0', "0", '0', "0", '1', "0", '0', "0", '0'],
]

function onMove(event) {
    const coordsPlayer = document.getElementById('player');
    if (event.code == "KeyW") {
        if (coordsPlayer.style.top != '0px') {
            coordsPlayer.style.top = (parseInt(coordsPlayer.style.top || getComputedStyle(coordsPlayer)['left'], 10) - 25) + 'px';
        }
    } else if (event.code == 'KeyD') {
        if (coordsPlayer.style.left != '475px') {
            coordsPlayer.style.left = (parseInt(coordsPlayer.style.left || getComputedStyle(coordsPlayer)['left'], 10) + 25) + 'px';
        }
    } else if (event.code == 'KeyA') {
        if (coordsPlayer.style.left != '0px') {
            coordsPlayer.style.left = (parseInt(coordsPlayer.style.left || getComputedStyle(coordsPlayer)['left'], 10) - 25) + 'px';
        }
    } else if (event.code == 'KeyS') {
        if (coordsPlayer.style.top != '475px') {
            coordsPlayer.style.top = (parseInt(coordsPlayer.style.top || getComputedStyle(coordsPlayer)['left'], 10) + 25) + 'px';
        }
    }
}
function draw() {
    let divElQ = document.querySelector('.maze-field');
    for (let i = 0; i < matrix.length; i++) {
        let divEl = document.createElement("div");
        divEl.style.width = '20px';
        divEl.style.height = '20px';
        divEl.style.backgroundColor = 'white';
        divElQ.append(divEl);
    }
}
const drawMaze = (maze) => {
    let divElQ = document.querySelector(".maze-field");
    if (maze) {
        for (let i = 0; i < maze.length; i++) {
            let divEl = document.createElement("div");
            divEl.style.width = '20px';
            divEl.style.height = '20px';
            switch (maze.items[0][1]) {
                case 1:
                    divEl.setAttribute("class", "wall");
                    divEl.style.backgroundColor = 'green';

                    break;
                case "W":
                    divEl.setAttribute("id", "win");
                    divEl.style.backgroundColor = 'white';
                    break;
                case "P":
                    divEl.setAttribute('id', 'spawnplayer');
                    divEl.style.opacity = 0;

            }
        }
    }
}
drawMaze(matrix);
document.addEventListener('keydown', onMove);