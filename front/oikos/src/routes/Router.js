import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import Main from '../pages/Main';
import SignIn from '../pages/SignIn';
import Quizz from '../pages/Quizz';
import Wiki from '../pages/Wiki';
import Ranking from '../pages/Ranking';
import Points from '../pages/Points';


class Router extends Component {

  render() {
    return (
        <BrowserRouter>

          <Switch>
            <Route exact path='/' component={SignIn} />
            <Route exact path='/main' component={Main} />
            <Route path='/quizz' component={Quizz} />
            <Route path='/wiki' component={Wiki} />
            <Route path='/ranking' component={Ranking} />
            <Route path='/points' component={Points} />
          </Switch>
          
        </BrowserRouter>
      
    )
  }
}

export default Router;
