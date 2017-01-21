class Vector2D {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    static add(vector1, vector2) {
        var x = vector1.x + vector2.x;
        var y = vector1.y + vector2.y;

        return new Vector2D(x, y);
    }

    add(vector) {
        this.x += vector.x;
        this.y += vector.y
    }

    static sub(vector1, vector2) {
        var x = vector1.x - vector2.x;
        var y = vector1.y - vector2.y;

        return new Vector2D(x, y);
    }

    sub(vector) {
        this.x -= vector.x;
        this.y -= vector.y
    }

    static mult(vector, times) {
        var x = vector.x * times;
        var y = vector.y * times;

        return new Vector2D(x, y);
    }

    mult(times) {
        this.x = this.x * times;
        this.y = this.y * times;
    }

    getMag() {
        //@@TODO maby x * x and y * y is faster then Math.pow()
        return Math.sqrt(Math.pow(this.x,2), Math.pow(this.y, 2));
    }

    setMag(mag) {
        this.normalize();
        this.mult(mag)
    }

    static normalize(vector) {
        var x = vector.x / vector.getMag();
        var y = vector.y / vector.getMag();
        return new Vector2D(x, y);
    }

    normalize() {
        var x = this.x / this.getMag();
        var y = this.y / this.getMag();
    }
}

export default Vector2D;
