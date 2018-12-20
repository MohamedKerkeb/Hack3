import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { TextField, Button } from '@material-ui/core';
import './SignIn.css';
import Logo from '../LOGOOIKOS-min.png';

class SignIn extends Component {
  state = {
    email: "",
    password: "",
}

updateInfo = event => {
  this.setState({
      [event.target.name]: event.target.value
  });
};


  render() {

    const { email, password } = this.state;

    return (
      <div>
        <h1>SIGN IN</h1>

        <img src={Logo} alt="Logo Oikos" className="SignInLogo"/>

        <form onSubmit={this.handleSubmit} className="SignInForm">

          <TextField
              required
              id="standard-required"
              label="Votre email"
              type="email" 
              name="email" 
              onChange={this.updateInfo} 
              value={email}
              margin="normal"
          />

          <TextField 
              label="Votre mot de passe"
              type="password" 
              name="password" 
              onChange={this.updateInfo} 
              value={password}
              required
          />

          <Button 
              onClick={this.handleClick}
              type="submit" 
              value="Soumettre"
              variant="contained" 
              color="default"
          >
              Submit
          </Button>

        </form>
        <p>
          Lien temporaire vers <Link to="/index">Index</Link>
        </p>

      </div>
    );
  }
}

export default SignIn;
