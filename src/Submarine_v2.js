// import { Position } from "./Position.js";
import { Orientation } from "./Orientation.js";
// import {Game_Board} from "./Board/Game_Board.js";
export class Submarine_v2 extends Phaser.GameObjects.Image{
    /**
     * 
     * @param {Number} x 
     * @param {Number} y 
     * @param {Game_Board} board 
     * 
     */
    constructor(scene, x,y,board,container){
        super(scene,100,100,"Submarine",0);
        this.board = board;
        this.position = this.board[x*2][y*2].position;
        this.range = 2;
        this.orientation = Orientation.N;
        this.damage = 10;
        this.texture = "Submarine";

        container.add(this);
        console.log("Submarine created")
    }


    moveFront(){
        // if(!Orientation.getAvailableDirection(this.orientation).includes(direction)){
        //     console.log("No se puede mover en esa direccion")
        // }
        // else{
            console.log("Se puede mover en ese direccion")
           // no se cambia la orientacion
            switch(this.orientation){
                case Orientation.N:
                    this.position.y -= 2;
                    break;  
                case Orientation.S:
                    this.position.y += 2;
                    break;
                case Orientation.E:
                    this.position.x += 2;
                    break;
                case Orientation.W:
                    this.position.x -= 2;
                    break;
               
            }

       // }

        this.orientation = newdirection;

    }
    moveRight(){
        let newdirection = Orientation.N;
        // if(!Orientation.getAvailableDirection(this.orientation).includes(direction)){
        //     console.log("No se puede mover en esa direccion")
        // }
       // else{
            console.log("Se puede mover en ese direccion")
          
            switch(this.orientation){
                case Orientation.N:
                    this.position.y -= 2;
                    newdirection = Orientation.E;
                    break;  
                case Orientation.S:
                    this.position.y += 2;
                    newdirection = Orientation.W;
                    break;
                case Orientation.E:
                    this.position.x += 2;
                    newdirection = Orientation.S;
                    break;    
                case Orientation.W:
                    this.position.x -= 2;
                    newdirection = Orientation.N;
                    break;
               
            }

      //  }

         this.orientation = newdirection;
    }

    moveLeft(){
        let newdirection = Orientation.N;
        // if(!Orientation.getAvailableDirection(this.orientation).includes(direction)){
        //     console.log("No se puede mover en esa direccion")
        // }
        // else{
            console.log("Se puede mover en ese direccion")
          
            switch(this.orientation){
                case Orientation.N:
                    this.position.y += 2;
                    newdirection = Orientation.W;
                    break;  
                case Orientation.S:
                    this.position.y -= 2;
                    newdirection = Orientation.E;
                    break;
                case Orientation.E:
                    this.position.x -= 2;
                    newdirection = Orientation.N;
                    break;    
                case Orientation.W:
                    this.position.x += 2;
                    newdirection = Orientation.E;
                    break;
               
            }

      //  }
         this.orientation = newdirection;
    }
    

    shoot(){

    }
}

