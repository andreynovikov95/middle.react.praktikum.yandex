import React from 'react'

import {
    TDataAuthors,
    TDataChatMesseges,
    TDateMessage
} from 'components/Chat/Chat'

import './Messages.css'

type TDateMessages = TDateMessage[]

type TProps = {
    authors: TDataAuthors,
    chatMessages: TDataChatMesseges
};

const EMPTY_CHAT_TEXT = 'You have no messages yet';

const renderMessages = (
    messages: TDateMessages,
    authors: TDataAuthors
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
                <div className={'message__text__message'}>
                    {message}
                </div>
            </div>
            <div className={'message__time'}>
                {time}
            </div>
        </div>
    )
});

const renderDateMessages = (
    chatMessages: TDataChatMesseges,
    authors: TDataAuthors
) => chatMessages.map(({
    date,
    dateMessagesId,
    dateMessages
})  => {
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
    chatMessages = []
}: TProps) => (
    <div className={'messages'}>
        {chatMessages.length > 0
            ? renderDateMessages(chatMessages, authors)
            : (
                <div  className={'messages__emptyChat'}>
                    {EMPTY_CHAT_TEXT}
                </div>
            )
        }
    </div>
);
