import { Vertex } from "./Vertex.js";
import { Square } from "./Square.js";

export default class Logic_Board{
    constructor(x,y){
        this.matrix = [];
        this.initialize(x,y);
    }

    /**
     * @description Funcion que inicializa la tabla
     * @param {Number} x Anchura
     * @param {Number} y Altura
     */
    initialize(x,y){
        for(let i = 0; i < x; ++i){
            this.matrix[i] = [];
            for(let j = 0; j < y; ++j){
                this.createVertex(i,j);
            }
        }
    }

    /**
     * 
     * @param {*} x 
     * @param {*} y 
     */
    createVertex(x,y){
        if(!(x%2) && !(y%2)){
            this.matrix[x][y] = new Vertex(x,y);
        }
        else if(x%2 && y%2){
            this.matrix[x][y] = new Square(x,y);
        }
        else {
            this.matrix[x][y] = null;
        }
        //console.log("Creando vertices en: " + x + " " + y + + " " + this.matrix[x][y].tipo)
    }
}