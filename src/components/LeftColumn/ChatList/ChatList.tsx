import React from 'react';
import ChatBar from 'components/LeftColumn/ChatList/ChatBar/ChatBar';

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

const ChatList: React.SFC<IProps> = (props: IProps) => {
  const {
    selectedChatId,
    authors,
    dateMeassages,
    chats,
    messages,
    selectChat
  } = props
  const chatList = getChatList(chats, messages, authors, dateMeassages)

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

ChatList.defaultProps = {
  authors: [],
  chats: [],
  messages: [],
  selectChat: () => {}
};

export default ChatList;
