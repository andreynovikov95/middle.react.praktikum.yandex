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
  const [isAuthorization, setAuthorization] = useState(false)

  return (
    <div className="app">
      {isAuthorization
          ? (
            <Switch>
                <Route
                  path='/chat'
                  component={Chat}
                />
                <Route
                  path='*'
                  render={() => <Redirect to='/chat' />}
                />
            </Switch>
          )
          : (
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
                      setAuthorization={setAuthorization}
                      isAuthorization={isAuthorization}
                    />
                  )
                }/>
              <Route
                path='*'
                render={() => <Redirect to='/authorization' />}
              />
            </Switch>
          )
      }
    </div>
  );
}