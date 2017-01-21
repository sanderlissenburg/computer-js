import pixi from 'pixi.js';

import Vector2D from './math/Vector2D';
import AndGate from './parts/logic-gates/AndGate';
import OrGate from './parts/logic-gates/OrGate';
import Switch from './parts/controls/Switch';
import Led from './parts/outputs/Led';
import LogicGateGraphic from './graphics/LogicGateGraphic';
import LedGraphic from './graphics/LedGraphic';
import SwitchGraphic from './graphics/SwitchGraphic';

var renderer = new PIXI.WebGLRenderer(800, 600);
renderer.backgroundColor = 0xFFFFFF;
var stage = new PIXI.Container();
document.getElementById('main').appendChild(renderer.view);

var switchOne = new Switch();
var switchTwo = new Switch();
var switchThree = new Switch(true);
var andGate = new AndGate();
var orGate = new OrGate();
var led = new Led();

var orGateGraphic = new LogicGateGraphic(andGate);
var andGateGraphic = new LogicGateGraphic(orGate);
var ledGraphic = new LedGraphic(led);
var switchGraphicOne = new SwitchGraphic(switchOne);
var switchGraphicTwo = new SwitchGraphic(switchTwo);
var switchGraphicThree = new SwitchGraphic(switchThree);

switchOne.setPosition(new Vector2D(50, 100));
stage.addChild(switchGraphicOne);

switchTwo.setPosition(new Vector2D(50, 150));
stage.addChild(switchGraphicTwo);

switchThree.setPosition(new Vector2D(50, 200));
stage.addChild(switchGraphicThree);

orGate.setPosition(new Vector2D(100, 150));
stage.addChild(orGateGraphic);

andGate.setPosition(new Vector2D(100, 175));
stage.addChild(andGateGraphic);

led.setPosition(new Vector2D(150, 150));
stage.addChild(ledGraphic);

andGate.connectToInputOne(switchOne);
andGate.connectToInputTwo(switchTwo);
orGate.connectToInputOne(andGate);
orGate.connectToInputTwo(switchThree);
led.connectToInput(orGate);

animate();

function animate() {
    orGateGraphic.animate();
    andGateGraphic.animate();
    ledGraphic.animate();

    switchGraphicOne.animate();
    switchGraphicTwo.animate();
    switchGraphicThree.animate();

    renderer.render(stage);
    requestAnimationFrame(animate);
}
