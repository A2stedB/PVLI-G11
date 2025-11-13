const Event = Object.freeze({
    TOGGLE_MAP:Symbol("Toggle Map"),
    MOVE_FRONT:Symbol("Move Front"),
    MOVE_LEFT:Symbol("Move Left"),
    MOVE_RIGHT:Symbol("Move Right"),
    SHOOT:Symbol("Shoot"),
    MOVE:Symbol("Move"),
    DISABLE_KEY:Symbol("Disable key"),
    ENABLE_KEY:Symbol("Enable key")
})

export default Event;