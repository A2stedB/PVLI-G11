import LogicBoard from "./LogicBoard.js"
import { GraphicVertex } from "./GraphicVertex.js";
import { GraphicSquare } from "./GraphicSquare.js";
import EventDispatch from "../Event/EventDispatch.js"
import { Submarine_v2 } from "../Submarine_v2.js";
import Event from "../Event/Event.js";
import { Orientation } from "../Orientation.js";


export default class GameBoard extends Phaser.GameObjects.Container{
    /**
     * 
     * @param {*} scene El nombre de la escena
     * @param {Number} boardWidth El ancho del tablero
     * @param {Number} boardHeight El alto del tablero
     * @param {Number} x La posicion x de la esquina superior izquierda de donde esta el tablero
     * @param {Number} y La posicion y de la esquina superior izquierda de donde esta el tablero
     * @param {Array.<string>} texture La lista de texturas que utilizara el tablero
     * @param {Number} cellSize El tamaño de la celda
     */
    constructor(scene,boardWidth,boardHeight,x,y,texture,cellSize){
        super(scene,x,y);
        this.active = true;
        
        this.texture = texture
        this.GRAPHIC = scene.add.graphics({ lineStyle: { width: 1, color: 0x00ff00 } });
        this.add(this.GRAPHIC)

        this.data = {
            x:x,
            y:y,
            boardWidth:boardWidth,
            boardHeight:boardHeight,
            cellSize:cellSize,
            submarineLimit:{
                x:Math.round(boardWidth/2),
                y:Math.round(boardHeight/2),
            }
        }

        this.matrix = {
            logic: new LogicBoard(boardWidth,boardHeight),
            graphic: null
        }

        // this.matrix.logic.getVertexListForSquare();
        this.matrix.graphic = this.graphicMatrixInitialize(boardWidth,boardHeight,this.matrix.logic)

        this.submarines = {
            blue: new Submarine_v2(scene, 3, 3, this.matrix.logic, this),   
            red:  new Submarine_v2(scene, 2, 2, this.matrix.logic, this)  
        };

        
        this.submarines.blue.setTint(0x00aaff);
        this.submarines.red.setTint(0xff4444);
       this.submarines.blue.setAlpha(1);
        this.submarines.red.setAlpha(1);

        this.submarines.blue.setDepth(100);
        this.submarines.red.setDepth(100);
        this.initializeBackground(x,y,"BG");

        EventDispatch.on(Event.TOGGLE_MAP,()=>{
            this.refresh();
            console.log("Refreshed");
        })

        EventDispatch.on(Event.MOVE_RIGHT,() => 
            {
                this.submarines.red.moveRight();
                // this.submarines.red.move(this.submarines.red.orientation+90);
            }
        )

        EventDispatch.on(Event.MOVE_FRONT,() => 
            {
                this.submarines.red.moveFront();
                // this.submarines.red.move(this.submarines.red.orientation+90);

                    // emit event to "state machine" to change state
                    // Same for shoot
            }
        )

        EventDispatch.on(Event.MOVE_LEFT,() => 
            {
                this.submarines.red.moveLeft();
                // this.submarines.red.move(this.submarines.red.orientation+90);

                    // emit event to "state machine" to change state
                    // Same for shoot
            }
        )
        EventDispatch.on(Event.SHOOT,() => 
          {
            let isTarget1 = this.submarines.red.isTarget(this.submarines.blue.position.x, this.submarines.blue.position.y, 1)
            let isTarget2 = this.submarines.red.isTarget(this.submarines.blue.position.x, this.submarines.blue.position.y, 2)

            if (isTarget1 || isTarget2) console.log("Target!");

            this.showShootPopup(this.submarines.red, (direction, distance) => {
                if (!direction) {
                    console.log("No disparó");
                    return;
                }

                console.log("Disparo:", direction, "Distancia:", distance);
                //Logica del disparo - aqui se comprueba la municion y se resta
                // El disparo largo da a corta distancia, pero no viceversa y hace menos daño
                if (distance == 1) {
                    this.submarines.red.shoot(distance);
                    if (isTarget1&&
                        this.submarines.red.isTargetDir(this.submarines.blue.position.x, this.submarines.blue.position.y, 1, direction) 
                        && this.submarines.red.canShoot(distance)) this.submarines.blue.loseHealth(5);
                }
               if (distance == 2) {
                    this.submarines.red.shoot(distance);
                    if (isTarget2 && 
                        this.submarines.red.isTargetDir(this.submarines.blue.position.x, this.submarines.blue.position.y, 2, direction) &&
                        this.submarines.red.canShoot(distance)) this.submarines.blue.loseHealth(2);
                }
            });
          
        });
          
        
        this.render();
        console.log("Board created")
        scene.add.existing(this);
    }

    render(){
        if(this.active){
            this.matrix.graphic.forEach((row) =>{
                row.forEach(point =>{
                    if(point instanceof GraphicSquare){
                        point.render();
                    }
                    if(point instanceof GraphicVertex){
                        point.render();
                    }
                })
            })
        }
        
        // console.table(this.matrix.graphic)
    }

    graphicMatrixInitialize(boardWidth,boardHeight,logic){
        let aux = []
        for(let i = 0; i < boardWidth; ++i){
            aux[i] = [];
            for(let j = 0; j < boardHeight; ++j){
                this.createGraphicPoint(aux,i,j,logic);
            }
        }
        return aux;
    }

    initializeBackground(x,y,image){

        let centerX = ((this.data.boardWidth-1)*this.data.cellSize)/2
        let centerY = ((this.data.boardHeight-1)*this.data.cellSize)/2  
        this.background_image = new Phaser.GameObjects.Image(this.scene,0,0,image);
        this.background_image.setPosition(centerX,centerY)

        let width = ((this.data.boardWidth-1)*this.data.cellSize);
        let height = ((this.data.boardHeight-1)*this.data.cellSize);
        this.background_image.setDisplaySize(width,height)
        this.scene.add.existing(this.background_image);
        this.background_image.setAlpha(0.2);

        console.log(this.background_image.getCenter());

        this.add(this.background_image)
        this.moveDown(this.background_image)
    }

    /**
     * 
     * @param {*} m 
     * @param {*} i 
     * @param {*} j 
     * @param {Logic_Board} logic 
     */
    createGraphicPoint(m,i,j,logic){
        if((i%2 === 0) && (j%2 === 0)){
            m[i][j] = new GraphicVertex(this.scene,this.GRAPHIC,this.data.cellSize,logic.matrix[i][j],this.data.x,this.data.y);
        }
        else if((i%2 === 1) && (j%2 === 1)){
            m[i][j] = new GraphicSquare(this.scene,logic.matrix[i][j],"Square",this.data.cellSize,this.data.x,this.data.y);
            this.add(m[i][j])
        }
        else {
            m[i][j] = null;
        }
    }

    refresh(){
        this.active = !this.active;
        if(this.active){
            this.setVisible(true);
        }
        else this.setVisible(false);
         
        this.render()
    }

    //Muestra el popup para elegir si dirpara, en que direccion y la distancia. Si queda municion o si se puede disparar se gestiona en Subarine_v2
    showShootPopup(submarine, callback) {

    const scene = this.scene; 
    let popup2 = null;

    const overlay = scene.add.rectangle(400, 300, 800, 600, 0x000000, 0.6)
        .setScrollFactor(0)
        .setDepth(1000);

    const panel = scene.add.rectangle(400, 300, 300, 220, 0xffffff, 1)
        .setStrokeStyle(2, 0x000000)
        .setScrollFactor(0)
        .setDepth(1001);

    const popup = scene.add.container(0, 0, [overlay, panel]).setDepth(1002);

    const boton = (text, y, action) => {
        const btn = scene.add.text(400, y, text, { fontSize: '20px', color: '#000' })
            .setOrigin(0.5)
            .setScrollFactor(0)
            .setInteractive({ useHandCursor: true })
            .setDepth(1003)
            .on("pointerdown", () => action());
        popup.add(btn);
    };

    // Primera pantalla: dirección
    boton("Derecha", 260, () => choose("right"));
    boton("Izquierda", 290, () => choose("left"));
    boton("Delante", 320, () => choose("front"));
    boton("No disparar", 350, () => close(null, null));

   
const choose = (direction) => {
    popup.removeAll(true);
    popup.destroy(true); 

    const overlay2 = scene.add.rectangle(400, 300, 800, 600, 0x000000, 0.6).setDepth(1000);
    const panel2 = scene.add.rectangle(400, 300, 300, 160, 0xffffff, 1).setStrokeStyle(2, 0x000000).setDepth(1001);

    popup2 = scene.add.container(0, 0, [overlay2, panel2]).setDepth(1002);

    const boton2 = (label, y, dist) => {
        const btn = scene.add.text(400, y, label, { fontSize: "20px", color: "#000" })
            .setOrigin(0.5)
            .setInteractive({ useHandCursor: true })
            .setDepth(1003)
            .on("pointerdown", () => close(direction, dist));

        popup2.add(btn);
    };

    boton2("Distancia 1", 290, 1);
    boton2("Distancia 2", 330, 2);
};

const close = (direction, distance) => {
    if (popup) popup.destroy(true);
    if (popup2) popup2.destroy(true); 
    callback(direction, distance);
};
}


}