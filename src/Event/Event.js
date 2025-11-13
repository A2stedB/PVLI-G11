const Event = Object.freeze({
    TOGGLE_MAP:Symbol("Toggle Map"),
    MOVE_FRONT:Symbol("Move Front"),
    MOVE_LEFT:Symbol("Move Left"),
    MOVE_RIGHT:Symbol("Move Right"),
    SHOOT:Symbol("Shoot"),
    MOVE:"Move",
    DISABLE_KEY:"Disable key",
    ENABLE_KEY:"Enable key"
})

export default Event;