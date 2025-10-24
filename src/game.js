import {Game_Screen} from "./Scene/Game_Screen.js";
import { Menu } from "./Scene/Menu.js";	
import { Submarine_View } from "./Scene/Submarine_View.js";
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
	scene: [Menu, Submarine_View, Game_Screen],
};

new Phaser.Game(config);
