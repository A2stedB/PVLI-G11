import EventDispatch from "../Event/EventDispatch.js";
import State from "./State.js";
export class AirAttackState extends State{
    constructor(stateMachine){
        super(stateMachine);
    }

    execute(){
        EventDispatch.emit("Air attacking");
    }
}