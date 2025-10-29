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

        this.updateSprite();
        console.log("Submarine created")
    }

     updateSprite() {
        const cellSize = this.container.data.cellSize;
        this.setPosition(this.position.x * cellSize, this.position.y * cellSize);
        this.setAngle(this.orientation);
    }

  canMoveTo(newX, newY) {
        return newX >= 0 && newY >= 0 && newX <=  this.board.length - 1 && newY <= this.board[0].length - 1;
    }

    moveFront() {
        let newX = this.position.x;
        let newY = this.position.y;

        switch (this.orientation) {
            case Orientation.N:
                newY -= 2;
                break;
            case Orientation.S:
                newY += 2;
                break;
            case Orientation.E:
                newX += 2;
                break;
            case Orientation.W:
                newX -= 2;
                break;
        }

        if (this.canMoveTo(newX, newY)) {
            this.position.x = newX;
            this.position.y = newY;
              this.updateSprite();
            console.log("movendose a", this.position);
        } else {
            console.log("fuera del tablero.");
        }
    }

    moveRight() {
        let newdirection = Orientation.N;
        switch (this.orientation) {
            case Orientation.N:
                newdirection = Orientation.E;
                break;
            case Orientation.S:
                newdirection = Orientation.W;
                break;
            case Orientation.E:
                newdirection = Orientation.S;
                break;
            case Orientation.W:
                newdirection = Orientation.N;
                break;
        }
        this.orientation = newdirection;
        this.orientation = (this.orientation + 90) % 360;
        this.updateSprite();
        console.log("girar derecha", this.orientation);
    }

    moveLeft() {
        let newdirection = Orientation.N;
        switch (this.orientation) {
            case Orientation.N:
                newdirection = Orientation.W;
                break;
            case Orientation.S:
                newdirection = Orientation.E;
                break;
            case Orientation.E:
                newdirection = Orientation.N;
                break;
            case Orientation.W:
                newdirection = Orientation.S;
                break;
        }
        this.orientation = newdirection;
        this.orientation = (this.orientation - 90 + 360) % 360;
        this.updateSprite();
        console.log("girar izquierda:", this.orientation);
    }

    shoot(){

    }
}

