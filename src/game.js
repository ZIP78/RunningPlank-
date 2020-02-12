import Plank from './plank'
import Background from './background'

export default class RunningPlank {
    constructor(canvas) {
        this.ctx = canvas.getContext("2d");
        this.dimensions = { width: canvas.width, height: canvas.height };
        this.test()
        
    }
  
    

    test() {
        this.background = new Background()
        this.plank = new Plank();
        this.animate()
    }

    jumpEvent() {
        window.addEventListener("keydown",   (e) => {
            if (e.keyCode === 32 && this.plank.jumping === false) {
                this.plank.jump()
            }
        } )
     }


    




    animate() {
        this.plank.animate(this.ctx);
        this.background.animate(this.ctx)
        this.jumpEvent();
        this.plank.gravity();
        if (this.plank.y > 500 - 35 - 70) {
            this.plank.jumping = false
            this.plank.y = 500 - 35 - 70
            this.plank.dy = 0;
           
        }
        
        requestAnimationFrame(this.animate.bind(this))
    }

  

    

}

// window.addEventListener("keydown", (e) => {
//     console.log(e.key)
// } )