import React, { PureComponent } from 'react';
import { LeftColumn } from 'components/LeftColumn/LeftColumn';
import { RightColumn } from 'components/RightColumn/RightColumn';

import './Chat.css'
import {
  AUTHORS,
  DATE_MESSAGES,
  CHATS,
  MESSAGES
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
 
export type TDataDateMessages = TDateMessage[][];

type TChat = {
  chatId: string,
  chatName: string,
  icon: string,
  messagesId: number
};

export type TDataChats = TChat[];

export type TMessage = {
  dateMessagesId: number,
  date: string
};

export type TDataChatMesseges = TMessage[];

export type TDataChatsMesseges = TDataChatMesseges[];

type TState = {
  selectedChatId: string,
  authors: TDataAuthors,
  dateMeassages: TDataDateMessages,
  chats: TDataChats,
  messages: TDataChatsMesseges
}

export class Chat extends PureComponent  {
  public state: TState = {
    selectedChatId: '',
    authors: [],
    dateMeassages: [],
    chats: [],
    messages: []
  }

   componentDidMount = () => {
     this.setState({
      authors: AUTHORS,
      dateMeassages: DATE_MESSAGES,
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

  public render() {
    const {
      selectedChatId,
      authors,
      dateMeassages,
      chats,
      messages
    } = this.state

    return (
      <div className="chat">
        <LeftColumn
          selectedChatId={selectedChatId}
          authors={authors}
          dateMeassages={dateMeassages}
          chats={chats}
          messages={messages}
          selectChat={this.selectChat}
        />
        {selectedChatId && (
          <RightColumn
            selectedChatId={selectedChatId}
            authors={authors}
            chats={chats}
            messages={messages}
            dateMeassages={dateMeassages}
          />
        )}
      </div>
    );
  }
}
