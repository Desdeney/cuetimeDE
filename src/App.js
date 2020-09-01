import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class App extends React.Component{
  render(){
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/users">Users</Link>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/about">
              <Inhalt />
            </Route>
            <Route path="/users">
              <h1> Hallo ich bin Fibz </h1>
            </Route>
            <Route path="/">
              <h2> Moiin, Servus, Moiin </h2>
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}



class Inhalt extends React.Component {  //React als Methode/Klasse, statt Function
  render(){
    return(    
    <div className="App">
      Hallo, ich bin Fabian.
      <App2/>
    </div>
    );
  }
}

//FOLGENDER CODE IST DANN EINE WEITERE SEITE; ALS EIGENE DATEI IMPLEMENTIEREN
class App2 extends React.Component{
  render(){
    return(
      <div className="DeineMudda">
        Hallo 5678
      </div>
    );
  }
}

export default App;
/*
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Lern doch mal React?
        </a>
      </header>#
*/