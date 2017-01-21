import ComponentGraphic from './ComponentGraphic';
import pixi from 'pixi.js';
import Vector2D from './../math/Vector2D';

class LogicGateGraphic extends ComponentGraphic  {
    constructor(component) {
        super(component);

        this._baseGraphic = null;
        this._outputReceiverGraphic = null;

        this.drawBase();
    }

    drawBase() {
        this._baseGraphic = new PIXI.Graphics();

        if (this._component.constructor.name == 'OrGate') {
            this._baseGraphic.beginFill(0xFF9900);
        } else {
            this._baseGraphic.beginFill(0x99FF00);
        }

        this._baseGraphic.drawRoundedRect(-10, -10, 20, 20, 4);
        this._baseGraphic.endFill();
        this._baseGraphic.cacheAsBitmap = true;

        this.addChild(this._baseGraphic);
    }

    animate() {

        //@TODO change for event based change system

        super.animate()

        var position = new Vector2D(this.x, this.y);

        if (this._outputReceiverGraphic === null) {
            this._outputReceiverGraphic = new PIXI.Graphics();
            this.addChild(this._outputReceiverGraphic);
        }

        this._outputReceiverGraphic.clear();
        this._outputReceiverGraphic.lineStyle(1, this._component.hasOutput() ? 0x00ff00 : 0xff0000);

        this._component.getOutputReceivers().forEach(function(outputReceiver){
            // @TODO REMOVE CHECK
            if (typeof outputReceiver.getPosition == 'function' ) {

                this._outputReceiverGraphic.moveTo(0, 0);

                var pos = Vector2D.sub(outputReceiver.getPosition(), position);

                this._outputReceiverGraphic.lineTo(pos.x, pos.y);
            }
        }.bind(this));
    }
}

export default LogicGateGraphic;
