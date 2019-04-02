import React, {Component} from 'react';
import './HelloWorld.css';

class HelloWorld extends Component {

 constructor(props) {
   super(props);
   this.state = { greeting: 'Hello' };
   this.spanishfy = this.spanishfy.bind(this);
   this.removeGreeting = this.removeGreeting.bind(this);
  } 

  spanishfy(){
   this.setState({ greeting: 'Hola'});
   }

  removeGreeting() {
  this.props.removeGreeting(this.props.name);
  }

  render(){
    return(<div className="HelloWorld">
      {this.state.greeting} {this.props.name}!
      <br/>
      <button onClick={this.spanishfy}>Spanishfy!</button>
      <br/>
      <button onClick={this.removeGreeting}>Remove Me!</button> 
     </div>);
  } 
} 

export default HelloWorld;
