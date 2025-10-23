import { Square } from "./Square.js";
export class Square_Graphic extends Phaser.GameObjects.Image{

    /**
     * 
     * @param {*} scene 
     * @param {Square} s 
     */
    constructor(scene,s,texture,frame = 0){
        super(scene,s.position.x,s.position.y,texture,frame)
        this.square = s;
        this.texture = texture;
        
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
    render(GRAPHIC,cellSize,max_x,max_y){
        let square = this.scene.add.image((this.square.position.y)*cellSize,(this.square.position.x)*cellSize,"Square",0);
        square.setDisplaySize(cellSize*2,cellSize*2);
        if(this.square.active){
            square.setAlpha(0);
        }
        else{
            square.setAlpha(1);
        }
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
            this.render(0,40,0,0)
            console.log(this.square.active);
        })
    }
}