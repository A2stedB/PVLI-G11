
// const Type = {
//         Vertex:"Vertex",
//         Square:"Square"
//     }
// Object.freeze(Type)
import { Position } from "./Position.js";
export class Vertex{
    constructor(x,y){
        this.position = new Position(x,y);
        this.available = true;
    }
}