import RunningPlank from './game'

document.addEventListener('DOMContentLoaded', () => {
    const canvasEl = document.getElementById("canvas")
    new RunningPlank(canvasEl)
    // const ctx = canvasEl.getContext("2d")
    // let sprite = new Image()
    // sprite.onload = function() {
    //     ctx.drawImage(sprite, 40, 445)
    // }
    // sprite.src = "./plank.png"

    
    
})