import State from "../State.js";
import EventDispatch from "../../Event/EventDispatch.js";
import Event from "../../Event/Event.js";

export class Player1 extends State{
    constructor(stateMachine){
        super(stateMachine);
        this._name = "Player 1"
    }

    onStateEnter(){
        //Bloquear teclas del jugador 2
        EventDispatch.emit(Event.DISABLE_KEY,2);
    }

    transition(){
        return this.stateMachine.stateList.player2;
    }
}