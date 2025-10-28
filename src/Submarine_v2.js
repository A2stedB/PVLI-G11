// import { Position } from "./Position.js";
import { Orientation } from "./Orientation.js";
// import {Game_Board} from "./Board/Game_Board.js";
export class Submarine_v2{
    /**
     * 
     * @param {Number} x 
     * @param {Number} y 
     * @param {Game_Board} board 
     */
    constructor(x,y,board){
        this.board = board;
        this.position = this.board[x*2][y*2].position;
        this.range = 2;
        this.orientation = Orientation.N;
        this.damage = 10;

        console.log("Submarine created")
    }

    /**
     * 
     * @param {Orientation} direction 
     */
    move(direction){
        if(!Orientation.getAvailableDirection(this.orientation).includes(direction)){
            console.log("No se puede mover en esa direccion")
        }
        else{
            console.log("Se puede mover en ese direccion")
        }
    }

    shoot(){

    }
}