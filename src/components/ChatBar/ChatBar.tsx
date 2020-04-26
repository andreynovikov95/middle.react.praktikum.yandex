import * as React from 'react'
import cx from 'classnames'

import './ChatBar.css'

interface IProps {
    id: number,
    chatId?: number,
    author: string;
    chatName: string;
    date: string;
    lastMessage: string;
    icon: string;
    selectChat: any;
};

const ChatBar: React.SFC<IProps> = (props: IProps) => {
    const {
        id,
        chatId,
        date,
        author,
        chatName,
        lastMessage,
        icon,
        selectChat
    } = props

    return (
        <div
         className={cx('bar', {
             'bar_selected': id === chatId
         })}
         onClick={selectChat(id)}
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
                    {' '}{lastMessage}
                </div>
            </div>
        </div>
    )
};

ChatBar.defaultProps = {
    author: 'Shrek 2',
    chatName: 'Group Chat',
    lastMessage: 'tas odio. Ut sit amet...',
    icon: 'react'
};

export default ChatBar;