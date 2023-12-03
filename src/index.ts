const canvas = document.getElementById("canvas") as HTMLCanvasElement
const ctx = canvas.getContext("2d") as CanvasRenderingContext2D

let width = 800
let height = 400

canvas.width = width
canvas.height = height

//rectFill = (x,y,w,h)
const gravityEarth: number = 9.8
class Player {
    private _height: number;
    private _width: number;
    private velocity: number

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
        },
    }) {
        this._width = width
        this._height = height
        this.position = position
        this.velocity = 0
    }

    drag() {
        ctx.fillStyle = 'red'
        ctx.fillRect(this.position.x, this.position.y, this._width, this._height)
    }

    update() {
        let realPositionY = this.position.y + this._height

        if (realPositionY < canvas.height) {
            this.position.y += this.velocity - 5
            if (this.velocity < 15) this.velocity++
        } else if (realPositionY >= canvas.height) {
            this.velocity = 0
        }

        this.drag()
    }

    movement() {
        this.position.y -= this._height / 2
        this.velocity -= 15
    }
}

class BlockCollision {
    public height: number;
    public width: number;

    constructor({ width, height }: { width: number, height: number }) {
        this.width = width
        this.height = height
    }

    drag() {
        ctx.fillStyle = "red"
        ctx.fillRect(canvas.width - this.width, Math.floor(Math.random() * canvas.height), this.width, this.height)
    }

    update() {
        ctx.fillStyle = "red"
        ctx.fillRect(canvas.width - this.width,0, this.width, this.height)
    }
}

const player = new Player({
    position: {
        x: 30,
        y: 130
    }
})

const newBlock: BlockCollision[] = new Array(2).fill(new BlockCollision({ height: 200, width: 50 }))

window.document.addEventListener('click', function (evt: MouseEvent) {
    player.movement()
})

function animation() {
    window.requestAnimationFrame(animation)
    ctx.fillStyle = '#fff'
    ctx.fillRect(0, 0, width, height)

    player.update()
    newBlock.forEach(block => block.update())
}

animation()