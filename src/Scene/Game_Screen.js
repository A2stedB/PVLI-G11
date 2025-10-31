import Game_Board from "../Board/Game_Board.js";
import { Submarine_v2 } from "../Submarine_v2.js";
import EventDispatch from "../Event/EventDispatch.js";
import Event from "../Event/Event.js";
import { InputManager } from "../Event/InputManager.js";

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
        this.load.image("Submarine","assets/red.png")
    }
    
    //La dimension de la tabla tiene que ser un numero impar
    create(){
        let texturas = ["Square","BG", "Submarine"];
        this.tablero = new Game_Board(this,11,11,200,0,texturas,40);

        this.tablero.render();


this.inputManager = new InputManager(this, this.tablero.submarines.blue, this.tablero.submarines.red);
        this.input.keyboard.on('keydown-M', ()=>{
            EventDispatch.emit(Event.TOGGLE_MAP); 
            console.log("M pressed")

        })
        
        this.input.keyboard.on('keydown-D', ()=>{
            EventDispatch.emit(Event.MOVE_RIGHT); 
            console.log("D pressed")
        })

        this.input.keyboard.on('keydown-W', ()=>{
            EventDispatch.emit(Event.MOVE_FRONT); 
            console.log("W pressed")
        })



        // EventDispatch.on("keydown-M",()=>{EventDispatch.emit("RefreshMap"); console.log("M pressed")})
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

    update(){}

    

}