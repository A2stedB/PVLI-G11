import { Position } from "./Position";

export default class Board_Element extends Phaser.GameObjects.Graphics{
        constructor(scene,x,y,text){
            super(scene,x,y);
            this.texture = text;

            this.boardPosition = Position(x, y);
    
            scene.add.existing(this);
        }

    render(){
        
    }
}