import { Position } from "./Position.js";
import { Vertex } from "./Vertex.js";
export class Square{

    resource;

    constructor(x,y){
        this.position = new Position(x,y);
        this.nextPoint = [];
        this.active = false;
    }

    /**
     * 
     * @param {Array.<[Square,Vertex,null]>} matrix 
     */
    getNextPoint(matrix){
        let x = this.position.x;
        let y = this.position.y;

        let topLeft = matrix[x-1][y-1];
        let topRight = matrix[x+1][y-1];
        let bottomLeft = matrix[x-1][y+1];
        let bottomRight = matrix[x+1][y+1];
        this.nextPoint.push(topLeft,topRight,bottomLeft,bottomRight)
    }


}