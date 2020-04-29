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


export const LeftColumn = ({
    selectedChatId,
    authors,
    dateMeassages,
    chats,
    messages,
    selectChat
}: IProps) => (
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
