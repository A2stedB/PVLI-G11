import State from "../State.js";

export class Player2 extends State{
    constructor(stateMachine){
        super(stateMachine);
        this._name = "Player 2"
    }

    execute(){
        //Bloquear teclas del jugador 1
    }

    transition(){
        return this.stateMachine.stateList.checkState;
    }
}