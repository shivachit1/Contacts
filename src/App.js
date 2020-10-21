import React from 'react';
import './App.css';
import {BrowserRouter as Router ,Route} from 'react-router-dom';
import Home from './Components/Home';
import UserDetails from './Components/UserDetails';

function App() {
  return (
    <Router>
    <div className="App">
      
      <Route exact path="/" component={Home}/>
      <Route exact path="/users/:id" component={UserDetails}/>
    </div>
    
    </Router>
  );
}

export default App;
