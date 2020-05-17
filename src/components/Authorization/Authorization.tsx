import React, { PureComponent } from 'react';
import {
  Switch,
  Route,
  RouteComponentProps,
  Link
} from 'react-router-dom'
import cx from 'classnames'

import {
    getLastPathnamePart
} from 'utils/getLastPathnamePart'
import {
    TAuthor,
    TDataAuthors
} from 'components/Chat/Chat'

import { Login } from './Login/Login'

import './Authorization.css'

// TODO пока не получилось избавить от any
type TProps = {
    userName: string,
    userPassword: string,
    authors: TDataAuthors,
    setUserName: (userName: string) => any,
    setUserPassword: (userPassword: string) => any,
    setAuthorization: (isAuthorization: boolean) => any,
    setCurrentUser: (currentUserId: number) => any,
    isAuthorization: boolean
}


const TABS = [
    {
        id: 'authorization',
        name: 'LOG IN',
        to: '/authorization'
    },
    {
        id: 'register',
        name: 'SIGN UP',
        to: '/authorization/register'
    }
]

export class Authorization extends PureComponent<RouteComponentProps & TProps> {
    renderTabs = () => {
        const {
            location: {
                pathname
            }
        } = this.props
        const activeTab = getLastPathnamePart(pathname)

        return (
            <nav>
                <ul className='tabs'>
                    {TABS.map(({
                        id,
                        name,
                        to
                    }) => {
                        const isActive = id === activeTab

                        return (
                            <li
                                className={cx('tabs__tab', {
                                    'tabs__tab_active': isActive
                                })}
                                key={id}
                                >
                                    <Link
                                        className='tabs__tab__link '
                                        to={to}
                                    >
                                        {name}
                                    </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        )
    }

    public render() {
    const {
        userName,
        userPassword,
        authors,
        setUserName,
        setUserPassword,
        setAuthorization,
        setCurrentUser,
        isAuthorization
    } = this.props

    return (
        <div className="authorization">
        <form  className="authorization__form">
            {this.renderTabs()}
            <div className="authorization__form__content">
                <Switch>
                    <Route
                        path='/authorization'
                        render={(props) =>  (
                            <Login
                                {...props }
                                userName={userName}
                                userPassword={userPassword}
                                authors={authors}
                                setUserName={setUserName}
                                setUserPassword={setUserPassword}
                                setAuthorization={setAuthorization}
                                setCurrentUser={setCurrentUser}
                                isAuthorization={isAuthorization}
                            /> 
                        )}
                    />
                    <Route exact path='/authorization/register' render={(props) =>  <div {...props }> </div> } />
                </Switch>
            </div>
        </form>
        </div>
    );
    }
}
