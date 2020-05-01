import React, { useMemo } from 'react'

import { Dialog } from './Dialog/Dialog'

import './RightColumn.css'
import {
    getChatMessages
} from './RightColumn.mock'
import {
    TDataAuthors,
    TDataDateMessages,
    TDataChats,
    TDataChatsMesseges
} from 'components/Chat/Chat'

type TProps = {
    selectedChatId: string,
    authors: TDataAuthors,
    dateMeassages: TDataDateMessages,
    chats: TDataChats,
    messages: TDataChatsMesseges
};

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
        <div className={'chats'}>
            {chatMessages.length > 0 && 
                <Dialog
                    authors={authors}
                    dateMeassages={dateMeassages}
                    chatMessages={chatMessages}
                />
            }
        </div>
    )
};
