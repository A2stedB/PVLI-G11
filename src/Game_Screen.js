import Board from "./Board.js";

export class Game_Screen extends Phaser.Scene{
    constructor(){
        super({key:"Game_Screen"})
    }

    init(){
        console.log("init");
    }

    preload(){
        console.log("preload");
    }

    create(){
        let tablero = new Board(this);
        this.add.existing(tablero);

        let matriz = tablero.matriz;
        const cellSize = 40;
        const graphics = this.add.graphics({ lineStyle: { width: 2, color: 0x00ff00 } });

        for (let y = 0; y < matriz.length; y++) {
        for (let x = 0; x < matriz[y].length; x++) {
            if (matriz[y][x] === 1) {
                graphics.fillStyle(0xff0000);
                graphics.fillRect(x * cellSize, y * cellSize, cellSize, cellSize);
            } else {
                graphics.fillRect(x * cellSize, y * cellSize, cellSize, cellSize); // Draw background cell
            }
                graphics.strokeRect(x * cellSize, y * cellSize, cellSize, cellSize); // Outline for all cells
            }   
        }
    }

    update(){
        console.log("update")
    }

}