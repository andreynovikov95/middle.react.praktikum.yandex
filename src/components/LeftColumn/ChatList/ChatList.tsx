import React, { useMemo } from 'react';
import { ChatBar } from 'components/LeftColumn/ChatList/ChatBar/ChatBar';

import './ChatList.css'
import {
    getChatList
} from './ChatList.mock'

interface IProps {
  selectedChatId: string;
  authors: object[],
  dateMeassages: object[],
  chats: object[],
  messages: object[],
  selectChat: any;
};

// TODO Вопрос: нужно ли указывать значения по умолчания
// для массивов, объектов и функций? какая реальная польза?
// Ведь можно обратить к полю, и выйдет ошибка, а функция не отработает, там где должна

export const ChatList = ({
  selectedChatId,
  authors = [],
  dateMeassages = [],
  chats = [],
  messages = [],
  selectChat = () => {}
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
