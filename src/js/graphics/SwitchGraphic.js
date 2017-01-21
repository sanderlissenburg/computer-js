import ComponentGraphic from './ComponentGraphic';
import pixi from 'pixi.js';
import Vector2D from './../math/Vector2D';

class SwitchGraphic extends ComponentGraphic {
    constructor(component) {
        super(component);


        this._baseGraphic = null;
        this._stateGraphic = null;
        this._outputReceiverGraphic = null;

        this.drawBase();
        
        this.interactive = true;
        this.buttonMode = true;

        this.on('mouseup', function() {
            this._component.toggle();
        })
    }

    drawBase() {
        this._baseGraphic = new PIXI.Graphics();
        this._baseGraphic.lineStyle(2, 0x000000);
        this._baseGraphic.beginFill(0xffffff);
        this._baseGraphic.drawCircle(-5, -5, 10);
        this.addChild(this._baseGraphic);
    }

    drawState() {
        this._stateGraphic = new PIXI.Graphics();
        this._stateGraphic.beginFill(0x00ff00);
        this._stateGraphic.drawCircle(-5, -5, 9);
        this.addChild(this._stateGraphic);
    }

    eraseState() {
        this._stateGraphic.clear();
        this.removeChild(this._stateGraphic);
        this._stateGraphic = null;
    }

    animate() {

        super.animate()

        var position = new Vector2D(this.x, this.y);

        if (this._component.isOn() && this._stateGraphic === null) {
            this.drawState();
        } else if(!this._component.isOn() && this._stateGraphic !== null) {
            this.eraseState();
        }

        if (this._component.hasOutputReceivers()) {
            if (this._outputReceiverGraphic === null) {
                this._outputReceiverGraphic = new PIXI.Graphics();
                this.addChild(this._outputReceiverGraphic);
            }

            this._outputReceiverGraphic.clear();
            this._outputReceiverGraphic.lineStyle(1, this._component.isOn() ? 0x00ff00 : 0xff0000);

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
}

export default SwitchGraphic;
