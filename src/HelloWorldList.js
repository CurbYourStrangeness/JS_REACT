import React, { Component } from 'react';
import './HelloWorldList.css';
import AddGreeter from './AddGreeter';
import HelloWorld from './HelloWorld';

class HelloWorldList extends Component {
  
  constructor(props) {
    super(props);
    this.state = { greetings: ['Jake', 'Jack', 'Bender', 'Wiz'] };
  }

  renderGreetings(){
    return this.state.greetings.map(name => (
      <HelloWorld key={name} name={name}/>
    ));
}

  render() {
    return (
      <div className="HelloWorldList">
        <AddGreeter />
        {this.renderGreetings()}
      </div>
    );
  }
}
export default HelloWorldList;
