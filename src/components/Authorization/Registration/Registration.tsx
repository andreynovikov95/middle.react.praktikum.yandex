import React, {
    ChangeEvent,
    KeyboardEvent
} from 'react'
import {
    RouteComponentProps,
  } from 'react-router-dom'
import cx from 'classnames'
import {
    TDataAuthors
} from 'components/Chat/Chat'

import './Registration.css'

type TProps = {
    userLogin: string,
    userName: string,
    userPassword: string,
    userPasswordConfirm: string,
    setUserLogin: (userName: string) => string,
    setUserName: (userName: string) => string,
    setUserPassword: (userPassword: string) => string,
    setUserPasswordConfirm: (userPasswordConfirm: string) => string
}

type TAuthorizationProps = {
    authors: TDataAuthors,
    addNewAuthor: (author: any) => any,
    setAuthorization: (isAuthorization: boolean) => boolean,
    setCurrentUser: (currentUserId: number) => number,
    isAuthorization: boolean
}

const EMAIL_PLACEHOLDER = 'Email'
const USERNAME_PLACEHOLDER = 'Username'
const PASSWORD_PLACEHOLDER = 'Password'
const PASSWORD_PLACEHOLDER_CONFIRM = 'Confirm password'
const SING_UP = 'Sign Up'

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
    userLogin: string,
    userName: string,
    userPassword: string,
    userPasswordConfirm: string,
    {
        history,
        authors,
        addNewAuthor,
        setAuthorization,
        setCurrentUser
    }: RouteComponentProps & TAuthorizationProps
) => () => {
    if (
        userName.trim().length > 0
        && userPassword.trim().length > 0
        && userPasswordConfirm.trim().length > 0
    ) {
        const currentUserId = authors.findIndex(({ email }: {
                email: string
            }) => email === userName
        )

    if (currentUserId < 0 && userPassword === userPasswordConfirm) {
            addNewAuthor([
                ...authors,
                {
                    email: userLogin,
                    name: userName,
                    avatar: 'Anonymous',
                    password: userPassword
            }])
            setAuthorization(true)
            setCurrentUser(authors.length)
            history.push('/chat');
        }
    }
};

const handleKeyDown = (
    userLogin: string,
    userName: string,
    userPassword: string,
    userPasswordConfirm: string,
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
        openChat(
            userLogin,
            userName,
            userPassword,
            userPasswordConfirm,
            routeProps
        )
    }
}

export const Registration = ({
    userLogin,
    userName,
    userPassword,
    userPasswordConfirm,
    setUserLogin,
    setUserName,
    setUserPassword,
    setUserPasswordConfirm,
    ...rest
}: TProps & TAuthorizationProps & RouteComponentProps) => (
    <div className='registration'>
        <div className='registration__continer'>
            <img
                className={cx(
                    'registration__continer__img', 
                    'registration__continer__img_email'
                )}
                src='/react-messenger/icons/email.svg'
                alt='email icon'
            />
            <input
                className='registration__continer__input'
                type='email'
                placeholder={EMAIL_PLACEHOLDER}
                value={userLogin}
                onChange={handleChange(setUserLogin)}
                onKeyDown={handleKeyDown(
                    userLogin,
                    userName,
                    userPassword,
                    userPasswordConfirm,
                    rest
                )}
                required
            />
        </div>
            <div className='registration__continer'>
            <img
                className='registration__continer__img'
                src='/react-messenger/icons/profile.svg'
                alt='profile icon'
            />
            <input
                className='registration__continer__input'
                type='email'
                placeholder={USERNAME_PLACEHOLDER}
                value={userName}
                onChange={handleChange(setUserName)}
                onKeyDown={handleKeyDown(
                    userLogin,
                    userName,
                    userPassword,
                    userPasswordConfirm,
                    rest
                )}
                required
            />
        </div>
        <div className='registration__continer'>
            <img
                className='registration__continer__img'
                src='/react-messenger/icons/lock.svg'
                alt='profile icon'
            />
            <input
                className='registration__continer__input'
                type='password'
                placeholder={PASSWORD_PLACEHOLDER}
                value={userPassword}
                onChange={handleChange(setUserPassword)}
                onKeyDown={handleKeyDown(
                    userLogin,
                    userName,
                    userPassword,
                    userPasswordConfirm,
                    rest
                )}
                required
            />
        </div>
        <div className='registration__continer'>
            <img
                className='registration__continer__img'
                src='/react-messenger/icons/lock.svg'
                alt='profile icon'
            />
            <input
                className='registration__continer__input'
                type='password'
                placeholder={PASSWORD_PLACEHOLDER_CONFIRM}
                onChange={handleChange(setUserPasswordConfirm)}
                onKeyDown={handleKeyDown(
                    userLogin,
                    userName,
                    userPassword,
                    userPasswordConfirm,
                    rest
                )}
                required
            />
        </div>
        <button
            className='registration__button'
            type='button'
            onClick={openChat(
                userLogin,
                userName,
                userPassword,
                userPasswordConfirm,
                rest
            )}
        >
            {SING_UP}
        </button>
    </div>
)
