class Relay {
    constructor(logicGate, on = false) {
        this._logicGate = logicGate;
        this._on = on;
    }

    hasOutput() {
        return this._on;
    }

    controlCurrent(flowing) {
        if (flowing) {
            this._on = true;
        } else {
            this._on = false;
        }

        this._logicGate.relayUpdated();
    }

    getPosition() {
        return {
            x: this._logicGate.getPosition().x,
            y: this._logicGate.getPosition().y
        }
    }
}

export default Relay;
