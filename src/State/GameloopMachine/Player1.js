import State from "../State.js";

export class Player1 extends State{
    constructor(stateMachine){
        super(stateMachine);
        this._name = "Player 1"
    }

    execute(){
        //Bloquear teclas del jugador 2
    }

    transition(){
        return this.stateMachine.stateList.player2;
    }
}