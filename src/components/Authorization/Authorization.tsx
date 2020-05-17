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
    TDataAuthors
} from 'components/Chat/Chat'

import { Login } from './Login/Login'
import { Registration } from './Registration/Registration'

import './Authorization.css'

// TODO пока не получилось избавить от any
type TProps = {
    userLogin: string,
    userName: string,
    userPassword: string,
    userPasswordConfirm: string,
    authors: TDataAuthors,
    addNewAuthor: (author: any) => any,
    setUserLogin: (userName: string) => any,
    setUserName: (userName: string) => any,
    setUserPassword: (userPassword: string) => any,
    setUserPasswordConfirm: (userPasswordConfirm: string) => any,
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
        id: 'registration',
        name: 'SIGN UP',
        to: '/authorization/registration'
    }
]

// TODO refactor Login and Registration, add showing message
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
        userLogin,
        userName,
        userPassword,
        userPasswordConfirm,
        authors,
        addNewAuthor,
        setUserLogin,
        setUserName,
        setUserPassword,
        setUserPasswordConfirm,
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
                        exact
                    />
                    <Route
                        path='/authorization/registration'
                        render={(props) =>  (
                            <Registration
                                {...props}
                                authors={authors}
                                userLogin={userLogin}
                                userName={userName}
                                userPassword={userPassword}
                                userPasswordConfirm={userPasswordConfirm}
                                setUserLogin={setUserLogin}
                                setUserPasswordConfirm={setUserPasswordConfirm}
                                addNewAuthor={addNewAuthor}
                                setUserName={setUserName}
                                setUserPassword={setUserPassword}
                                setAuthorization={setAuthorization}
                                setCurrentUser={setCurrentUser}
                                isAuthorization={isAuthorization}
                            /> 
                        )}
                    />
                </Switch>
            </div>
        </form>
        </div>
    );
    }
}
