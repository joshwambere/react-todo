import React from 'react';
import Navbar from './components/navbar.jsx';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import Homes from './components/home.jsx' 
import About from './components/about.jsx' 

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar/>
        <Route exact path="/" component={Homes}/>
        <Route exact path="/about" component={About}/>
      </div>
   </BrowserRouter>
  );
}

export default App;
