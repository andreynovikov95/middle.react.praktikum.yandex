import React from 'react'
import {
    TDataAuthors,
    TDataChatMesseges,
    TDataDateMessages
} from 'components/Chat/Chat'

import { Messages } from './Messages/Messages'

import './Dialog.css'

type TProps = {
    authors: TDataAuthors,
    chatMessages: TDataChatMesseges,
    dateMeassages: TDataDateMessages
};

export const Dialog = ({
    authors = [],
    chatMessages = [],
    dateMeassages = []
}: TProps) => (
    <div className={'dialog'}>
        <Messages
            authors={authors}
            chatMessages={chatMessages}
            dateMeassages={dateMeassages}
        />
    </div>
);
