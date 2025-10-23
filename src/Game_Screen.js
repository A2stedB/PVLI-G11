import Board from "./Logic_Board.js";
import Board_Graphic from "./Graphic_Board.js";
import Graphic_Board from "./Graphic_Board.js";
import Game_Board from "./Game_Board.js";

export class Game_Screen extends Phaser.Scene{
    constructor(){
        super({key:"Game_Screen"})

        this.tablero;
    }
    
    init(){
        console.log("init");
        this.tablero;
    }
    
    preload(){
        console.log("preload");
        
        this.load.image("Square","Page/img/Profile/Lappland.jpeg")
        this.load.image("BG","Page/img/Profile/icon.jpg")
    }
    
    //La dimension de la tabla tiene que ser un numero impar
    create(){
        let texturas = ["Square","BG"];
        this.tablero = new Game_Board(this,12,12,texturas,40);
        //const GRAPHIC = this.add.graphics({ lineStyle: { width: 1, color: 0x00ff00 } });
        // tablero.addGraphic("Square")
        // let tablero = new Graphic_Board(this,15,15);
        
        this.tablero.render();
        // const graphics = this.add.graphics();
        // const cellSize = 40;
        // const graphics = this.add.graphics({ lineStyle: { width: 1, color: 0x00ff00 } })
        // let m = tablero.matrix;

        // for(let i = 0;i < tablero.matrix.length;++i){
        //     for(let j = 0;j < tablero.matrix[i].length;++j){
        //         if(m[i][j].tipo == "Casilla"){
        //             if(i != tablero.matrix.length -2 && j != tablero.matrix[i].length -2){
        //                 graphics.fillStyle(0x021561);
        //                 graphics.fillRect(j*cellSize,i*cellSize,cellSize*2,cellSize*2)
        //             }
        //         }
        //         if(m[i][j].tipo == "Vertice"){
                    
        //             graphics.fillStyle(0xe6e8f0);
        //             graphics.fillCircle((j-1)*cellSize,(i-1)*cellSize,2);
        //         }
        //     }
        // }
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
        // console.log("update")
        //this.tablero.render(GRAPHIC,40);
    }

}