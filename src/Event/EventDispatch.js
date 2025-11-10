// import { InputManager } from "./InputManager.js";
import Key from "./InputManager.js";
class EventBroker extends Phaser.Events.EventEmitter{
    constructor(){
        super();
        this.initializeEvent();
    }
    
    //Trasladar al input manager?
    initializeEvent(){
        this.on(Key.D,(state,player)=>{
            switch (state.name){
                case "Move State":
                    this.emit(Event.MOVE,"Right",player)
                case "Fire State":
                    console.log("Fire state received")
                case "Air attack State":
                    console.log("Air attack State received");
            }
        })
    }
}

let EventDispatch = new EventBroker()
export default EventDispatch
