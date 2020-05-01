import React, { useMemo } from 'react';
import { ChatBar } from 'components/LeftColumn/ChatList/ChatBar/ChatBar';
import {
  DataAuthors,
  DataDateMeassages,
  DataChats,
  DataMesseges
} from 'components/Chat/Chat'

import './ChatList.css'
import {
    getChatList
} from './ChatList.mock'

export interface IProps {
  selectedChatId: string;
  authors: DataAuthors,
  dateMeassages: DataDateMeassages,
  chats: DataChats,
  messages: DataMesseges,
  selectChat: (id: string) => () => void;
};

interface IChatList {
  author: string,
  chatId: string,
  date: string,
  chatName: string,
  lastMessage: string,
  icon: string
}

export type DataChatList = IChatList[];

export const ChatList = ({
  selectedChatId,
  authors = [],
  dateMeassages = [],
  chats = [],
  messages = [],
  selectChat
}: IProps) => {
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
            }) => {

            return (
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
        })}
    </div>
  );
}
