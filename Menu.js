
export default class Menu extends Phaser.Scene {
	constructor() {
		super({ key: 'menu' }); //seteamos el nobmre de la escena para el SceneManager
	}
	
	/**
	* Carga de los recursos que vamos a necesitar en la escena
	*/
	preload(){
		this.load.image('menufondo', 'assets/menufondo.webp');
		this.load.image('boton', 'assets/boton.png');
		
	}
	
	/**
	* Creación de los elementos de la escena principal de juego
	*/
	create() {
		//Imagen de fondo
		this.add.image(0, 0, 'menufondo').setOrigin(0, 0);
		
		//Boton interactivo
        let boton = this.add.image(400, 300, 'boton').setInteractive();
        boton.on('pointerdown', () => {
            this.scene.start('menu');
        }
		
	}

}
