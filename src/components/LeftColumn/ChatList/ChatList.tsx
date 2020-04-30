import React, { useMemo } from 'react';
import { ChatBar } from 'components/LeftColumn/ChatList/ChatBar/ChatBar';

import './ChatList.css'
import {
    getChatList
} from './ChatList.mock'
import {
  IProps
} from './ChatList.d'

// TODO Вопрос: нужно ли указывать значения по умолчанию
// для массивов, объектов и функций? какая реальная польза?
// Ведь можно обратиться к полю, и выйдет ошибка,
// а функция не отработает, там где должна (но и не поломает приложение на проде)

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
