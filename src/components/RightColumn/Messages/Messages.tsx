import React from 'react'

import {
    createMarkup
} from 'utils/html'
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

const getFormatDate = (date: number) => new Date(date)
    .toLocaleString("en-US", {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        weekday: 'short',
        timeZone: 'UTC'
    }) 
    .replace(/,/g, '')

const renderMessages = (
    messages: TDateMessages,
    authors: TDataAuthors
) => messages.map(({
    authorId,
    messageId,
    message,
    time
}, index)  => {
    const {
        name = 'Anonymous',
        avatar = 'Anonymous'
    } = authors[authorId]
    const showAuthorInfo = index === 0 || (index > 0 && authorId !== messages[index - 1].authorId)

    return (
        <div
         className={'message'}
         key={messageId}
        >
            
            <div className={'message__avatar'}>
                {showAuthorInfo && (
                    <img
                        src={`/react-messenger/images/${avatar}.png`}
                        alt={name}
                        width={50}
                    />
                )}
            </div>
            <div className={'message__text'}>
            {showAuthorInfo && (
                <div className={'message__text__name'}>
                        {name}
                </div>
            )}
                <div
                    className={'message__text__message'}
                    dangerouslySetInnerHTML={createMarkup(message)}
                />
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
    const formatDate = getFormatDate(date)

    return (
        <div
            className={'dateMessages'}
            key={dateMessagesId}
        >
            <div className={'dateMessages__date'}>
                {formatDate}
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
