import LogicGate from './LogicGate';

class AndGate extends LogicGate {
    hasOutput() {
        return this._inputOne.hasOutput() && this._inputTwo.hasOutput();
    }
}

export default AndGate;
