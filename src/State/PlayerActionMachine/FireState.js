import EventDispatch from "../../Event/EventDispatch.js";
import State from "../State.js";

export class FireState extends State{
    constructor(stateMachine){
        super(stateMachine);
        this._name = "Fire State"
    }

    onStateEnter(){
        // console.log("Fire Phase");
        EventDispatch.emit("Firing");
    }

    onStateExit(){
        
    }

    transition(){
        return this._stateMachine.stateList.airAttackState;
    }
}