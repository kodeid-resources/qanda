import React, { Component } from 'react';
import { database } from './firebase.js';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
      newData: ''
    };

    this.dbRef = null;
  }
  handleChange = (e) => {
    const newData = e.target.value;
    this.setState({
      newData
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.dbRef.push(this.state.newData);
  };
  componentDidMount() {
    this.dbRef = database.ref('/AMAZINGNEWDATA');
    this.dbRef.on('value', (snapshot) => {
      this.setState({
        data: snapshot.val()
      });
    });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <pre>{JSON.stringify(this.state.data, null, 2)}</pre>
          <form onSubmit={this.handleSubmit}>
            <input type="text" onChange={this.handleChange} />
            <button type="submit">Send</button>
          </form>
        </header>
      </div>
    );
  }
}

export default App;
