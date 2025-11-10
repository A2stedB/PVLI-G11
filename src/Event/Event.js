const Event = Object.freeze({
    TOGGLE_MAP:Symbol("Toggle Map"),
    MOVE_FRONT:Symbol("Move Front"),
    MOVE_LEFT:Symbol("Move Left"),
    MOVE_RIGHT:Symbol("Move Right"),
    SHOOT:Symbol("Shoot"),
    MOVE:{
        Left:"Move left",
        front:"Move front",
        right:"Move right"
    }
})

export default Event;