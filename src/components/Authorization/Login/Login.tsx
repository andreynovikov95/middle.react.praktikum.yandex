import React, {
    ChangeEvent,
    KeyboardEvent
} from 'react'
import {
    RouteComponentProps,
  } from 'react-router-dom'

import './Login.css'

type TProps = {
    userName: string,
    userPassword: string,
    setUserName: (value: string) => string,
    setUserPassword: (value: string) => string
}

const USERNAME_PLACEHOLDER = 'Username'
const PASSWORD_PLACEHOLDER = 'Password'
const REMEMBER_ME = 'Remember me'
const FORGOT_PASSWORD = 'Forgot password?'
const LOGIN = 'Login'

const handleChange = (setValue: (value: string) => string) => (
    event: ChangeEvent<HTMLInputElement>
): void => {
    const {
        currentTarget: {
            value
        }
    } = event

    setValue(value)
}

const openChat = (routeProps: RouteComponentProps) => () => {
    routeProps.history.push('/chat');
};

const handleKeyDown = (routeProps: RouteComponentProps): (
    event: KeyboardEvent<HTMLInputElement>
) => void => (
    event: KeyboardEvent<HTMLInputElement>
): void => {
    const {
        key
    } = event

    if (key === 'Enter') {
        openChat(routeProps)
    }
}

export const Login = ({
    userName,
    userPassword,
    setUserName,
    setUserPassword,
    ...rest
}: TProps & RouteComponentProps) => (
    <div className='login'>
        <div className='login__continer'>
            <img
                className='login__continer__img'
                src='/icons/profile.svg'
                alt='profile-icon'
            />
            <input
                className='login__continer__input'
                placeholder={USERNAME_PLACEHOLDER}
                value={userName}
                onChange={handleChange(setUserName)}
                onKeyDown={handleKeyDown(rest)}
                required
            />
        </div>
        <div className='login__continer'>
            <img
                className='login__continer__img'
                src='/icons/lock.svg'
                alt='profile-icon'
            />
            <input
                className='login__continer__input'
                type='password'
                placeholder={PASSWORD_PLACEHOLDER}
                value={userPassword}
                onChange={handleChange(setUserPassword)}
                onKeyDown={handleKeyDown(rest)}
                required
            />
        </div>
        <div className='login__helpers'>
            <div className='login__helpers_rememberMe'>
                <input
                    className='login__helpers__checkbox'
                    id='rememberMe'
                    type='checkbox'
                    disabled
                />
                <label htmlFor='rememberMe'>
                    {REMEMBER_ME}
                </label>
            </div>
            <div>
                {FORGOT_PASSWORD}
            </div>
        </div>
        <button
            className='login__button'
            onClick={openChat(rest)}
        >
            {LOGIN}
        </button>
    </div>
)
