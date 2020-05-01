import React from 'react'
import cx from 'classnames'

import './ChatBar.css'

type TProps = {
    chatId: string,
    selectedChatId: string,
    author: string;
    chatName: string;
    date: string;
    lastMessage: string;
    icon: string;
    selectChat: (id: string) => () => void;
};

export const ChatBar = ({
    selectedChatId,
    chatId,
    date = '01/05/2020',
    author = 'Shrek 2',
    chatName = 'Group Chat',
    lastMessage = 'tas odio. Ut sit amet...',
    icon = 'react',
    selectChat
}: TProps) => {
    let message = lastMessage.length > 19
        ? lastMessage.slice(0, 19).trim()
        : lastMessage

    return (
        <div
            className={cx('bar', {
                'bar_selected': chatId === selectedChatId
            })}
            onClick={selectChat(chatId)}
        >
            <div className={'bar__icon'}>
                <img src={`icons/${icon}.svg`} alt={author}/>
            </div>
            <div className={'bar__message'}>
                <div className={'bar__message__title'}>
                    <h1 className={'bar__message__title__name'}>
                        {chatName}
                    </h1>
                    <div className={'bar__message__title__date'}>
                        {date}
                    </div>
                </div>
                <div className={'bar__message__content'}>
                    <span className='bar__message__content_author'>
                        {author}:
                    </span>
                    {' '}{message}...
                </div>
            </div>
        </div>
    )
}
