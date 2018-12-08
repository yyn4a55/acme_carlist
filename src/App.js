import React, { Component } from 'react';
import './App.css';
import io from 'socket.io-client';
import CarList from './components/carList';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {

      //socket :io.connect('http://pibackend.herokuapp.com:8810')
      
    }

  }


  componentWillUnmount() {
    //this.state.socket.disconnect();
  }

  render() {
    return (
      <div className="App">
        <CarList />
      </div>
    );
  }
}

export default App;
