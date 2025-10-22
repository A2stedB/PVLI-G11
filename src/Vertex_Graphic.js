import { Vertex } from "./Vertex.js";

export class Vertex_Graphic extends Phaser.GameObjects.Graphics{
    constructor(scene,v){
        super(scene,v);
        this.vertex= v; 
    }
    /**
     * 
     * @param {Phaser.GameObjects.Graphics} GRAPHIC 
     * @param {Number} cellSize 
     */
    render(GRAPHIC,cellSize){
        GRAPHIC.fillStyle(0xe6e8f0);
        GRAPHIC.fillCircle((this.vertex.position.y-1)*cellSize,(this.vertex.position.x-1)*cellSize,2);
    }
}