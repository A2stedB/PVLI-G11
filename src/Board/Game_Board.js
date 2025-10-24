import Logic_Board from "./Logic_Board.js"
import { Vertex_Graphic } from "./Graphic_Vertex.js";
import { Square_Graphic } from "./Graphic_Square.js";

export default class Game_Board extends Phaser.GameObjects.Image{
    constructor(scene,x,y,texture,cellSize){
        super(scene,((x-2)*cellSize)/2,((y-2)*cellSize)/2,texture[1]);

        this.texture = texture
        this.cellSize = cellSize;
        this.GRAPHIC = scene.add.graphics({ lineStyle: { width: 1, color: 0x00ff00 } });
        this.logic = new Logic_Board(x,y);


        this.setAlpha(0.1);
        this.setDisplaySize(x*cellSize,y*cellSize)
        //Dejar la grafica directamente aqui
        this.graphic = []
        this.Graphic_initialize(scene,x,y,this.logic);

        scene.add.existing(this);
    }

    render(){
        this.graphic.forEach((row) =>{
            row.forEach(point =>{
                if(point instanceof Square_Graphic){
                    point.render();
                }
                if(point instanceof Vertex_Graphic){
                    point.render();
                }
            })
        })

        console.table(this.graphic)
    }

    Graphic_initialize(scene,x,y,logic){

        for(let i = 0; i < x; ++i){
            this.graphic[i] = [];
            for(let j = 0; j < y; ++j){
                this.Create_Graphic_Point(scene,i,j);
            }
        }
        console.table(this.graphic);
    }

    Create_Graphic_Point(scene,x,y){
        if((x%2 == 0) && (y%2 == 0)){
            this.graphic[x][y] = new Vertex_Graphic(scene,this.GRAPHIC,this.cellSize,this.logic.matrix[x][y]);
        }
        else if((x%2 == 1) && (y%2 == 1)){
            this.graphic[x][y] = new Square_Graphic(scene,this.logic.matrix[x][y],this.texture[0],40);
        }
        else {
            this.graphic[x][y] = null;
        }   
    }

}