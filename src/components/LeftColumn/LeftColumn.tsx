import React from 'react';
import ChatList from 'components/ChatList/ChatList';

import './LeftColumn.css'

interface IProps {
  chatId?: number,
  authors: object[],
  chats: object[],
  messages: object[],
  selectChat: any
};


const LeftColumn: React.SFC<IProps> = (props: IProps) => {
  const {
    chatId,
    authors,
    chats,
    messages,
    selectChat
  } = props

  return (
      <div className='leftColumn'>
        <ChatList
          chatId={chatId}
          authors={authors}
          chats={chats}
          messages={messages}
          selectChat={selectChat}
        />
      </div>
  );
}

LeftColumn.defaultProps = {
  authors: [],
  chats: [],
  messages: [],
  selectChat: () => {}
};

export default LeftColumn;
