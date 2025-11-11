import EventDispatch from "../Event/EventDispatch.js";
import Event from "../Event/Event.js";
import { SubmarineComplete } from "../Submarine/SubmarineComplete.js";
import { KeySet } from "./KeySet.js";


const Key = Object.freeze({
    D:"D"
})

export default Key;

export class InputManager {
    /**
     * 
     * @param {SubmarineComplete} player1
     * @param {SubmarineComplete} player2
     * @param {Phaser.Scene} scene
     */


    constructor(scene, player1, player2,gameloopMachine,playerActionMachine){
        
        this.gameloopMachine = gameloopMachine;
        this.playerActionMachine = playerActionMachine;
        this.scene = scene;
        this.board = this.scene.tablero;
        this.player1 = player1;
        this.player2 = player2;

        this.createKeys();
        this.createEvents();
        this.KeyParse();
    }

    createKeys(){   
       
        // Input submarino 1 (red )
        this.w = this.scene.input.keyboard.addKey('W');
        this.s = this.scene.input.keyboard.addKey('S');
        this.a = this.scene.input.keyboard.addKey('A');
        this.d = this.scene.input.keyboard.addKey('D');
        this.playe1Key = new KeySet([this.w,this.s,this.a,this.d])
        this.space = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
        
        
        // Input submarino 2 (blue)
        this.upArrow = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
        this.downArrow = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
        this.rightArrow = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
        this.leftArrow = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);

        this.playe2Key = new KeySet([this.upArrow,this.downArrow,this.rightArrow,this.leftArrow])
        
    }

    createEvents(){

        this.scene.input.keyboard.on('keydown-M', ()=>{
            EventDispatch.emit(Event.TOGGLE_MAP); 
            console.log("M pressed")

        })
        
        this.scene.input.keyboard.on('keydown-D', ()=>{
            EventDispatch.emit(Key.D,this.playerActionMachine.currentState.name,this.player1); 
            console.log("D pressed") 
            this.playerActionMachine.transition();
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

        this.scene.input.keyboard.on('keydown-RIGHT', ()=>{
            EventDispatch.emit(Event.MOVE_RIGHT); 
            console.log("RIGHT pressed")
        })

        this.scene.input.keyboard.on('keydown-UP', ()=>{
            EventDispatch.emit(Event.MOVE_FRONT); 
            console.log("UP pressed")
        })
        this.scene.input.keyboard.on('keydown-LEFT',()=>{
            EventDispatch.emit(Event.MOVE_LEFT); 
            console.log("LEFT pressed")
        })   
    

    }

    KeyParse(){
        // EventDispatch.on(Key.D,(state,player)=>{
        //     switch()
        // })

        // EventDispatch.on()
    }

    preUpdate(){

    }

}