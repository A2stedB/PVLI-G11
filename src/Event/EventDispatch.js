class EventBroker extends Phaser.Events.EventEmitter{
    constructor(){
        super();
    }
}

let EventDispatch = new EventBroker()
export default EventDispatch
