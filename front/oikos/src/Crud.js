import React, { Component } from 'react';
import './Crud.css';
import { Link, Redirect } from 'react-router-dom';


class Crud extends Component {
    state= {
        resultat : []
    }




  render() {
    return (
      <div>
        <div className="logo">
            <div>
                <header class="tc pv4 pv5-ns">
                <Link to="/quizz"><img src="https://is5-ssl.mzstatic.com/image/thumb/Purple122/v4/20/12/31/201231d0-49aa-d9b1-7576-2d33b0fcac85/pr_source.png/246x0w.png" class="br3 ba b--black-10 h3 w3" alt="avatar" /></Link>
                <h1 class="f5 f4-ns fw6 black-70">QUIZZ</h1>
                </header>
            </div>
            <div>
                <header class="tc pv4 pv5-ns">
                <Link to="/wiki"><img src="https://cdn.icon-icons.com/icons2/936/PNG/512/book_icon-icons.com_73655.png" class="br3 ba b--black-10 h3 w3" alt="avatar" /></Link>
                <h1 class="f5 f4-ns fw6 black-70">WIKI</h1>
                </header>
            </div>
        </div>
        <div className="logo2">  
            <div>
                <header class="tc pv4 pv5-ns">
                <Link to="/ranking"><img src="http://perekchira.com/wp-content/uploads/2018/03/Etoile.png" class="br3 ba b--black-10 h3 w3" alt="avatar" /></Link>
                <h1 class="f5 f4-ns fw6 black-70">RANKING</h1>
                </header>
            </div>
            <div>
                <header class="tc pv4 pv5-ns">
                <Link to="/points"><img src="http://pluspng.com/img-png/flag-logo-png-big-image-png-2400.png" class="br3 ba b--black-10 h3 w3" alt="avatar" /></Link>
                <h1 class="f5 f4-ns fw6 black-70">POINTS</h1>
                </header>
            </div>
        </div>
      </div>
    )
  }
}

export default Crud;