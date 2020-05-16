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

import { Login } from './Login/Login'

import './Authorization.css'

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

export class Authorization extends PureComponent<RouteComponentProps> {
    renderTabs = () => {
        console.log(this.props)
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

    return (
        <div className="authorization">
        <form  className="authorization__form">
            {this.renderTabs()}
            <div className="authorization__form__content">
                <Switch>
                    <Route path='/authorization' component={Login} />
                    <Route exact path='/authorization/register' render={(props) =>  <div {...props }> </div> } />
                </Switch>
            </div>
        </form>
        </div>
    );
    }
}
