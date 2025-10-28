import Logic_Board from "./Logic_Board.js"
import { Vertex_Graphic } from "./Graphic_Vertex.js";
import { Square_Graphic } from "./Graphic_Square.js";
import EventDispatch from "../Event/EventDispatch.js"
import { Submarine_v2 } from "../Submarine_v2.js";


export default class Game_Board extends Phaser.GameObjects.Container{
    /**
     * 
     * @param {*} scene El nombre de la escena
     * @param {Number} boardWidth El ancho del tablero
     * @param {Number} boardHeight El alto del tablero
     * @param {Number} x La posicion x de la esquina superior izquierda de donde esta el tablero
     * @param {Number} y La posicion y de la esquina superior izquierda de donde esta el tablero
     * @param {Array{string}} texture La lista de texturas que utilizara el tablero
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
            logic: new Logic_Board(boardWidth,boardHeight).matrix,
            graphic: null
        }

        this.matrix.graphic = this.graphicMatrixInitialize(boardWidth,boardHeight,this.matrix.logic)

        this.submarine = {
            1:new Submarine_v2(0,0,this.matrix.logic),
            2:new Submarine_v2(1,1,this.matrix.logic)
        }
        //Por hacer: Hacer que el submarino tenga la tabla logica real del tablero y no una copia



        // console.log(this.submarine[1].position instanceof Position)
        // console.log(this.submarine[1].position == this.matrix.logic[this.submarine[1].position.x/2][this.submarine[1].position.y/2])

        // this.logic = new Logic_Board(boardWidth,boardHeight);

        this.initializeBackground(x,y,"BG");

        EventDispatch.on("RefreshMap",()=>{this.refresh();console.log("Refreshed")})
        
        console.log("Board created")
        scene.add.existing(this);
    }

    render(){
        if(this.active){
            this.matrix.graphic.forEach((row) =>{
                row.forEach(point =>{
                    if(point instanceof Square_Graphic){
                        point.render();
                    }
                    if(point instanceof Vertex_Graphic){
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
            m[i][j] = new Vertex_Graphic(this.scene,this.GRAPHIC,this.data.cellSize,logic[i][j],this.data.x,this.data.y);
        }
        else if((i%2 === 1) && (j%2 === 1)){
            m[i][j] = new Square_Graphic(this.scene,logic[i][j],"Square",this.data.cellSize,this.data.x,this.data.y);
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
}