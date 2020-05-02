import React, { PureComponent } from 'react';
import shortid from 'shortid'
import { LeftColumn } from 'components/LeftColumn/LeftColumn';
import { RightColumn } from 'components/RightColumn/RightColumn';

import './Chat.css'
import {
  AUTHORS,
  CHATS,
  MESSAGES,
  PLACEHOLDER_TEXT
} from './Chat.mock'

type TAuthor = {
  name: string,
  avatar: string
}

export type TDataAuthors = TAuthor[];

export type TDateMessage = {
  authorId: number,
  messageId: string,
  message: string,
  time: string
};

type TChat = {
  chatId: string,
  chatName: string,
  icon: string,
  messagesId: number
};

export type TDataChats = TChat[];

export type TMessage = {
  dateMessagesId: string,
  date: string,
  dateMessages: TDateMessage[]
};

export type TDataChatMesseges = TMessage[];

export type TDataChatsMesseges = TDataChatMesseges[];

type TState = {
  selectedChatId: string,
  authors: TDataAuthors,
  chats: TDataChats,
  messages: TDataChatsMesseges
}

export class Chat extends PureComponent<{}, TState>   {
  public state: TState = {
    selectedChatId: '',
    authors: [],
    chats: [],
    messages: []
  }

   componentDidMount = () => {
     this.setState({
      authors: AUTHORS,
      chats: CHATS,
      messages: MESSAGES
    })
  }

  public selectChat = (id: string): () => void => (): void => {
    if (this.state.selectedChatId === id) {
      this.setState({ selectedChatId: '' })
    } else {
      this.setState({ selectedChatId: id })
    }
  }

  public hanleSendMessage = (
    message: TDateMessage,
    chatMessages: TDataChatMesseges,
    chatIndex: number
  ): () => void => (): void => {
    let hasCurrentDate = false
    const newChatMessages = chatMessages.map((item) => {
      if (item.date === '02/05/2020') {
        item.dateMessages.push(message)

        hasCurrentDate = true
      }

      return item
    })

  if (!hasCurrentDate) {
    newChatMessages.push({
      dateMessagesId: shortid.generate(),
      date: '02/05/2020',
      dateMessages: [message]
    })

    return this.setState(prevState => ({
      messages: [
        ...prevState.messages,
        prevState.messages[chatIndex] = [...newChatMessages]
      ]}))
  }

  this.setState(prevState => ({
    messages: [
      ...prevState.messages,
      [...newChatMessages]
    ]}))
  }

  public render() {
    const {
      selectedChatId,
      authors,
      chats,
      messages
    } = this.state

    return (
      <div className="chat">
        <LeftColumn
          selectedChatId={selectedChatId}
          authors={authors}
          chats={chats}
          messages={messages}
          selectChat={this.selectChat}
        />
        {selectedChatId
         ? <RightColumn
            selectedChatId={selectedChatId}
            authors={authors}
            chats={chats}
            messages={messages}
            sendMessage={this.hanleSendMessage}
          />
          : <div className="chat__placeholder">
              <div className="chat__placeholder__text">
                {PLACEHOLDER_TEXT}
              </div>
            </div>
          }
      </div>
    );
  }
}
