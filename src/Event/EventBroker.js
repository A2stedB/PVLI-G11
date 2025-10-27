class EventBroker extends Phaser.Events.EventEmitter{
    constructor(){
        super();
        this.subscription = [];
    }
    
    subscribe(event,callback){
        this.on(event,callback);
        // if(!this.subscription[event]){
        //     this.subscription[event] = [];
        // }
        // this.subscription[event].push(callback);
        console.log("just subscribed to " + event)
    }
    
    publish(event,...data){
        this.subscription[event].array.forEach(element => {
            element.callback(data);
        });
        console.log("Just published " + event)
    }
}

let EventDispatch = new EventBroker()
export default EventDispatch
