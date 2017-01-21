import LogicGate from './LogicGate';

class OrGate extends LogicGate {
    hasOutput() {
        return this._inputOne.hasOutput() || this._inputTwo.hasOutput();
    }
}

export default OrGate;
