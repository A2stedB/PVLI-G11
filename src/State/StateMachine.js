import State from "./State.js";

export class StateMachine{
    constructor(){
        /**
         * @type {State}
         */
        this._currentState = null;
    }

    /**
     * 
     * @param {State} state 
     */
    setState(state){
        this._currentState = state;
    }

    execute(){
        this._currentState.execute();
    }

    transition(){
        this._currentState = this._currentState.transition();
        console.log(`Changing to ${this._currentState}`)
    }
}