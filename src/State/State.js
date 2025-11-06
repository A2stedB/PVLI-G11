export default class State{
    constructor(stateMachine){
        this._stateMachine = stateMachine
        this._name;
    }
    execute(){
        console.log("No hay metodos para ejecutar en este estado")
    }

    transition(){
        console.log("No hay transicion al siguiente estado")
    }

    get name(){
        return this._name;
    }

    get stateMachine(){
        return this._stateMachine;
    }
}