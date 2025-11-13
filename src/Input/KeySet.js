export class KeySet{
    /**
     * 
     * @param {Array.<Phaser.Input.Keyboard.Key>} keys 
     */
    constructor(keys){
        this.keys = keys;
    }

    enable(){
        this.keys.forEach(key =>{
            // key.on("down");
            key.enabled = true;
        })
    }

    disable(){
        this.keys.forEach(key =>{
            // key.off("down");
            key.enabled = false;
        })
    }
}