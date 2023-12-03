var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var width = 800;
var height = 400;
canvas.width = width;
canvas.height = height;
//rectFill = (x,y,w,h)
var gravityEarth = 9.8;
var Player = /** @class */ (function () {
    function Player(_a) {
        var _b = _a.width, width = _b === void 0 ? 64 : _b, _c = _a.height, height = _c === void 0 ? 64 : _c, position = _a.position;
        this.position = {
            y: 0,
            x: 0
        };
        this._width = width;
        this._height = height;
        this.position = position;
        this.velocity = 0;
    }
    Player.prototype.drag = function () {
        ctx.fillStyle = 'red';
        ctx.fillRect(this.position.x, this.position.y, this._width, this._height);
    };
    Player.prototype.update = function () {
        var realPositionY = this.position.y + this._height;
        if (realPositionY < canvas.height) {
            this.position.y += this.velocity - 5;
            if (this.velocity < 15)
                this.velocity++;
        }
        else if (realPositionY >= canvas.height) {
            this.velocity = 0;
        }
        this.drag();
    };
    Player.prototype.movement = function () {
        this.position.y -= this._height / 2;
        this.velocity -= 15;
    };
    return Player;
}());
var BlockCollision = /** @class */ (function () {
    function BlockCollision(_a) {
        var width = _a.width, height = _a.height;
        this.width = width;
        this.height = height;
    }
    BlockCollision.prototype.drag = function () {
        ctx.fillStyle = "red";
        ctx.fillRect(canvas.width - this.width, Math.floor(Math.random() * canvas.height), this.width, this.height);
    };
    BlockCollision.prototype.update = function () {
        ctx.fillStyle = "red";
        ctx.fillRect(canvas.width - this.width, 0, this.width, this.height);
    };
    return BlockCollision;
}());
var player = new Player({
    position: {
        x: 30,
        y: 130
    }
});
var newBlock = new Array(2).fill(new BlockCollision({ height: 200, width: 50 }));
window.document.addEventListener('click', function (evt) {
    player.movement();
});
function animation() {
    window.requestAnimationFrame(animation);
    ctx.fillStyle = '#fff';
    ctx.fillRect(0, 0, width, height);
    player.update();
    newBlock.forEach(function (block) { return block.update(); });
}
animation();
