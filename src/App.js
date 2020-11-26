import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Introduction  from './components/pages/Introduction';
import Findings from './components/pages/Findings';
import Discussion from './components/pages/Discussion';
import Conclusions from './components/pages/Conclusions';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/introduction' component={Introduction} />
          <Route path='/findings' component={Findings} />
          <Route path='/discussion' component={Discussion} />
          <Route path='/conclusions' component={Conclusions} />

        </Switch>
      </Router>
    </>
  );
}

export default App;
