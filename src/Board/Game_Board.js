import Logic_Board from "./Logic_Board.js"
import { Vertex_Graphic } from "./Graphic_Vertex.js";
import { Square_Graphic } from "./Graphic_Square.js";


export default class Game_Board extends Phaser.GameObjects.Container{
    constructor(scene,boardWidth,boardHeight,x,y,texture,cellSize){
        super(scene,x,y);
        this.x = x;
        this.y = y;
        this.scene = scene;
        this.boardWidth = boardWidth;
        this.boardHeight = boardHeight;

        this.texture = texture
        this.cellSize = cellSize;
        this.GRAPHIC = scene.add.graphics({ lineStyle: { width: 1, color: 0x00ff00 } });
        this.logic = new Logic_Board(boardWidth,boardHeight);

        
        //Dejar la grafica directamente aqui
        this.graphic = []

        this.Initialize_background(x,y,"BG");
        this.Graphic_initialize(boardWidth,boardHeight,this.logic);

        scene.add.existing(this);
    }

    render(){
        this.graphic.forEach((row) =>{
            row.forEach(point =>{
                if(point instanceof Square_Graphic){
                    point.render();
                }
                if(point instanceof Vertex_Graphic){
                    point.render();
                }
            })
        })

        console.table(this.graphic)
    }

    Graphic_initialize(boardWidth,boardHeight){

        for(let i = 0; i < boardWidth; ++i){
            this.graphic[i] = [];
            for(let j = 0; j < boardHeight; ++j){
                this.Create_Graphic_Point(i,j);
            }
        }

    }

    Initialize_background(x,y,image){
        let centerX = (this.cellSize*this.boardWidth)/2
        let centerY = (this.boardHeight*this.cellSize)/2  
        this.background_image = new Phaser.GameObjects.Image(this.scene,centerX,centerY,image);
        let width = (this.boardWidth*this.cellSize)*2;
        let height = (this.boardHeight*this.cellSize)*2;
        this.background_image.setDisplaySize(width,height)
        this.scene.add.existing(this.background_image);
        this.background_image.setAlpha(0.2);

        console.log(this.background_image.getCenter());

        this.add(this.background_image)
        this.moveDown(this.background_image)
    }

    Create_Graphic_Point(i,j){
        if((i%2 == 0) && (j%2 == 0)){
            this.graphic[i][j] = new Vertex_Graphic(this.scene,this.GRAPHIC,this.cellSize,this.logic.matrix[i][j],this.x,this.y);
        }
        else if((i%2 == 1) && (j%2 == 1)){
            this.graphic[i][j] = new Square_Graphic(this.scene,this.logic.matrix[i][j],"Square",this.cellSize,this.x,this.y);
        }
        else {
            this.graphic[i][j] = null;
        }
    }
}