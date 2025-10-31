import { Scene } from "phaser";
import Submarine from "../Submarine";

export class InputManager {
    /**
     * 
     * @param {Submarine} player1
     * @param {Submarine} player2
     * @param {Scene} scene
     */


    constructor(scene, player1, player2){
            
        this.board = board;
        this.scene = scene;
        this.player1 = player1;
        this.player2 = player2;

        this.createKeys();
        this.createEvents();
        

    }

    createKeys(){
        // Input submarino 1
        this.w = this.scene.input.keyboard.addKey('W');
        this.s = this.scene.input.keyboard.addKey('S');
        this.a = this.scene.input.keyboard.addKey('A');
        this.d = this.scene.input.keyboard.addKey('D');
        
        // Input submarino 2
        this.upArrow = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
        this.downArrow = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
        this.rightArrow = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
        this.leftArrow = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        
    }

    createEvents(){

        

    }

}