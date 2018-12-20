import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import Main from '../pages/Main';
import SignIn from '../pages/SignIn';
import Quizz from '../pages/Quizz';

class Router extends Component {

  render() {
    return (
        <BrowserRouter>

          <Switch>
            <Route exact path='/' component={Main} />
            <Route exact path='/index' component={Main} />
            <Route path='/signin' component={SignIn} />
            <Route path='/quizz' component={Quizz} />
          </Switch>
          
        </BrowserRouter>
      
    )
  }
}

export default Router;
