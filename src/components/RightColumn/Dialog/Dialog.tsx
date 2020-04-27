import React from 'react'

import DateMessages from './Messages/Messages'

import './Dialog.css'

interface IProps {
    authors: object[],
    chatMessages: object[],
    dateMeassages: object[]
};

const Dialog: React.SFC<IProps> = (props: IProps) => {
    const {
        authors,
        chatMessages,
        dateMeassages
    } = props

    return (
        <div className={'dialog'}>
            <DateMessages
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

export default Dialog;