import { Square } from "./Square.js";
export class Square_Graphic extends Phaser.GameObjects.Image{

    /**
     * 
     * @param {*} scene 
     * @param {Square} s 
     */
    constructor(scene,square,texture,cellSize,offsetX,offsetY){
        super(scene,(square.position.x*cellSize)+offsetX,square.position.y*cellSize+offsetY,texture)
        this.offsetX = offsetX;
        this.offsetY = offsetY;
        this.cellSize = cellSize;

        this.square = square;
        this.texture = texture;
        this.setDisplaySize(cellSize*2,cellSize*2)
        
        
        this.setInteractive();
        this.addEvent();
        
        scene.add.existing(this);
    }
    /**
     * 
     * @param {Phaser.GameObjects.Graphics} GRAPHIC 
     * @param {number} cellSize 
     * @param {number} max 
     */
    render(){
        //this.setPosition((this.square.position.x*this.cellSize)+this.offsetX,this.square.position.y*this.cellSize+this.offsetY)
        this.setDisplaySize(this.cellSize*2,this.cellSize*2);
        if(this.square.active){
            this.setAlpha(1);
        }
        else{
            this.setAlpha(0);
        }
        // if(this.square.position.x != max_x && this.square.position.y != max_y){
        // }
        // console.log()
        // if(this.square.position.x != max_x && this.square.position.y != max_y){
        //     // console.log("Dibujando: " + this.square.position.x + " " + this.square.position.y);
        //     GRAPHIC.fillStyle(0x021561);
        //     GRAPHIC.fillRect((this.square.position.y)*cellSize,(this.square.position.x)*cellSize,cellSize*2,cellSize*2)
        // }
    }

    addEvent(){
        this.on("pointerdown",()=>{
            this.square.active = !this.square.active
            console.log(this.square.position.x + " " + this.square.position.y)
            this.render();
            console.log(this.square.active);
        })
    }
}

// const evebts = {
//     SUBMARINE_MOVED = subms
// }