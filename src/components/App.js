import React from "react";
import Header from "./Header";
import ReasonControl from "./ReasonControl";
import { Container } from 'react-bootstrap';
import Signin from './Signin';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App(){
  return ( 
    <Router>
      <Header / >
      <Container>
        <Switch>
          <Route path='/signin'>
              <Signin />
          </Route>
          <Route path="/">
              <ReasonControl />
          </Route>
        </Switch>
      </Container>
    </Router>
  );
}



export default App;