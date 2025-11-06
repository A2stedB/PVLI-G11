import { Submarine_v2 } from "../Submarine/Submarine_v2.js";
import EventDispatch from "../Event/EventDispatch.js";
import Event from "../Event/Event.js";


export class InputManager {
    /**
     * 
     * @param {Submarine_v2} player1
     * @param {Submarine_v2} player2
     * @param {Phaser.Scene} scene
     */


    constructor(scene, player1, player2){
            
        this.scene = scene;
        this.board = this.scene.tablero;
        this.player1 = player1;
        this.player2 = player2;

        this.createKeys();
        this.createEvents();
    }

    createKeys(){
       
        // Input submarino 1 (red )
        this.w = this.scene.input.keyboard.addKey('W');
        this.s = this.scene.input.keyboard.addKey('S');
        this.a = this.scene.input.keyboard.addKey('A');
        this.d = this.scene.input.keyboard.addKey('D');
         this.space = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
        
        
        // Input submarino 2 (blue)
        this.upArrow = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
        this.downArrow = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
        this.rightArrow = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
        this.leftArrow = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        
    }

    createEvents(){

        this.scene.input.keyboard.on('keydown-M', ()=>{
            EventDispatch.emit(Event.TOGGLE_MAP); 
            console.log("M pressed")

        })
        
        this.scene.input.keyboard.on('keydown-D', ()=>{
            EventDispatch.emit(Event.MOVE_RIGHT); 
            console.log("D pressed")
        })

        this.scene.input.keyboard.on('keydown-W', ()=>{
            EventDispatch.emit(Event.MOVE_FRONT); 
            console.log("W pressed")
        })

        this.scene.input.keyboard.on('keydown-A',()=>{
            EventDispatch.emit(Event.MOVE_LEFT); 
            console.log("A pressed")
        })
        this.scene.input.keyboard.on('keydown-SPACE',()=>{
            EventDispatch.emit(Event.SHOOT); 
            console.log("SPACE pressed")
        })

    }

    preUpdate(){

    }

}