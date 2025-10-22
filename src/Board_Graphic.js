/**
 * @extends Phaser.GameObjects.Graphics
 */
import Board from "./Board.js";
import { Vertex_Graphic } from "./Vertex_Graphic.js";
import { Square_Graphic } from "./Square_Graphic.js";
import { Vertex } from "./Vertex.js";
export default class Board_Graphic extends Phaser.GameObjects.Graphics{
    constructor(scene,x,y){
        super(scene,x,y);
        this.board = new Board(x,y);
        console.table(this.board.matrix)
        this.initialize(scene,x,y);
    }

    initialize(scene,x,y){
        this.graphic_matrix = [];

        for(let i = 0; i < x; ++i){
            this.graphic_matrix[i] = [];
            for(let j = 0; j < y; ++j){
                this.createVertex(scene,i,j);
            }
        }

        console.table(this.graphic_matrix);
    }

    createVertex(scene,x,y){
        //console.log(this.board.matrix[x][y])
        if(!(x%2) && !(y%2)){
            this.graphic_matrix[x][y] = new Vertex_Graphic(scene,this.board.matrix[x][y]);
        }
        else if(x%2 && y%2){
            this.graphic_matrix[x][y] = new Square_Graphic(scene,this.board.matrix[x][y]);
        }
        else {
            this.graphic_matrix[x][y] = null;
        }   
    }

    render(GRAPHIC,cellSize){
        this.graphic_matrix.forEach(row =>{
            row.forEach(point =>{
                if(point instanceof Square_Graphic){
                    point.render(GRAPHIC,cellSize,this.graphic_matrix.length-2,this.graphic_matrix.length-2);
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
}