import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { TextField, Button } from '@material-ui/core';
import './SignIn.css';
import Logo from '../LOGOOIKOS-min.png';
import Logo from '../images/LOGOOIKOS-min.png';
import fb from '../images/F.svg';
import google from '../images/G.svg';
import Main from './Main'


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
        <p>
          <img src={Logo} alt="Logo Oikos" className="SignInLogo"/>
        </p>
        <form onSubmit={this.handleSubmit} className="SignInForm" method="POST">

          <TextField
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
            />

          <Link to="/about"><Button 
              onClick={this.handleClick}
              type="submit" 
              value="Soumettre"
              variant="contained" 
              color="default"
              className="SignIn"
          >
              Sign In
          </Button></Link>

        </form>

        <p>
          <img src={google} alt="Sign in with Google" className="SignInWithF"/>
          <img src={fb} alt="Sign in with Facebock" className="SignInWithG"/>
        </p>

      </div>
    );
  }
}

export default SignIn;
