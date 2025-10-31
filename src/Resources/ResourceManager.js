import { CooldownReducer } from "./Cooldown_Reducer.js";
import { MovementLimiter } from "./Movement_Limiter.js";
import { RepairKit } from "./Repair_Kit.js";
import { AmmunitionExtra } from "./Ammunition_Extra.js";

/**
 * Gestor de recursos del juego
 * Facilita la creación, distribución y gestión de recursos en el mapa
 */
export class ResourceManager {
    /**
     * @param {Phaser.Scene} scene - La escena de Phaser
     * @param {Game_Board} board - El tablero de juego
     */
    constructor(scene, board) {
        this.scene = scene;
        this.board = board;
        this.resources = []; // Array de todos los recursos activos en el mapa
        
        // Tipos de recursos disponibles
        this.resourceTypes = {
            COOLDOWN_REDUCER: "cooldown_reducer",
            MOVEMENT_LIMITER: "movement_limiter",
            REPAIR_KIT: "repair_kit",
            AMMUNITION_EXTRA: "ammunition_extra"
        };
    }

    /**
     * Crea un recurso específico en una posición del mapa
     * @param {String} type - Tipo de recurso (usar resourceTypes)
     * @param {Number} x - Posición X en el tablero lógico
     * @param {Number} y - Posición Y en el tablero lógico
     * @param {String} texture - Textura del recurso
     * @returns {Resource} El recurso creado
     */
    createResource(type, x, y, texture = "Resource") {
        let resource = null;

        switch(type) {
            case this.resourceTypes.COOLDOWN_REDUCER:
                resource = new CooldownReducer(this.scene, x, y, texture);
                break;
            
            case this.resourceTypes.MOVEMENT_LIMITER:
                resource = new MovementLimiter(this.scene, x, y, texture);
                break;
            
            case this.resourceTypes.REPAIR_KIT:
                resource = new RepairKit(this.scene, x, y, texture, 30); // 30 HP de curación
                break;
            
            case this.resourceTypes.AMMUNITION_EXTRA:
                resource = new AmmunitionExtra(this.scene, x, y, texture, 2); // 2 disparos extra
                break;
            
            default:
                console.error(`Tipo de recurso desconocido: ${type}`);
                return null;
        }

        if (resource) {
            this.resources.push(resource);
            console.log(`Recurso ${type} creado en (${x}, ${y})`);
        }

        return resource;
    }

    /**
     * Crea un recurso aleatorio en una posición del mapa
     * @param {Number} x - Posición X en el tablero lógico
     * @param {Number} y - Posición Y en el tablero lógico
     * @param {String} texture - Textura del recurso
     * @returns {Resource} El recurso creado
     */
    createRandomResource(x, y, texture = "Resource") {
        const types = Object.values(this.resourceTypes);
        const randomType = types[Math.floor(Math.random() * types.length)];
        return this.createResource(randomType, x, y, texture);
    }

    /**
     * Distribuye recursos de forma aleatoria en el mapa
     * @param {Number} count - Cantidad de recursos a distribuir
     * @param {String} texture - Textura de los recursos
     */
    distributeRandomResources(count, texture = "Resource") {
        const availablePositions = this.getAvailablePositions();
        
        if (availablePositions.length < count) {
            console.warn(`No hay suficientes posiciones disponibles. Solicitados: ${count}, Disponibles: ${availablePositions.length}`);
            count = availablePositions.length;
        }

        // Mezclar posiciones aleatoriamente
        this.shuffleArray(availablePositions);

        // Crear recursos en las primeras 'count' posiciones
        for (let i = 0; i < count; i++) {
            const pos = availablePositions[i];
            this.createRandomResource(pos.x, pos.y, texture);
        }

        console.log(`${count} recursos distribuidos aleatoriamente en el mapa`);
    }

    /**
     * Distribuye una cantidad específica de cada tipo de recurso
     * @param {Object} distribution - Objeto con la cantidad de cada tipo
     * Ejemplo: { cooldown_reducer: 2, repair_kit: 3, movement_limiter: 1, ammunition_extra: 2 }
     * @param {String} texture - Textura de los recursos
     */
    distributeResourcesByType(distribution, texture = "Resource") {
        const availablePositions = this.getAvailablePositions();
        let positionIndex = 0;

        // Mezclar posiciones aleatoriamente
        this.shuffleArray(availablePositions);

        for (const [type, count] of Object.entries(distribution)) {
            for (let i = 0; i < count; i++) {
                if (positionIndex >= availablePositions.length) {
                    console.warn("No hay más posiciones disponibles para recursos");
                    return;
                }

                const pos = availablePositions[positionIndex];
                this.createResource(type, pos.x, pos.y, texture);
                positionIndex++;
            }
        }

        console.log("Recursos distribuidos por tipo en el mapa");
    }

    /**
     * Obtiene todas las posiciones válidas para colocar recursos
     * @returns {Array} Array de objetos {x, y} con posiciones disponibles
     */
    getAvailablePositions() {
        const positions = [];
        const matrix = this.board.matrix.logic;

        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix[i].length; j++) {
                // Los recursos se colocan en vértices (posiciones pares)
                if (i % 2 === 0 && j % 2 === 0) {
                    // Verificar que no esté ocupado por submarinos u otros elementos
                    if (this.isPositionAvailable(i, j)) {
                        positions.push({ x: i, y: j });
                    }
                }
            }
        }

        return positions;
    }

    /**
     * Verifica si una posición está disponible para colocar un recurso
     * @param {Number} x - Coordenada X
     * @param {Number} y - Coordenada Y
     * @returns {Boolean} true si está disponible
     */
    isPositionAvailable(x, y) {
        // TODO: Verificar colisiones con submarinos, zonas de salida, etc.
        // Por ahora, solo verificar que no haya otro recurso en esa posición
        return !this.resources.some(resource => 
            resource.position.x === x && resource.position.y === y && resource.isAvailable()
        );
    }

    /**
     * Verifica si hay un recurso en una posición específica
     * @param {Number} x - Coordenada X
     * @param {Number} y - Coordenada Y
     * @returns {Resource|null} El recurso en esa posición o null
     */
    getResourceAt(x, y) {
        return this.resources.find(resource => 
            resource.isAtPosition(x, y)
        ) || null;
    }

    /**
     * Intenta recoger un recurso en una posición específica
     * @param {Number} x - Coordenada X
     * @param {Number} y - Coordenada Y
     * @param {Submarine} submarine - El submarino que recoge el recurso
     * @returns {Boolean} true si se recogió un recurso
     */
    collectResourceAt(x, y, submarine) {
        const resource = this.getResourceAt(x, y);
        
        if (resource) {
            resource.collect(submarine);
            return true;
        }
        
        return false;
    }

    /**
     * Obtiene todos los recursos disponibles (no recogidos)
     * @returns {Array} Array de recursos disponibles
     */
    getAvailableResources() {
        return this.resources.filter(resource => resource.isAvailable());
    }

    /**
     * Elimina todos los recursos recogidos de la lista
     */
    cleanupCollectedResources() {
        this.resources = this.resources.filter(resource => resource.isAvailable());
    }

    /**
     * Mezcla un array aleatoriamente (algoritmo Fisher-Yates)
     * @param {Array} array - Array a mezclar
     */
    shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    /**
     * Limpia todos los recursos del gestor
     */
    clear() {
        this.resources.forEach(resource => resource.destroy());
        this.resources = [];
    }
}