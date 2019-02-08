import React from 'react';
import ReactDom from 'react-dom';
import { createStore } from 'redux';

const btnA = {
  id: 321,
  type: 'btn',
  output: true
};

const btnB = {
  id: 456,
  type: 'btn',
  output: false
};

const gate = {
  id: 123,
  type: 'andGate',
  output: false,
  inputA: true,
  inputB: false,
  inputASource: 321,
  inputBSource: 345
};

const led = {
  id: 789,
  type: 'led',
  output: false
};

const initialState = {
  parts: [
    btnA,
    led
  ]
};

const partsReducer = (parts = [], action) => {
  switch (action.type) {
    case 'toggle_part':

      return parts.map((part) => {
        if (part.id == action.id) {
          return Object.assign({}, part, {
            output: !part.output
          })
        }
        return part
      });
    default:
      return parts;
  }
};

const reducer = (state = initialState, action) => {
  return {
      parts: partsReducer(state.parts, action)
  };
};

const store = createStore(reducer);

const SvgBtn = (props) => {
  return (<circle
    cx={props.x}
    cy={props.y}
    r="10"
    stroke="#000"
    stroke-width="2"
    fill={props.active ? "#00ff00":"#ff0000"}
    onClick={props.onClick}
  />)
};

class Btn extends React.Component {
  constructor(props) {
    super(props);

    this.id = props.id;
    this.x = props.x;
    this.y = props.y;
    this.store = props.store;

    this.state = {
      output: props.output
    };

    this.store.subscribe(() => {
      let part = this.store.getState().parts.filter((part) => part.id == this.id)[0];

      this.setState({
        output: part.output
      });
    });
  }

  handleClick(e) {
    this.store.dispatch({
      type: 'toggle_part',
      id: this.id
    });
  };

  render() {
    return <SvgBtn active={this.state.output} x={this.x} y={this.y} onClick={this.handleClick.bind(this)}/>
  }
}

const SvgLed = (props) => {
  return (
    <circle
      cx={props.x}
      cy={props.y}
      r="5"
      stroke="#000"
      stroke-width="1"
      fill={props.active ? "#0000ff":"#ffffff"}
    />
  );
}

class Led extends React.Component {
  constructor(props) {
    super(props);

    this.id = props.id;
    this.x = props.x;
    this.y = props.y;
    this.store = props.store;

    this.state = {
      output: props.output
    };

    this.store.subscribe(() => {
      let part = this.store.getState().parts.filter((part) => part.id == 321)[0];

      this.setState({
        output: part.output
      });
    });
  }

  render() {
    return <SvgLed active={this.state.output} x={this.x} y={this.y}/>
  }
}



const App = () => {
  return (
    <svg width="100%" height="100%">
      <Btn id="321" output={true} x={Math.random() * 100} y={Math.random() * 100} store={store} />
      {/*<Btn id="456" output={false} x={Math.random() * 100} y={Math.random() * 100} store={store} />*/}
      <Led id="789" output={true} x={Math.random() * 100} y={Math.random() * 100} store={store}/>
    </svg>
  );
};

ReactDom.render(
  <App/>,
  document.getElementById('root')
);


function add(promiseX, promiseY) {
  return Promise.all([promiseX, promiseY]).then((values) => {
    console.log(values)
    return values[0]() + values[1]();
  }, (e) => {
    //console.log(e)
  });
}

add(() => {
  setTimeout(() => 2, 2000);
}, () => {
  setTimeout(() => 3, 3000);
}).then((sum) => {
  console.log(sum);
});

