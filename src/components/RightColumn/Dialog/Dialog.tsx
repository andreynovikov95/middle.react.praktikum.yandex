import React from 'react'
import {
    DataAuthors,
    DataDateMeassages,
    IMessage
} from 'components/Chat/Chat'

import { Messages } from './Messages/Messages'

import './Dialog.css'

interface IProps {
    authors: DataAuthors,
    chatMessages: Array<IMessage>,
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
