import React from 'react'
import {
    DataAuthors,
    DataDateMeassages,
    DataChats
} from 'components/Chat/Chat.d'

import { Messages } from './Messages/Messages'

import './Dialog.css'

interface IProps {
    authors: DataAuthors,
    chatMessages: DataChats,
    dateMeassages: DataDateMeassages
};

export const Dialog = ({
    authors = [],
    chatMessages = [],
    dateMeassages = []
}: IProps) => (
    <div className={'dialog'}>
        <Messages
            authors={authors}
            chatMessages={chatMessages}
            dateMeassages={dateMeassages}
        />
    </div>
);
