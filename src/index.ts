const canvas = document.getElementById("canvas") as HTMLCanvasElement
const ctx = canvas.getContext("2d") as CanvasRenderingContext2D

let width = 800
let height = 400

canvas.width = width
canvas.height = height

//x, y, w, h
ctx.fillRect(0, 0, width, height)