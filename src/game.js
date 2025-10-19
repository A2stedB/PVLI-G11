import {Game_Screen} from "./Game_Screen.js";
/**
 * Inicio del juego en Phaser. Creamos el archivo de configuración del juego y creamos
 * la clase Game de Phaser, encargada de crear e iniciar el juego.
 */
let config = {
	type: Phaser.AUTO,
    parent:"game",
	width:  800,
	height: 600,
	pixelArt: true,
	scale: {
		autoCenter: Phaser.Scale.CENTER_HORIZONTALLY
	},
	scene: [Game_Screen],	// Decimos a Phaser cual es nuestra escena, en este caso la escena es un 
												//objeto formado por el método preload y create definidos más abajo en 
												//este mismo archivo
};

new Phaser.Game(config);
