import React from 'react';
import ChatList from 'components/ChatList/ChatList';

import './LeftColumn.css'

interface IProps {
  chatId?: number,
  dates: object[],
  selectChat: any
};


const LeftColumn: React.SFC<IProps> = (props: IProps) => {
  const {
    chatId,
    selectChat
  } = props

  return (
      <div className='leftColumn'>
        <ChatList
          chatId={chatId}
          selectChat={selectChat}
        />
      </div>
  );
}

LeftColumn.defaultProps = {
  dates: [],
  selectChat: () => {}
};

export default LeftColumn;
