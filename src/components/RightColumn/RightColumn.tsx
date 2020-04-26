import * as React from 'react'

import './RightColumn.css'

interface IProps {
    chatId?: number,
    authors: object[],
    chats: object[],
    messages: object[]
};

const RightColumn: React.SFC<IProps> = (props: IProps) => {
    const {
        chatId,
        authors,
        chats,
        messages,
    } = props

    return (
        <div className={'chats'}>
            {chats.length > 0 && 
                <div>
                    Здесь будут данные чата {chatId}
                </div>
            }
        </div>
    )
};

RightColumn.defaultProps = {
    authors: [],
    chats: [],
    messages: []
};

export default RightColumn;