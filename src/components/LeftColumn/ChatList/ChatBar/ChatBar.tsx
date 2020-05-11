import React, { PureComponent } from 'react'
import cx from 'classnames'
import {
    Link
} from 'react-router-dom'

import './ChatBar.css'

type TProps = {
    chatId: string,
    selectedChatId: string,
    author: string,
    chatName: string,
    date: number,
    lastMessage: string,
    icon: string
};

const MAX_LENGTH_PREVIEW_TEXT_MESSAGE = 18;

export class ChatBar extends PureComponent<TProps> {
    render() {
        const {
            selectedChatId,
            chatId,
            date = 1556668800000, // '01/05/2020'
            author = 'Shrek 2',
            chatName = 'Group Chat',
            lastMessage = 'tas odio. Ut sit amet...',
            icon = 'react'
        } = this.props

        let message = lastMessage.length > MAX_LENGTH_PREVIEW_TEXT_MESSAGE
            ? `${lastMessage.slice(0, MAX_LENGTH_PREVIEW_TEXT_MESSAGE).trim()}...`
            : lastMessage
        const formatDate = new Date(date)

        return (
            <li>
                <Link
                    className={cx('bar', {
                        'bar_selected': chatId === selectedChatId
                    })}
                    to={`/chat/${chatId}`}
                >
                    <div className={'bar__icon'}>
                        <img src={`/icons/${icon}.svg`} alt={icon}/>
                    </div>
                    <div className={'bar__message'}>
                        <div className={'bar__message__title'}>
                            <h1 className={'bar__message__title__name'}>
                                {chatName}
                            </h1>
                            <div className={'bar__message__title__date'}>
                                {`${formatDate.getUTCMonth() + 1}/${formatDate.getUTCDate()}/${formatDate.getFullYear()}`}
                            </div>
                        </div>
                        <div className={'bar__message__content'}>
                            <span className='bar__message__content_author'>
                                {author}:
                            </span>
                            {' '}{message}
                        </div>
                    </div>
                </Link>
            </li>
        )
    }
}
