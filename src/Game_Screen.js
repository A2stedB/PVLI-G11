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
        let tablero = new Board(this,11,11);
        // const graphics = this.add.graphics();
        const cellSize = 40;
        const graphics = this.add.graphics({ lineStyle: { width: 1, color: 0x00ff00 } })
        let m = tablero.matrix;

        for(let i = 0;i < tablero.matrix.length;++i){
            for(let j = 0;j < tablero.matrix[i].length;++j){
                if(m[i][j].tipo == "Casilla"){
                    if(i != tablero.matrix.length -2 && j != tablero.matrix[i].length -2){
                        graphics.fillStyle(0x021561);
                        graphics.fillRect(j*cellSize,i*cellSize,cellSize*2,cellSize*2)
                    }
                }
                if(m[i][j].tipo == "Vertice"){
                    
                    graphics.fillStyle(0xe6e8f0);
                    graphics.fillCircle((j-1)*cellSize,(i-1)*cellSize,2);
                }
            }
        }
        // this.add.existing(tablero);

        // let matriz = tablero.matriz;
        // const cellSize = 40;
        // const graphics = this.add.graphics({ lineStyle: { width: 2, color: 0x00ff00 } });

        // for (let y = 0; y < matriz.length; y++) {
        //     for (let x = 0; x < matriz[y].length; x++) {
        //         if (matriz[y][x] === 1) {
        //             graphics.fillStyle(0xff0000);
        //             graphics.fillRect(x * cellSize, y * cellSize, cellSize, cellSize);
        //         } 
        //         else {
        //             graphics.fillRect(x * cellSize, y * cellSize, cellSize, cellSize); // Draw background cell
        //         }
        //             graphics.strokeRect(x * cellSize, y * cellSize, cellSize, cellSize); // Outline for all cells
        //         }   
        // }
    }

    update(){
        console.log("update")
    }

}