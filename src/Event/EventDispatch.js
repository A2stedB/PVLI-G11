// import { InputManager } from "./InputManager.js";
import Key from "../Input/InputManager.js";
class EventBroker extends Phaser.Events.EventEmitter{
    constructor(){
        super();
    }
}

let EventDispatch = new EventBroker();
export default EventDispatch;
