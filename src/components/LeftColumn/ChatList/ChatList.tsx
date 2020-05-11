import React, { useMemo } from 'react';
import {
  withRouter
} from 'react-router-dom';
import { withChatId } from 'utils/hoc/withChatId'
import { ChatBar } from 'components/LeftColumn/ChatList/ChatBar/ChatBar';
import {
  TDataAuthors,
  TDataChats,
  TDataChatMesseges,
  TDataChatsMesseges
} from 'components/Chat/Chat'

import './ChatList.css'

export type TProps = {
  authors: TDataAuthors,
  chats: TDataChats,
  messages: TDataChatsMesseges
};

type TChatList = {
  author: string,
  chatId: string,
  date: number,
  chatName: string,
  lastMessage: string,
  icon: string
}

export type DataChatList = TChatList[];

// TODO Вопрос: Думал про {chatId: [message1, message2]},
// но проблема в том, что у меня не БД, и я вручную проставляю айдишники
// чтобы не следить за этим, использую shortid.generate()
// Вот это плохо себе представляю  Record<chatId, Maessage[]> можно пример? 
const prepareChatList = (
  chats: TDataChats,
  messages: TDataChatsMesseges,
  authors: TDataAuthors
) : DataChatList => chats
      .map(({
          chatId,
          messagesId,
          chatName = 'Group chat',
          icon = 'react'
      }) => {
              const chatMessages: TDataChatMesseges = messages[messagesId]
              const {
                  dateMessages = [],
                  date
              } = chatMessages[chatMessages.length - 1]
              const {
                  authorId = 0,
                  message = 'tas odio. Ut sit amet...'
              } = dateMessages[dateMessages.length - 1]
              const author = authors[authorId].name || 'Anonymous'

              return ({
                  author,
                  chatId,
                  date,
                  chatName,
                  lastMessage: message,
                  icon
          })
      })
      .sort((a, b) => {
        return b.date - a.date
      })

const WithChatIdChatBar = withRouter(withChatId(ChatBar))

export const ChatList = ({
  authors = [],
  chats = [],
  messages = []
}: TProps) => {
  const chatList = useMemo(() => prepareChatList(chats, messages, authors),
    [chats, messages, authors]
  )

  return (
    <ul className="chatList">
      {chatList
        .map(({
                author,
                chatId,
                date,
                chatName,
                lastMessage,
                icon
            }) => (
                <WithChatIdChatBar
                    selectedChatId=''
                    key={chatId}
                    chatId={chatId}
                    author={author}
                    date={date}
                    chatName={chatName}
                    lastMessage={lastMessage}
                    icon={icon}
                />
            )
        )}
    </ul>
  );
}
