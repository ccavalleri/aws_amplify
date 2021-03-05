import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
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
    console.log('constructor');
  }

  render() {
    console.log('rendering..');
    return (
      <Router>
        <div>
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route exact path="/About" component={About} />
          <Route exact path="/Services" component={Services} />
          <Route exact path="/Blog" component={Blog} />
          <Route exact path="/Contact" component={Contact} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
