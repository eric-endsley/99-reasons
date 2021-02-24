import React from "react";
import { Jumbotron } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Header(){
  return (
    <React.Fragment>
      <Jumbotron>
        {/* <h1>99 reasons to brew better coffee for yourself</h1> */}
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/signin">Sign In</Link>
          </li>
        </ul>
      </Jumbotron>
    </React.Fragment>
  );
}

export default Header;