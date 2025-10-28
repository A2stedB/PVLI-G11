export const Orientation = Object.freeze({
    N:Symbol(0),
    E:Symbol(90),
    S:Symbol(180),
    W:Symbol(270),

    /**
     * 
     * @param {Orientation} direction 
     * @returns {Array{Orientation}}
     */
    getAvailableDirection(direction){
        return [direction,(direction+90)%360,(direction-90)%360]
    }
})