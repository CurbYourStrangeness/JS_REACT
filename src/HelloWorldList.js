import React, { Component } from 'react';
import './HelloWorldList.css';

import HelloWorld from './HelloWorld';

class HelloWorldList extends Component {
  
  constructor(props) {
    super(props);
    this.state = { greetings: ['Jake', 'Jack'] };
  }

  render() {
    return (
      <div className="HelloWorldList">
        <HelloWorld name="Jake"/>
        <HelloWorld name="Jack"/>
      </div>
    );
  }
}
export default HelloWorldList;
