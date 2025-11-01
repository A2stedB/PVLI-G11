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
        this.position = this.board.matrix[x*2][y*2].position;
        this.range = 2;
        this.orientation = Orientation.N;
        this.damage = 10;
        this.texture = "Submarine";

        container.add(this);

        this.updateSprite();
        console.log("Submarine created")
    }

    get X(){
        return this.position.x;
    }

    get Y(){
        return this.position.y;
    }
    updateSprite() {
        const cellSize = this.container.data.cellSize;
        this.setPosition(this.position.x * cellSize, this.position.y * cellSize);
        console.log(this.position);
        console.log(this.orientation)
        this.positionReferenceCheck();
        // this.vertexReferenceCheck();
        // this.setAngle(this.orientation);
    }

    canMoveTo(newX, newY) {
        return newX >= 0 && newY >= 0 && newX <=  this.board.matrix.length - 1 && newY <= this.board.matrix[0].length - 1;
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
        this.position.y = newY;
        this.position.x = newY;
        
        }

        if (this.canMoveTo(newX, newY)) {
            this.position = this.board.matrix[newX][newY].position;
            // this.vertexReferenceCheck();
            // this.position.x = newX;
            // this.position.y = newY;
              this.updateSprite();
            console.log("movendose a", this.position);
        } else {
            console.log("fuera del tablero.");
        }
    }

    moveRight() {
        let newdirection = Orientation.N;
        let newX = this.position.x;
        let newY = this.position.y;

        switch (this.orientation) {
            case Orientation.N:
                
                newdirection = Orientation.E;

                 newX += 2;
                break;
            case Orientation.S:
                newdirection = Orientation.W;
                newX -= 2;

                break;
            case Orientation.E:
                newdirection = Orientation.S;
                newY += 2;
                break;
            case Orientation.W:
                newdirection = Orientation.N;
                newY -= 2;
                break;
        }
       
      
        if (this.canMoveTo(newX, newY)) {
            this.position = this.board.matrix[newX][newY].position;
            // this.vertexReferenceCheck();
            this.updateSprite();
            console.log("movendose a", this.position);
        } else {
            console.log("fuera del tablero.");
        }
        this.orientation = newdirection;
        console.log("girar derecha", this.orientation);
    }

    moveLeft() {
        let newdirection = Orientation.N;
          let newX = this.position.x;
        let newY = this.position.y;
        switch (this.orientation) {
            case Orientation.N:
                newdirection = Orientation.W;
                newX -= 2;
                break;
            case Orientation.S:
                newdirection = Orientation.E;
                newX += 2;
                break;
            case Orientation.E:
                newdirection = Orientation.N;
                newY -= 2;
                break;
            case Orientation.W:
                newdirection = Orientation.S;
                newY += 2;
                break;
        }
         if (this.canMoveTo(newX, newY)) {
            this.position = this.board.matrix[newX][newY].position;
            // this.vertexReferenceCheck();
            this.updateSprite();
            console.log("movendose a", this.position);
        } else {
            console.log("fuera del tablero.");
        }
         this.orientation = newdirection;
        console.log("girar izquierda:", this.orientation);
    }

    shoot(){

    }

    //Metodos para debugear
    positionReferenceCheck(){
        console.log(`Position has correct reference: ${this.position === this.board.matrix[this.X][this.Y].position}`);
    }
    vertexReferenceCheck(){
        let x = this.X - 1;
        let y = this.Y + 1;
        let list = this.board.matrix[x][y].nextPoint;
        Array.from(list).forEach((point) =>{
            if(point === this.board.matrix[this.X][this.Y]){
                console.log("Found the vertex!!!")
            }
        })
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
