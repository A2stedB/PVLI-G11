import EventDispatch from "../../Event/EventDispatch.js";
import State from "../State.js";
export class AirAttackState extends State{
    constructor(stateMachine){
        super(stateMachine);
        this._name = "Air attack State"
    }

    execute(){
        console.log("Air Attack Phase");
        EventDispatch.emit("Air attacking");
    }

    transition(){
        return this.stateMachine.stateList.endState;
    }
}