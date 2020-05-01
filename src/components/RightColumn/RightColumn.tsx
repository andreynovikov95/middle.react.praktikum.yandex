import React, { useMemo } from 'react'

import { Dialog } from './Dialog/Dialog'

import './RightColumn.css'
import {
    getChatMessages
} from './RightColumn.mock'
import {
    DataAuthors,
    DataDateMeassages,
    DataChats,
    DataMesseges
} from 'components/Chat/Chat'

interface IProps {
    selectedChatId: string,
    authors: DataAuthors,
    dateMeassages: DataDateMeassages,
    chats: DataChats,
    messages: DataMesseges
};

export const RightColumn = ({
    selectedChatId,
    authors = [],
    dateMeassages = [],
    chats = [],
    messages = []
}: IProps) => {
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
