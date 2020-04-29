import React, { useMemo } from 'react'

import { Dialog } from './Dialog/Dialog'

import './RightColumn.css'
import {
    getChatMessages
} from './RightColumn.mock'

interface IProps {
    selectedChatId: string,
    authors: object[],
    dateMeassages: object[],
    chats: object[],
    messages: object[]
};

export const RightColumn: React.SFC<IProps> = (props: IProps) => {
    const {
        selectedChatId,
        authors,
        dateMeassages,
        chats,
        messages
    } = props
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

RightColumn.defaultProps = {
    authors: [],
    dateMeassages: [],
    chats: [],
    messages: []
};
