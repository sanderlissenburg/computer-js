import pixi from 'pixi.js';
import Vector2D from './../math/Vector2D';

class ComponentGraphic extends PIXI.Container {
    constructor(component) {
        super();

        this._component = component;

        this.interactive = true;
        this.buttonMode = true;
        this._drag = false;

        this._initListeners();
    }


    animate() {
        this._drawPosition();
    }

    _initListeners() {

        this.on('mousedown', function() {
            this.defaultCursor = 'move';
            this._drag = true;
        });

        this.on('mouseup', function() {
            this.defaultCursor = 'pointer';
            this._drag = false;
        });

        this.on('mousemove', function(e){
            if (this._drag) {
                this.x = e.data.global.x;
                this.y = e.data.global.y;


                this._component.setPosition(new Vector2D(this.x, this.y));
            }
        });
    }

    _drawPosition() {
        var position = this._component.getPosition();
        this.x = position.x;
        this.y = position.y
    }
}

export default ComponentGraphic;
