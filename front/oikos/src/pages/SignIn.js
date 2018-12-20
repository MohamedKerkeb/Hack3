import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

class SignIn extends Component {
  render() {
    return (
      <div>
        <h1>SIGN IN</h1>
      
        <p>
          Lien temporaire vers <Link to="/index">Index</Link>
        </p>

      </div>
    );
  }
}

export default SignIn;
