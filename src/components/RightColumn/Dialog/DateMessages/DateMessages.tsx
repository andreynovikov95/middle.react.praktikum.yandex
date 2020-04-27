import * as React from 'react'

interface IProps {
    authors: object[],
    dateMeassages: object[],
    chatMessages: object[]
};

const renderMessage = (messages: Array<any>, authors: Array<any>) => messages.map(({
    authorId,
    message
})  => {
    const {
        name,
        avatar
    } = authors[authorId]

    return (
        <div>
            {name}: {message}
        </div>
    )
})

const renderChatMessage = (chatMessages: Array<any>, messages: Array<any>, authors: Array<any>) => chatMessages.map(({
    date,
    dateMessagesId,
})  => {
    const dateMessages = messages[dateMessagesId]

    return (
        <div>
            {date}
            {renderMessage(dateMessages, authors)}
        </div>
    )
})

const Dialog: React.SFC<IProps> = (props: IProps) => {
    const {
        authors,
        dateMeassages,
        chatMessages
    } = props

    return (
        <div className={'dateMessage'}>
            {renderChatMessage(chatMessages, dateMeassages, authors)}
        </div>
    )
};

Dialog.defaultProps = {
    authors: [],
    dateMeassages: [],
    chatMessages: []
};

export default Dialog;