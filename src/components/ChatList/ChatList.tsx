import React from 'react';
import ChatBar from 'components/ChatBar/ChatBar';

import './ChatList.css'
import {
    chatList,
    convertDate
} from './ChatList.mock'


function ChatList() {
  return (
    <div className="chatList">
      {chatList
        .sort((a, b) => {
            const dateA = convertDate(a.date)
            const dateB = convertDate(b.date)

            return Date.parse(dateA) - Date.parse(dateB)
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
                    author={author}
                    date={date}
                    chatName={chatName}
                    lastMessage={lastMessage}
                    icon={icon}
                />
            )
        })}
    </div>
  );
}

export default ChatList;
