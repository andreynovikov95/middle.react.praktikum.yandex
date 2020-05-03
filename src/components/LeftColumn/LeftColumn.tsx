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
  messages: TDataChatsMesseges,
  selectChat: (id: string) => () => void
};


export const LeftColumn = ({
    selectedChatId,
    authors,
    chats,
    messages,
    selectChat
}: TProps) => (
    <div className='leftColumn'>
      <ChatList
        selectedChatId={selectedChatId}
        authors={authors}
        chats={chats}
        messages={messages}
        selectChat={selectChat}
      />
    </div>
);
