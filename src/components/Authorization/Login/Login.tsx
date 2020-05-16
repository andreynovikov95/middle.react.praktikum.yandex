import React from 'react'

import './Login.css'

const USERNAME_PLACEHOLDER = 'Username'
const PASSWORD_PLACEHOLDER = 'Password'
const REMEMBER_ME = 'Remember me'
const FORGOT_PASSWORD = 'Forgot password?'
const LOGIN = 'Login'

export const Login = () => (
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
        <button className='login__button'>
            {LOGIN}
        </button>
    </div>
)
