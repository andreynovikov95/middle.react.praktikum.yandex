import React, { useMemo } from 'react'
import shortid from 'shortid'

import { Messages } from './Messages/Messages'

import './RightColumn.css'
import {
    TDataAuthors,
    TDataChats,
    TDataChatMesseges,
    TDataChatsMesseges,
    TDateMessage
} from 'components/Chat/Chat'

export type TSendFuntion = (message: TDateMessage, chateMeassages: TDataChatMesseges, chatIndex: number) => () => void

type TProps = {
    selectedChatId: string,
    authors: TDataAuthors,
    chats: TDataChats,
    messages: TDataChatsMesseges,
    sendMessage: TSendFuntion
};

const getIndexChatMessage = (
    selectedChatId: string,
    chats: TDataChats = []
) : number => chats.findIndex(
    ({ chatId }: {
        chatId: string
    }) => chatId === selectedChatId
)

const getChatMessages = (
    selectedChatId: string,
    chats: TDataChats = [],
    messages: TDataChatsMesseges = []
) : TDataChatMesseges => {
    let selectedChat
    if (selectedChatId) {
        selectedChat = chats.find(
            ({ chatId }: {
                chatId: string
            }) => chatId === selectedChatId
        )
   }

    if (selectedChat) {
        return messages[selectedChat.messagesId]
    } else {
         return []
    }
}

const renderPanel = (sendMessage: TSendFuntion, chatMessages: TDataChatMesseges, chatIndex: number) => (
    <div className={'panel'}>
        <img src='icons/clip.svg' alt='clip' />
        <textarea
            className={'panel__textarea'}
            placeholder='Write a message...'
            required
        />
        <img
            className={'panel__clip'}
            src='icons/send.svg'
            alt='clip'
            onClick={sendMessage({
                authorId: 3,
                messageId: shortid.generate(),
                message: 'Hi!',
                time: '04:47:07'
            }, chatMessages, chatIndex)}
        />
    </div>
)

export const RightColumn = ({
    selectedChatId,
    authors = [],
    chats = [],
    messages = [],
    sendMessage
}: TProps) => {
    const chatMessages = useMemo(() => getChatMessages(selectedChatId, chats, messages),
        [selectedChatId, chats, messages]
    )
    const chatIndex = useMemo(() => getIndexChatMessage(selectedChatId, chats),
        [selectedChatId, chats]
    )

    return (
        <div className={'rightColumn'}>
            <Messages
                authors={authors}
                chatMessages={chatMessages}
            />
            {renderPanel(sendMessage, chatMessages, chatIndex)}
        </div>
    )
};
