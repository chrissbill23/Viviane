import React, { Component } from 'react';
import './App.css';
import Footer from "../HeaderAndFooter/Footer";
import Header from "../HeaderAndFooter/Header";
import Main from "../Main/Main";

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header/>
          <Main/>
          <Footer/>
      </div>
    );
  }
}

export default App;
