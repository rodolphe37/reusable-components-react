import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import FlyingRocket from './components/FlyingRocket/FlyingRocket';
import InfiniteLoopLoader from './components/InfiniteLoopLoader/InfiniteLoopLoader';
import CubeWave from './components/CubeWave/CubeWave';
import Examples from './App';
import './assets/css/bootstrap.min.css'


function App() {
    return (
    <Router>
        <div>
          <h2>Welcome to Reusable-Components-React Examples</h2>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav mr-auto">
            <li><Link to={'/'} className="nav-link"> Home </Link></li>
            <li><Link to={'/FlyingRocket'} className="nav-link">FlyingRocket</Link></li>
            <li><Link to={'/InfiniteLoopLoader'} className="nav-link">InfiniteLoopLoader</Link></li>
            <li><Link to={'/CubeWave'} className="nav-link">CubeWave</Link></li>
            <li><Link to={'/InfiniteLoopLoader'} className="nav-link">InfiniteLoopLoader</Link></li>
            <li><Link to={'/InfiniteLoopLoader'} className="nav-link">InfiniteLoopLoader</Link></li>
            <li><Link to={'/InfiniteLoopLoader'} className="nav-link">InfiniteLoopLoader</Link></li>
            <li><Link to={'/InfiniteLoopLoader'} className="nav-link">InfiniteLoopLoader</Link></li>
          </ul>
          </nav>
          <hr />
          <Switch>
              <Route exact path='/' component={Examples} />
              <Route path='/FlyingRocket' component={FlyingRocket} />
              <Route path='/InfiniteLoopLoader' component={InfiniteLoopLoader} />
              <Route path='/CubeWave' component={CubeWave} />
              <Route path='/InfiniteLoopLoader' component={InfiniteLoopLoader} />
              <Route path='/InfiniteLoopLoader' component={InfiniteLoopLoader} />
              <Route path='/InfiniteLoopLoader' component={InfiniteLoopLoader} />
              <Route path='/InfiniteLoopLoader' component={InfiniteLoopLoader} />
              <Route path='/InfiniteLoopLoader' component={InfiniteLoopLoader} />
          </Switch>
        </div>
      </Router>
    );
}

export default App;