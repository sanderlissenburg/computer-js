import ComponentGraphic from './ComponentGraphic';
import pixi from 'pixi.js'

class LedGraphic extends ComponentGraphic {
    constructor(component) {
        super(component);

        this._baseGraphic = null;
        this._stateGraphic = null;

        this.drawBase();

    }

    drawBase() {
        this._baseGraphic = new PIXI.Graphics();
        this._baseGraphic.lineStyle(2, 0x000000);
        this._baseGraphic.drawCircle(-5, -5, 10);
        this.addChild(this._baseGraphic);
    }

    drawState() {
        this._stateGraphic = new PIXI.Graphics();
        this._stateGraphic.beginFill(0xff0000);
        this._stateGraphic.drawCircle(-5, -5, 9);
        this.addChild(this._stateGraphic);
    }

    eraseState() {
        this._stateGraphic.clear();
        this.removeChild(this._stateGraphic);
        this._stateGraphic = null;
    }

    animate() {
        super.animate();

        if (this._component.isOn() && this._stateGraphic === null) {
            this.drawState();
        } else if(!this._component.isOn() && this._stateGraphic !== null) {
            this.eraseState();
        }
    }
}

export default LedGraphic;
