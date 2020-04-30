import React from 'react'

import {
    DataAuthors,
    DataDateMeassages,
    DataChats,
    IDateMessage
} from 'components/Chat/Chat.d'
import './Messages.css'

interface IProps {
    authors: DataAuthors,
    dateMeassages: DataDateMeassages,
    chatMessages: DataChats
};

const renderMessages = (
    messages: Array<IDateMessage>,
    authors: DataAuthors
) => messages.map(({
    authorId,
    messageId,
    message,
    time
})  => {
    const {
        name = 'The Shrek 2',
        avatar = '/images/shrek2.png'
    } = authors[authorId]

    return (
        <div
         className={'message'}
         key={messageId}
        >
            <div className={'message__avatar'}>
                <img src={avatar} alt={name} />
            </div>
            <div className={'message__text'}>
                <div className={'message__text__name'}>
                    {name}
                </div>
                <div>
                    {message}
                </div>
            </div>
            <div className={'message__time'}>
                {time}
            </div>
        </div>
    )
})

const renderDateMessages = (
    chatMessages: DataChats,
    messages: DataDateMeassages,
    authors: DataAuthors
) => chatMessages.map(({
    date,
    dateMessagesId
})  => {
    const dateMessages = messages[dateMessagesId]

    return (
        <div
         className={'dateMessages'}
         key={dateMessagesId}
        >
            <div className={'dateMessages__date'}>
                {date}
            </div>
            <div className={'dateMessages__messages'}>
                {renderMessages(dateMessages, authors)}
            </div>
        </div>
    )
})

export const Messages = ({
    authors = [],
    dateMeassages = [],
    chatMessages = []
}: IProps) => (
    <div className={'messages'}>
        {renderDateMessages(chatMessages, dateMeassages, authors)}
        <div className={'messages__panel'}>
            <img src='icons/clip.svg' alt='clip' />
            <textarea
                className={'messages__panel__textarea'}
                required
            />
            <img src='icons/send.svg' alt='clip' />
        </div>
    </div>
);
