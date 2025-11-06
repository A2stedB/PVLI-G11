import State from "../State.js";

export class EndState extends State{
    constructor(stateMachine){
        super(stateMachine);
        this._name = "End State"
    }

    execute(){

        console.log("Updating information")
    }

    transition(){
        this.stateMachine.context.transition();
        return this.stateMachine.stateList.moveState;
    }
}