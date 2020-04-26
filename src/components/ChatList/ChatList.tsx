import React from 'react';
import ChatBar from 'components/ChatBar/ChatBar';

import './ChatList.css'
import {
    getChatList
} from './ChatList.mock'

interface IProps {
  chatId?: number;
  authors: object[],
  chats: object[],
  messages: object[],
  selectChat: any;
};

const ChatList: React.SFC<IProps> = (props: IProps) => {
  const {
    chatId,
    authors,
    chats,
    messages,
    selectChat
  } = props
  const chatList = getChatList(chats, messages, authors)

  return (
    <div className="chatList">
      {chatList
        .map(({
                author,
                date,
                chatName,
                lastMessage,
                icon
            }, index) => {

            return (
                <ChatBar
                    key={index}
                    id={index}
                    chatId={chatId}
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
