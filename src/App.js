import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Teams from './components/Teams.js';
import NavBar from './components/NavBar.js';
import Home from './components/Home.js';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <Switch>
          <Route exact path='/'>
            <Home className="Home"/>
          </Route>
          <Route path='/teams'>
            <Teams className="Teams"/>
          </Route>
          <Route path='/build'>
            <p>hi</p>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
