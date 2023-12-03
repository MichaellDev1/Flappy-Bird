const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")

let width = 800
let height = 400

canvas.width = width
canvas.height = height

//x, y, w, h
ctx.fillRect(0, 0, width, height)
ctx.fillStyle = "#fff"
