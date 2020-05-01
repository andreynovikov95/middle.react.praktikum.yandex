import React, { useMemo } from 'react'

import { Messages } from './Messages/Messages'

import './RightColumn.css'
import {
    TDataAuthors,
    TDataDateMessages,
    TDataChats,
    TDataChatMesseges,
    TDataChatsMesseges
} from 'components/Chat/Chat'

type TProps = {
    selectedChatId: string,
    authors: TDataAuthors,
    dateMeassages: TDataDateMessages,
    chats: TDataChats,
    messages: TDataChatsMesseges
};

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

const renderPanel = () => (
    <div className={'panel'}>
        <img src='icons/clip.svg' alt='clip' />
        <textarea
            className={'panel__textarea'}
            required
        />
        <img
            className={'panel__clip'}
            src='icons/send.svg'
            alt='clip'
        />
    </div>
)

export const RightColumn = ({
    selectedChatId,
    authors = [],
    dateMeassages = [],
    chats = [],
    messages = []
}: TProps) => {
    const chatMessages = useMemo(() => getChatMessages(selectedChatId, chats, messages),
        [selectedChatId, chats, messages]
    )

    return (
        <div className={'rightColumn'}>
            <Messages
                authors={authors}
                chatMessages={chatMessages}
                dateMeassages={dateMeassages}
            />
            {renderPanel()}
        </div>
    )
};
