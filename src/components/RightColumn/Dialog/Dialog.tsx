import React from 'react'

import { Messages } from './Messages/Messages'

import './Dialog.css'

interface IProps {
    authors: object[],
    chatMessages: object[],
    dateMeassages: object[]
};

export const Dialog = ({
    authors = [],
    chatMessages = [],
    dateMeassages = []
}: IProps) => {
    return (
        <div className={'dialog'}>
            <Messages
                authors={authors}
                chatMessages={chatMessages}
                dateMeassages={dateMeassages}
            />
        </div>
    )
};
