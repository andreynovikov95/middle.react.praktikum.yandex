import React from 'react';
import ChatBar from 'components/ChatBar/ChatBar';

import './ChatList.css'
import {
    chatList
} from './ChatList.mock.js'

function ChatList() {
  return (
    <div className="chatList">
      {chatList.map(({
                author,
                date,
                chatName,
                lastMessage,
                icon
            }) => {

            return (
                <ChatBar
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
