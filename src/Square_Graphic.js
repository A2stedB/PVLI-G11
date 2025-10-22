import { Square } from "./Square.js";
export class Square_Graphic extends Phaser.GameObjects.Graphics{

    /**
     * 
     * @param {*} scene 
     * @param {Square} s 
     */
    constructor(scene,s){
        super(scene,s)
        this.square = s; 
    }
    /**
     * 
     * @param {Phaser.GameObjects.Graphics} GRAPHIC 
     * @param {number} cellSize 
     * @param {number} max 
     */
    render(GRAPHIC,cellSize,max_x,max_y){
        if(this.square.position.x != max_x && this.square.position.y != max_y){
            console.log("Dibujando: " + this.square.position.x + " " + this.square.position.y);
            GRAPHIC.fillStyle(0x021561);
            GRAPHIC.fillRect((this.square.position.y)*cellSize,(this.square.position.x)*cellSize,cellSize*2,cellSize*2)
        }
    }
}