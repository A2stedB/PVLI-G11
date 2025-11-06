import EventDispatch from "../Event/EventDispatch.js";
import State from "./State.js";

export class FireState extends State{
    constructor(stateMachine){
        super(stateMachine);
    }

    execute(){
        EventDispatch.emit("Firing");
    }
}