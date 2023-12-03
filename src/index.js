var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var width = 800;
var height = 400;
canvas.width = width;
canvas.height = height;
//rectFill = (x,y,w,h)
var Player = /** @class */ (function () {
    function Player(_a) {
        var _b = _a.width, width = _b === void 0 ? 64 : _b, _c = _a.height, height = _c === void 0 ? 64 : _c, position = _a.position;
        this._height = 0;
        this._width = 0;
        this.position = {
            y: 0,
            x: 0
        };
        this._width = width;
        this._height = height;
        this.position = position;
    }
    Player.prototype.drag = function () {
        ctx.fillStyle = 'red';
        ctx.fillRect(this.position.x, this.position.y, this._width, this._height);
    };
    Player.prototype.update = function () {
        if (this.position.y + this._height < canvas.height) {
            this.position.y++;
        }
        this.drag();
    };
    return Player;
}());
var player = new Player({
    position: {
        x: 30,
        y: 130
    }
});
function animation() {
    window.requestAnimationFrame(animation);
    ctx.fillStyle = '#fff';
    ctx.fillRect(0, 0, width, height);
    player.update();
}
animation();
