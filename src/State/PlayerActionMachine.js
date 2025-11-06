// import { State } from "./State.js";
import { MoveState } from "./MoveState.js"
import { FireState } from "./FireState.js"
import { AirAttackState } from "./AirAttackState.js"
import {StateMachine} from "./StateMachine.js";

export class PlayerActionMachine extends StateMachine{

    constructor(gameLoopMachine){
        super();
        this._gameLoopMachine = gameLoopMachine;
        this._moveState = new MoveState(this);
        this._fireState = new FireState(this);
        this._airAttackState = new AirAttackState(this);
        this._currentState = this._moveState;
    }

    get moveState(){
        return this._moveState;
    }

    get fireState(){
        return this._fireState;
    }

    get airAttackState(){
        return this._airAttackState;
    }
}