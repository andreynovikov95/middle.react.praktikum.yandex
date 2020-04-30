import React from 'react';
import { ChatList } from 'components/LeftColumn/ChatList/ChatList';
import {
  DataAuthors,
  DataDateMeassages,
  DataChats,
  DataMesseges
} from 'components/Chat/Chat.d'

import './LeftColumn.css'

interface IProps {
  selectedChatId: string,
  authors: DataAuthors,
  dateMeassages: DataDateMeassages,
  chats: DataChats,
  messages: DataMesseges,
  selectChat: Function
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
