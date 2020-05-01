import React, { useMemo } from 'react';
import { ChatBar } from 'components/LeftColumn/ChatList/ChatBar/ChatBar';
import {
  TDataAuthors,
  TDataDateMessages,
  TDataChats,
  TDataChatsMesseges
} from 'components/Chat/Chat'

import './ChatList.css'
import {
    getChatList
} from './ChatList.mock'

export type TProps = {
  selectedChatId: string;
  authors: TDataAuthors,
  dateMeassages: TDataDateMessages,
  chats: TDataChats,
  messages: TDataChatsMesseges,
  selectChat: (id: string) => () => void
};

type TChatList = {
  author: string,
  chatId: string,
  date: string,
  chatName: string,
  lastMessage: string,
  icon: string
}

export type DataChatList = TChatList[];

export const ChatList = ({
  selectedChatId,
  authors = [],
  dateMeassages = [],
  chats = [],
  messages = [],
  selectChat
}: TProps) => {
  const chatList = useMemo(() => getChatList(chats, messages, authors, dateMeassages),
    [chats, messages, authors, dateMeassages]
  )

  return (
    <div className="chatList">
      {chatList
        .map(({
                author,
                chatId,
                date,
                chatName,
                lastMessage,
                icon
            }) => (
                <ChatBar
                    key={chatId}
                    chatId={chatId}
                    selectedChatId={selectedChatId}
                    author={author}
                    date={date}
                    chatName={chatName}
                    lastMessage={lastMessage}
                    icon={icon}
                    selectChat={selectChat}
                />
            )
        )}
    </div>
  );
}
