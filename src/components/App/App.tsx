import React, { useState } from 'react';
import {
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

import { Authorization } from 'components/Authorization/Authorization';
import { Chat } from 'components/Chat/Chat';

import './App.css';

export const App = () => {
  const [userName, setUserName] = useState('');
  const [userPassword, setUserPassword] = useState('');

  return (
    <div className="app">
      <Switch>
          <Route
            path='/authorization'
            render={
              (props) => (
                <Authorization
                  {...props}
                  userName={userName}
                  userPassword={userPassword}
                  setUserName={setUserName}
                  setUserPassword={setUserPassword}
                />
              )
            }/>
            <Route
              path='/chat'
              component={Chat}
            />
            <Route
              path='*'
              render={() => <Redirect to='/authorization' />}
              exact
            />
          />
        </Switch>
    </div>
  );
}