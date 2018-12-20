import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

class Main extends Component {
  render() {
    return (
      <div>
        <h1>PAGE D'ACCUEIL</h1>
        

        <p>
          Lien temporaire vers <Link to="/quizz">Quizz</Link>
        </p>

      </div>
    );
  }
}

export default Main;