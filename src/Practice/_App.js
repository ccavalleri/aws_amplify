// removed from app.js
import React, { Component } from 'react';
import Navbar from './Components/NavBar';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import About from './Pages/About';
import Blog from './Pages/Blog';
import Services from './Pages/Services';
import Contact from './Pages/Contact';

class App extends Component {
  constructor() {
    super();
    this.state = {
      names: [],
    };
    console.log('constructor');
    this.removeName = this.removeName.bind(this);
  }

  removeName(name) {
    console.log(name);
    this.setState((state) => ({
      names: state.names.filter((n) => n !== name),
    }));
  }

  componentDidMount() {
    const data = this.fetchingAPI();
    this.setState({
      names: data,
    });
    console.log('Component didMount..');
  }

  fetchingAPI() {
    return ['Stephen', 'John', 'Paul'];
  }

  render() {
    console.log('rendering..');
    return (
      <div>
        <Navbar />
        <Home />
        <About />
        <Services />
        <Blog />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
