import Relay from 'Relay';

class Inverter extends Relay {
    hasOutput() {
        return !this._on;
    }
}

export default Inverter;
