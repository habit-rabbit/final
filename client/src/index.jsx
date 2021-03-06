// Application entrypoint.

// Load up the application styles
require("../styles/application.scss");

// Render the top-level React component
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import { Router, Route, Link, hashHistory, IndexRoute, IndexRedirect } from 'react-router'
ReactDOM.render(

  //here we would have our conditionals some ho that sets up the redirects
  // ie   <IndexRedirect to="/welcome" />

 <Router history={hashHistory} >
    <Route path="/">
        <IndexRedirect to="/login" />
      <Route path="/login" component={App} />
    </Route>
    <Route path="/home" component={App} />
 </Router>
  , document.getElementById('react-root'));


