import React from 'react'

import { Messages } from './Messages/Messages'

import './Dialog.css'

interface IProps {
    authors: object[],
    chatMessages: object[],
    dateMeassages: object[]
};

export const Dialog: React.SFC<IProps> = (props: IProps) => {
    const {
        authors,
        chatMessages,
        dateMeassages
    } = props

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

Dialog.defaultProps = {
    authors: [],
    chatMessages: [],
    dateMeassages: []
};
