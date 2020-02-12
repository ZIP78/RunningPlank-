export default class Plank {
    constructor() {
        this.x = 50;
        this.y = 500;
        this.width = 40; 
        this.height = 70;
        this.dx = 0;
        this.dy = 0;
        this.jumping = false;
    }

    
    jump() {
        this.dy = -30;
        this.jumping = true
    }

    jumpend() {
        let variable = this.dy
        this.dy += variable
        this.jumping = false
    }

 

    gravity() {
        this.dy += 1.5
        this.x += this.dx
        this.y += this.dy
    }


    draw(ctx) {
        let image = new Image();
        image.src = "./src/plank.png";
        let x = this.x;
        let y = this.y;
        let width = this.width;
        let height = this.height;
        image.onload = function () {
            ctx.clearRect(0, 0, canvas.width, canvas.height)
            ctx.drawImage(image, x, y, width, height )
        }
    }

    animate(ctx) {
        this.draw(ctx)
    }




 
   
}

