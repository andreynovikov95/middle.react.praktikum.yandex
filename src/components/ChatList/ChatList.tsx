import React from 'react';
import ChatBar from 'components/ChatBar/ChatBar';

import './ChatList.css'
import {
    chatList,
    convertDate
} from './ChatList.mock'

interface IProps {
  chatId?: number;
  selectChat: any;
};

const ChatList: React.SFC<IProps> = (props: IProps) => {
  const {
    chatId,
    selectChat
  } = props

  return (
    <div className="chatList">
      {chatList
        .sort((a, b) => {
            const dateA = convertDate(a.date)
            const dateB = convertDate(b.date)

            return Date.parse(dateB) - Date.parse(dateA)
        })
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

export default ChatList;
