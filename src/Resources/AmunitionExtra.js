import { Resource } from "./Resource.js";

/**
 * Recurso que proporciona munición extra para los cañones
 * "Incrementa los disparos disponibles"
 * Uso: Automático al recogerlo, añade munición al inventario del submarino
 */
export class AmmunitionExtra extends Resource {
    /**
     * @param {Phaser.Scene} scene - La escena de Phaser
     * @param {Number} x - Posición X en el tablero lógico
     * @param {Number} y - Posición Y en el tablero lógico
     * @param {String} texture - Textura del recurso
     * @param {Number} ammoAmount - Cantidad de munición que proporciona (por defecto 2)
     */
    constructor(scene, x, y, texture = "Resource", ammoAmount = 2) {
        super(scene, x, y, texture, "ammunition_extra");
        
        this.ammoAmount = ammoAmount; // Cantidad de disparos extra que proporciona
    }

    /**
     * Aplica el efecto de añadir munición extra al submarino
     * @param {Submarine} submarine - El submarino que recoge el recurso
     */
    applyEffect(submarine) {
        // TODO: Implementar cuando Submarine tenga el sistema de munición
        console.log(`Munición extra recogida: +${this.ammoAmount} disparos`);
        
        // Placeholder para futura implementación:
        // submarine.ammunition += this.ammoAmount;
        // 
        // // Opcional: límite máximo de munición
        // if (submarine.maxAmmunition && submarine.ammunition > submarine.maxAmmunition) {
        //     submarine.ammunition = submarine.maxAmmunition;
        // }
    }

    /**
     * Obtiene la cantidad de munición que proporciona este recurso
     * @returns {Number} Cantidad de disparos extra
     */
    getAmmoAmount() {
        return this.ammoAmount;
    }
}