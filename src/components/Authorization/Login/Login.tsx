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

type TAuthorizationProps = {
    setAuthorization: (value: boolean) => boolean,
    isAuthorization: boolean
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

const openChat = (
    userName: string,
    userPassword: string,
    {
        history,
        setAuthorization,
    }: RouteComponentProps & TAuthorizationProps
) => () => {
    if (userName.trim().length > 0 && userPassword.trim().length > 0) {
        setAuthorization(true)
        history.push('/chat');
    }
};

const handleKeyDown = (
    userName: string,
    userPassword: string,
    routeProps: RouteComponentProps & TAuthorizationProps
): (
    event: KeyboardEvent<HTMLInputElement>
) => void => (
    event: KeyboardEvent<HTMLInputElement>
): void => {
    const {
        key
    } = event

    if (key === 'Enter') {
        openChat(userName, userPassword, routeProps)
    }
}

export const Login = ({
    userName,
    userPassword,
    setUserName,
    setUserPassword,
    ...rest
}: TProps & TAuthorizationProps & RouteComponentProps) => (
    <div className='login'>
        <div className='login__continer'>
            <img
                className='login__continer__img'
                src='/icons/profile.svg'
                alt='profile-icon'
            />
            <input
                className='login__continer__input'
                type='email'
                placeholder={USERNAME_PLACEHOLDER}
                value={userName}
                onChange={handleChange(setUserName)}
                onKeyDown={handleKeyDown(userName, userPassword, rest)}
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
                onKeyDown={handleKeyDown(userName, userPassword, rest)}
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
            type='submit'
            onClick={openChat(userName, userPassword, rest)}
        >
            {LOGIN}
        </button>
    </div>
)
