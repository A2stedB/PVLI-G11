import GameBoard from "../Board/Game_Board.js";
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
        this.load.image("BG","assets/GameBoard_BG.jpg")
        this.load.image("Submarine","assets/red.png")
    }
    
    //La dimension de la tabla tiene que ser un numero impar
    create(){
        let texturas = ["Square","BG", "Submarine"];
        this.tablero = new GameBoard(this,11,11,200,0,texturas,40);
        this.inputManager = new InputManager(this, this.tablero.submarines.blue, this.tablero.submarines.red);
    }

    update(){}

    

}