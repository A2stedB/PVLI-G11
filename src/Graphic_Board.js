/**
 * @extends Phaser.GameObjects.Graphics
 */
import Board from "./Logic_Board.js";
import { Vertex_Graphic } from "./Graphic_Vertex.js";
import { Square_Graphic } from "./Graphic_Square.js";
import { Vertex } from "./Vertex.js";

export default class Graphic_Board extends Phaser.GameObjects.Graphics{
    constructor(scene,x,y,logic,texture){
        super(scene,x,y,logic);
        this.matrix = [];
        this.texture = texture
        // this.board = new Board(x,y);
        // console.table(this.board.matrix)
        this.initialize(scene,x,y,logic);

        scene.add.existing(this);
    }

    initialize(scene,x,y,logic){

        for(let i = 0; i < x; ++i){
            this.matrix[i] = [];
            for(let j = 0; j < y; ++j){
                this.createVertex(scene,i,j,logic);
            }
        }

        console.table(this.matrix);
    }

    createVertex(scene,x,y,logic){
        //console.log(this.board.matrix[x][y])
        if(!(x%2) && !(y%2)){
            this.matrix[x][y] = new Vertex_Graphic(scene,logic.matrix[x][y]);
        }
        else if(x%2 && y%2){
            this.matrix[x][y] = new Square_Graphic(scene,logic.matrix[x][y],this.texture[0]);
        }
        else {
            this.matrix[x][y] = null;
        }   
    }


    //Mejor que solo llame al render y no pasar ningun informacion
    render(GRAPHIC,cellSize){
        this.matrix.forEach(row =>{
            row.forEach(point =>{
                if(point instanceof Square_Graphic){
                    point.render(GRAPHIC,cellSize,this.matrix.length-2,this.matrix.length-2);
                }
                if(point instanceof Vertex_Graphic){
                    point.render(GRAPHIC,cellSize);
                }
            })
        })
        // for(let i = 0;i < this.graphic_matrix.length;++i){
        //     for(let j = 0;j < this.graphic_matrix[0].length;++j){
        //         if(this.graphic_matrix[i][j] instanceof Vertex_Graphic){
        //             console.log(this.graphic_matrix[i][j]);
                    
        //             // this.graphic_matrix[i][j].render(GRAPHIC,cellSize);
        //         }
        //         // let point = this.graphic_matrix[i][j];
        //         // if(point != null){
        //         //     point.render(GRAPHIC,cellSize);
        //         // }
        //     }
        // }
    }

    add(texture){
        this.texture.push(texture);
    }
}