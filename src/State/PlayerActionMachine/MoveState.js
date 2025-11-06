import EventDispatch from "../../Event/EventDispatch.js";
import State from "../State.js";
import { FireState } from "./FireState.js"
import { AirAttackState } from "./AirAttackState.js"
import { StateMachine } from "../StateMachine.js";
import { PlayerActionMachine } from "./PlayerActionMachine.js";

export class MoveState extends State{
    constructor(stateMachine){
        super(stateMachine);
        this._name = "Move State"
        // /**
        //  * @type {PlayerActionMachine}
        //  */
    }
    execute(){
        console.log("Move Phase")
        EventDispatch.emit("Moving");
    }

    transition(){
        return this._stateMachine.stateList.fireState;
    }
}