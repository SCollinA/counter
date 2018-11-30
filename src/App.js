import React, { Component } from 'react';
import Animal from './Animal'
import Person from './Person'
import ScoreButton from './ScoreButton'
import logo from './logo.svg';
import './App.css';

const users = [
  {name: "Bob"},
  {name: "John"},
  {name: "Jane"},
]

const people = users.map((user, i) => {
  return (
  <div className="Person" key={i}>
    <Person name={user.name} key={i}/>
  </div>
)})

class App extends Component {
  render() {
    return (
      <div className="App">
        <Animal/>
        {people}
      </div>
    );
  }
}

export default App;
