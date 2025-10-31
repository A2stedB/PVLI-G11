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
        this.container = container;
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
        console.log(this.position);
        // this.setAngle(this.orientation);
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

    





















    
    // /**
    //  * 
    //  * @param {Orientation} direction 
    //  */
    // move(direction){
    //     direction = direction%360
    //     if(!Orientation.getAvailableDirection(this.orientation).includes(direction)){
    //         console.log("No se puede mover en esa direccion")
    //     }
    //     else{
    //         let check = (x,y) =>{
    //             return (x+2 < this.container.data.boardWidth) && (x-2 > 0) && (y+2 < this.container.data.boardHeight) && (y-2 > 0)
    //         }
    //         this.orientation = Orientation.getAvailableDirection(this.orientation).at(Orientation.getAvailableDirection(this.orientation).indexOf(direction));
    //         console.log(this.orientation)

    //         let x = this.position.x; let y = this.position.y;

    //         switch (this.orientation){
    //             case 0:
    //                 if(check(x,y-2)) this.position = this.board[x][y-2].position
    //                 break;
    //             case 90:
    //                 if(check(x+2,y)) this.position = this.board[x+2][y].position
    //                 break;
    //             case 180:
    //                 if(check(x,y+2)) this.position = this.board[x][y+2].position
    //                 break;
    //             case 270:
    //                 if(check(x-2,y)) this.position = this.board[x-2][y].position
    //                 break;
    //         }
    //         this.updateSprite();
    //     }
    // }
}
