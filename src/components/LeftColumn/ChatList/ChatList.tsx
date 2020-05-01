import React, { useMemo } from 'react';
import { ChatBar } from 'components/LeftColumn/ChatList/ChatBar/ChatBar';
import {
  TDataAuthors,
  TDataChats,
  TDataChatMesseges,
  TDataChatsMesseges,
  TDataDateMessages
} from 'components/Chat/Chat'

import './ChatList.css'

export type TProps = {
  selectedChatId: string;
  authors: TDataAuthors,
  chats: TDataChats,
  dateMeassages: TDataDateMessages,
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

// TODO use unix timestamp for date
const convertDate = (date: string): string => date
  .split('/')
  .reverse()
  .join('-')

const prepareChatList = (
  chats: TDataChats,
  messages: TDataChatsMesseges,
  authors: TDataAuthors,
  dateMeassages: TDataDateMessages
) : DataChatList => chats
      .map(({
          chatId,
          messagesId,
          chatName = 'Group chat',
          icon = 'react'
      }) => {
              const chatMessages: TDataChatMesseges = messages[messagesId]
              const {
                  dateMessagesId = 0,
                  date = '18/3/2020'
              } = chatMessages[chatMessages.length - 1]
              const lastDateMeassages = dateMeassages[dateMessagesId]
              const {
                  authorId = 0,
                  message = 'tas odio. Ut sit amet...'
              } = lastDateMeassages[lastDateMeassages.length - 1]
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
          const dateA = convertDate(a.date)
          const dateB = convertDate(b.date)

          return Date.parse(dateB) - Date.parse(dateA)
      })

export const ChatList = ({
  selectedChatId,
  authors = [],
  dateMeassages = [],
  chats = [],
  messages = [],
  selectChat
}: TProps) => {
  const chatList = useMemo(() => prepareChatList(chats, messages, authors, dateMeassages),
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
