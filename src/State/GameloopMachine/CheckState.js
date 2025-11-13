import State from "../State.js";

export class CheckState extends State{
    constructor(stateMachine){
        super(stateMachine);
        this._name = "Check State"
    }

    onStateEnter(){
        this.stateMachine.updateTurn();
        console.log("Updating information")
        console.log(`Ronda ${this.stateMachine.turn}`)
    }
    onStateExit(){
        
    }

    transition(){
        return this.stateMachine.stateList.player1;
    }
}