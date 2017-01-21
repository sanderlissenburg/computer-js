class Switch {
    constructor(on = false) {
        this._on = on;
        this._outputReceivers = [];
        this._position;
    }

    switchOn() {
        this._on = true;
        this._updateReceivers();
    }

    switchOff() {
        this._on = false;
        this._updateReceivers();
    }

    toggle() {
        if(this._on) {
            this.switchOff();
        } else {
            this.switchOn();
        }
    }

    isOn() {
        return this._on;
    }

    getOutputReceivers() {
        return this._outputReceivers;
    }

    hasOutputReceivers() {
        return this._outputReceivers.length > 0;
    }

    addOutputReceiver(receiver) {
        this._outputReceivers.push(receiver);
        this._updateReceivers();
    }

    removeOutputReceiver() {
        var index = this._outputReceivers.indexOf(receiver);
        this._outputReceivers.splice(index, 1);
        this._updateReceivers();
    }

    setPosition(vector) {
        this._position = vector;
    }

    getPosition() {
        return this._position;
    }

    _updateReceivers() {
        this._outputReceivers.forEach(function(element, index){
            element.controlCurrent(this.isOn());
        }.bind(this));
    }
}

export default Switch;
