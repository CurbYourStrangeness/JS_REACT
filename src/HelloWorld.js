import React from 'react';
import './HelloWorld.css';

const HelloWorld = props => {
  return (<div classname="HelloWorld">Hello {props.name}!</div>);
};

export default HelloWorld;
