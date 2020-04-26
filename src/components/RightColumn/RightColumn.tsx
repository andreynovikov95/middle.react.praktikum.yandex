import * as React from 'react'

import './RightColumn.css'

interface IProps {
    chatId?: number,
    dates: object[];
};

const RightColumn: React.SFC<IProps> = (props: IProps) => {
    const {
        chatId,
        dates,
    } = props

    return (
        <div className={'dates'}>
            {dates.length > 0 && 
                <div>
                    Здесь будут данные чата {chatId}
                </div>
            }
        </div>
    )
};

RightColumn.defaultProps = {
    dates: []
};

export default RightColumn;