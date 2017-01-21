import Vector2D from './../../math/Vector2D';

class Led {
    constructor() {
        this._on = false;
        this._position = new Vector2D(0, 0);
    }

    isOn() {
        return this._on;
    }

    controlCurrent(flowing) {
        if (flowing) {
            this._on = true;
        } else {
            this._on = false;
        }
    }

    connectToInput(target) {
        target.addOutputReceiver(this);
    }

    setPosition(vector) {
        this._position = vector;
    }

    getPosition() {
        return this._position;
    }
}

export default Led;
