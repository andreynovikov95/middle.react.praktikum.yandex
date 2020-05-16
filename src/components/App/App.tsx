import React from 'react';
import {
  Switch,
  Route
} from 'react-router-dom';

import { Authorization } from 'components/Authorization/Authorization';
import { Chat } from 'components/Chat/Chat';

import './App.css';

export const App = () => (
  <div className="app">
    <Switch>
        <Route
          path='/authorization'
          render={
            (props) => <Authorization
              {...props}
            />
          }/>
          <Route path='/chat' component={Chat}/>
        />
      </Switch>
  </div>
);
