import React from 'react';
import ReactDom from 'react-dom';

var Elem = (props) => {
  return <h1>Hello {props.name}</h1>;
};

ReactDom.render(
  <Elem name="Sander"/>,
  document.getElementById('root')
);
