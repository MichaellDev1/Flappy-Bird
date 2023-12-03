const canvas = document.getElementById("canvas") as HTMLCanvasElement
const ctx = canvas.getContext("2d") as CanvasRenderingContext2D

let width = 800
let height = 400

canvas.width = width
canvas.height = height

//rectFill = (x,y,w,h)

class Player {
    private readonly _height: number = 0
    private readonly _width: number = 0
    public position: {
        y: number,
        x: number
    } = {
            y: 0,
            x: 0
        }

    constructor({ width = 64, height = 64, position }: {
        width?: number, height?: number, position: {
            y: number,
            x: number
        }
    }) {
        this._width = width
        this._height = height
        this.position = position
    }

    drag() {
        ctx.fillStyle = 'red'
        ctx.fillRect(this.position.x, this.position.y, this._width, this._height)
    }

    update() {
        if (this.position.y + this._height < canvas.height) {
            this.position.y++
        }
        this.drag()
    }
}

const player = new Player({
    position: {
        x: 30,
        y: 130
    }
})

function animation() {
    window.requestAnimationFrame(animation)
    ctx.fillStyle = '#fff'
    ctx.fillRect(0, 0, width, height)

    player.update()
}

animation()