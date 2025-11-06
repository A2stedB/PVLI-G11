import State from "../State.js";

export class CheckState extends State{
    constructor(stateMachine){
        super(stateMachine);
        this._name = "Check State"
    }

    execute(){
        this.stateMachine.updateTurn();
        console.log("Updating information")
    }

    transition(){
        return this.stateMachine.stateList.player1;
    }
}