import * as React from 'react'

import './RightColumn.css'

interface IProps {
    chatId?: number,
    chats: object[];
};

const RightColumn: React.SFC<IProps> = (props: IProps) => {
    const {
        chatId,
        chats,
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
    chats: []
};

export default RightColumn;