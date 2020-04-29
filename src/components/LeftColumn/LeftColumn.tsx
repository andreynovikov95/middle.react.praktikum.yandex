import React from 'react';
import { ChatList } from 'components/LeftColumn/ChatList/ChatList';

import './LeftColumn.css'

interface IProps {
  selectedChatId: string,
  authors: object[],
  dateMeassages: object[],
  chats: object[],
  messages: object[],
  selectChat: any
};


export const LeftColumn: React.SFC<IProps> = (props: IProps) => {
  const {
    selectedChatId,
    authors,
    dateMeassages,
    chats,
    messages,
    selectChat
  } = props

  return (
      <div className='leftColumn'>
        <ChatList
          selectedChatId={selectedChatId}
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
