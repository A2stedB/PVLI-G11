import { Vertex } from "./Vertex.js";
import { Square } from "./Square.js";
export default class Board{
    constructor(x,y){
        // super(x,y)
        this.initialize(x,y);
        //Declarar los miembros de la clase
        // this.matrix = Array(x).fill(Array(y));

        // this.matriz = [[1,2,3,4,5],
        //           [6,7,8,9,10],
        //           [11,12,13,14,15],
        //           [16,17,18,19,20],
        //           [21,22,23,24,25,26]]

        // console.log("Tablero cargado");
    }

    /**
     * @description Funcion que inicializa la tabla
     * @param {Number} x Anchura
     * @param {Number} y Altura
     */
    initialize(x,y){
        // this.matrix = Array(x).fill(Array(y)); 
        //this.matrix = Array.from(Array(9), () => Array.from(Array(9)));
        // this.matrix = Array.from({x,y},() =>) 
        this.matrix = [];
        // console.log(this.matrix)

        for(let i = 0; i < x; ++i){
            this.matrix[i] = [];
            for(let j = 0; j < y; ++j){
                this.createVertex(i,j);
            }
        }

        //console.table(this.matrix);
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