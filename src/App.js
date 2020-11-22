import React from 'react';
import './App.css';
import Navbar from './Navbar';
import Blog from './Blog';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
function App() {
  return (
    <div className="app">

      <Router>
        <Navbar />

        <Switch>


          <Route path="/blog">
            <Blog />
          </Route>

        </Switch>
      </Router>

    </div>
  );
}

export default App;
