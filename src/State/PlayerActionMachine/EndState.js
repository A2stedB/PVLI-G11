import State from "../State.js";

export class EndState extends State{
    constructor(stateMachine){
        super(stateMachine);
        this._name = "End State"
    }

    onStateEnter(){
        console.log("Updating information")
    }

    onStateExit(){

    }

    transition(){
        this.stateMachine.context.transition();
        return this.stateMachine.stateList.moveState;
    }
}