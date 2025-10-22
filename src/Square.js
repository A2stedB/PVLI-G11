import { Position } from "./Position.js";
export class Square{
    constructor(x,y){
        this.position = new Position(x,y);
        this.vertex_next = [];
    }
}