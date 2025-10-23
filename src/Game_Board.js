import Logic_Board from "./Logic_Board.js"
import Graphic_Board from "./Graphic_Board.js"

export default class Game_Board extends Phaser.GameObjects.Graphics{
    constructor(scene,x,y,texture,cellSize){
        super(scene,x,y);
        this.logic = new Logic_Board(x,y);
        this.graphic = new Graphic_Board(scene,x,y,this.logic,texture,cellSize);

        scene.add.existing(this);
    }

    /**
     * 
     * @param {Logic_Board} logic 
     * @param {Graphic_Board} graphic 
     */

    render(){
        this.graphic.render();
    }

    addGraphic(texture){
        this.graphic.add(texture);
    }
}