import React from 'react';
import ChatList from 'components/ChatList/ChatList';

import './LeftColumn.css'

interface IProps {
  chatId?: number,
  authors: object[],
  dateMeassages: object[],
  chats: object[],
  messages: object[],
  selectChat: any
};


const LeftColumn: React.SFC<IProps> = (props: IProps) => {
  const {
    chatId,
    authors,
    dateMeassages,
    chats,
    messages,
    selectChat
  } = props

  return (
      <div className='leftColumn'>
        <ChatList
          chatId={chatId}
          authors={authors}
          dateMeassages={dateMeassages}
          chats={chats}
          messages={messages}
          selectChat={selectChat}
        />
      </div>
  );
}

LeftColumn.defaultProps = {
  authors: [],
  dateMeassages: [],
  chats: [],
  messages: [],
  selectChat: () => {}
};

export default LeftColumn;
