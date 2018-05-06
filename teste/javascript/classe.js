var base = /** @class */ (function () {
    function base(x, name) {
        this.x = x;
        this.name = name;
    }
    base.prototype.go = function () {
        console.log('X: ' + this.x + ' Name: ' + this.name);
    };
    return base;
}());
var bs = new base(10, 'Hello');
bs.go();
