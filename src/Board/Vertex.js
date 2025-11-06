import { Position } from "../Board/Position.js";
export class Vertex{
    constructor(x,y){
        this.position = new Position(x,y);
        this.available = true;
    }
}