import React, { Component } from 'react';
import './App.css';
import Footer from "./Components/HeaderAndFooter/Footer";
import Header from "./Components/HeaderAndFooter/Header";

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header/>
          <Footer/>
      </div>
    );
  }
}

export default App;
