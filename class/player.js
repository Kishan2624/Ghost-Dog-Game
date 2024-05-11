export class Player{
    constructor(game){
        this.game = game;
        this.width = 100;
        this.height = 91.3;
        this.x = 0;
        this.y = this.game.height - this.height;
        this.image = document.getElementById("player")
        this.imagePosition = {
            x:0,
            y:0,
        }
        this.imageWidth = 575;
        this.imageHeight = 523;
    }

    update(){
       
    }

    draw(context){
        context.drawImage(this.image,this.imagePosition.x,this.imagePosition.y,this.imageWidth,this.imageHeight,this.x,this.y,this.width,this.height)
    }
}