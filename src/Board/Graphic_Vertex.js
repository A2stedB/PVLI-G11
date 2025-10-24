import { Vertex } from "./Vertex.js";

export class Vertex_Graphic extends Phaser.GameObjects.Graphics{
    constructor(scene,graphic,cellSize,v){
        super(scene,v);
        this.graphic = graphic;
        this.cellSize = cellSize;
        this.vertex= v; 

        scene.add.existing(this);
    }
    /**
     * 
     * @param {Phaser.GameObjects.Graphics} graphic 
     * @param {Number} cellSize 
     */
    render(){
        if((this.vertex.position.x%2 == 1) && (this.vertex.position.y%2 == 1)){
            this.graphic.fillStyle(0x00fbff);
        }
        else{
            this.graphic.fillStyle(0xe6e8f0);
        }
        this.graphic.fillCircle((this.vertex.position.x)*this.cellSize,(this.vertex.position.y)*this.cellSize,2);
    }
}