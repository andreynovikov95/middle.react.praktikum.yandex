import React from 'react'

import './Messages.css'

interface IProps {
    authors: object[],
    dateMeassages: object[],
    chatMessages: object[]
};

const renderMessages = (messages: Array<any>, authors: Array<any>) => messages.map(({
    authorId,
    messageId,
    message,
    time
})  => {
    const {
        name,
        avatar
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
    chatMessages: Array<any>,
    messages: Array<any>,
    authors: Array<any>
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
