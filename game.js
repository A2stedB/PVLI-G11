let config = {
	type: Phaser.AUTO,
    parent:"game",
	width:  800,
	height: 600,
	pixelArt: true,
	scale: {
		autoCenter: Phaser.Scale.CENTER_HORIZONTALLY
	},
	scene: [{preload:preload, create:create}],	// Decimos a Phaser cual es nuestra escena, en este caso la escena es un 
												//objeto formado por el método preload y create definidos más abajo en 
												//este mismo archivo
	physics: { 
		default: 'arcade', 
		arcade: { 
			gravity: { y: 200 }, 
			debug: false 
		} 
	}
};

new Phaser.Game(config);