import React from 'react';
import { ChatList } from 'components/LeftColumn/ChatList/ChatList';
import {
  TDataAuthors,
  TDataChats,
  TDataChatsMesseges
} from 'components/Chat/Chat'

import './LeftColumn.css'

type TProps = {
  selectedChatId: string,
  authors: TDataAuthors,
  chats: TDataChats,
  messages: TDataChatsMesseges
};


export const LeftColumn = ({
    selectedChatId,
    authors,
    chats,
    messages
}: TProps) => (
    <header className='leftColumn'>
      <ChatList
        selectedChatId={selectedChatId}
        authors={authors}
        chats={chats}
        messages={messages}
      />
    </header>
);
