import Relay from './Relay';
import Vector2D from './../../math/Vector2D';

class LogicGate {

    constructor() {
        this._inputOne = new Relay(this);
        this._inputTwo = new Relay(this);
        this._outputReceivers = [];
        this._position = new Vector2D(0, 0);
    }

    hasOutput() {
       throw 'hasOutput is not implemented';
    }

    relayUpdated() {
        this._updateReceivers();
    }

    getOutputReceivers() {
        return this._outputReceivers;
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

    connectToInputOne(target) {
        target.addOutputReceiver(this._inputOne);
    }

    connectToInputTwo(target) {
        target.addOutputReceiver(this._inputTwo);
    }

    inputOneConnectedTo() {
        return this._inputOne;
    }

    disconnectFromInputOne(target) {
        target.removeOutputReceiver(this._inputOne);
    }

    disconnectFromInputOne(target) {
        target.removeOutputReceiver(this._inputTwo);
    }

    setPosition(vector) {
        this._position = vector;
    }

    getPosition() {
        return this._position;
    }

    _updateReceivers() {
        this._outputReceivers.forEach(function(element, index){
            element.controlCurrent(this.hasOutput());
        }.bind(this));
    }
}

export default LogicGate;
