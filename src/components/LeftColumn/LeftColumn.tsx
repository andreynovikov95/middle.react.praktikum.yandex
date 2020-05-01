import React from 'react';
import { ChatList } from 'components/LeftColumn/ChatList/ChatList';
import {
  TDataAuthors,
  TDataDateMessages,
  TDataChats,
  TDataChatsMesseges
} from 'components/Chat/Chat'

import './LeftColumn.css'

type TProps = {
  selectedChatId: string,
  authors: TDataAuthors,
  dateMeassages: TDataDateMessages,
  chats: TDataChats,
  messages: TDataChatsMesseges,
  selectChat: (id: string) => () => void
};


export const LeftColumn = ({
    selectedChatId,
    authors,
    dateMeassages,
    chats,
    messages,
    selectChat
}: TProps) => (
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
