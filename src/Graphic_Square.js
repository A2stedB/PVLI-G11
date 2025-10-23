import { Square } from "./Square.js";
export class Square_Graphic extends Phaser.GameObjects.Image{

    /**
     * 
     * @param {*} scene 
     * @param {Square} s 
     */
    constructor(scene,s,texture,cellSize,max_x,max_y){
        super(scene,(s.position.x*cellSize),(s.position.y*cellSize),texture)
        this.cellSize = cellSize;
        this.max_x = max_x;
        this.max_y = max_y;
        this.square = s;
        this.texture = texture;
        this.setDisplaySize(cellSize*2,cellSize*2)
        
        scene.add.existing(this);

        this.setInteractive();
        this.addEvent();
        
    }
    /**
     * 
     * @param {Phaser.GameObjects.Graphics} GRAPHIC 
     * @param {number} cellSize 
     * @param {number} max 
     */
    render(){
        this.setDisplaySize(this.cellSize*2,this.cellSize*2);
        if(this.square.active){
            this.setAlpha(1);
        }
        else{
            this.setAlpha(0.1);
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
        this.on("pointerover",()=>{
            this.square.active = !this.square.active
            console.log(this.square.position.x + " " + this.square.position.y)
            this.render();
            console.log(this.square.active);
        })
    }
}