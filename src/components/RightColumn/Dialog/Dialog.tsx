import * as React from 'react'

import DateMessages from './DateMessages/DateMessages'

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