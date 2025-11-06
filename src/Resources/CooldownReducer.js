import { Resource } from "./Resource.js";
import { SubmarineComplete } from "../Submarine/SubmarineComplete.js";

/**
 * Recurso que reduce el cooldown del ataque aéreo
 * "Reduce 1 turno el tiempo de espera del próximo ataque aéreo"
 */
export class CooldownReducer extends Resource {
    /**
     * @param {*} scene - La escena de Phaser
     * @param {Number} x - Posición X en el tablero lógico
     * @param {Number} y - Posición Y en el tablero lógico
     * @param {String} texture - Textura del recurso
     */
    constructor(scene, x, y, texture = "Resource") {
        super(scene, x, y, texture, "cooldown_reducer");
        
        this.cooldownReduction = 1; // Turnos que reduce del cooldown
    }

    /**
     * Aplica el efecto de reducir el cooldown del ataque aéreo
     * @param {SubmarineComplete} submarine - El submarino que recoge el recurso
     */
    applyEffect(submarine) {
        // TODO: Implementar cuando Submarine tenga el sistema de cooldown
        console.log(`Cooldown de ataque aéreo reducido en ${this.cooldownReduction} turno(s)`);
        
        // Placeholder para futura implementación:
        // if (submarine.aerialAttackCooldown > 0) {
        //     submarine.aerialAttackCooldown -= this.cooldownReduction;
        //     if (submarine.aerialAttackCooldown < 0) {
        //         submarine.aerialAttackCooldown = 0;
        //     }
        // }
    }
}