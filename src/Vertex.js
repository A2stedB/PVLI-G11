
// const Type = {
//         Vertex:"Vertex",
//         Square:"Square"
//     }
// Object.freeze(Type)

export class Vertex{
    constructor(t){
        this.tipo = t;
        this.available = true;
        this.bomb = false;
    }
}