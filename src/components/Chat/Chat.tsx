import React, { PureComponent } from 'react';
import shortid from 'shortid'
import {
  Switch,
  Route
} from 'react-router-dom'

import { withChatId } from 'utils/hoc/withChatId'
import { EmptyChat } from 'components/EmptyChat/EmptyChat';
import { LeftColumn } from 'components/LeftColumn/LeftColumn';
import { RightColumn } from 'components/RightColumn/RightColumn';

import './Chat.css'
import {
  AUTHORS,
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

type TChat = {
  chatId: string,
  chatName: string,
  icon: string,
  messagesId: number
};

export type TDataChats = TChat[];

export type TMessage = {
  dateMessagesId: string,
  date: number,
  dateMessages: TDateMessage[]
};

export type TDataChatMesseges = TMessage[];

export type TDataChatsMesseges = TDataChatMesseges[];

type TState = {
  authors: TDataAuthors,
  chats: TDataChats,
  messages: TDataChatsMesseges,
}

const WithChatIdRightColumn = withChatId(RightColumn)

export class Chat extends PureComponent<{}, TState>   {
  public state = {
    authors: [],
    chats: [],
    messages: []
  }

   componentDidMount = () => {
     this.setState(prevState => ({
      authors: [...prevState.authors, ...AUTHORS],
      chats: [...prevState.chats, ...CHATS],
      messages: [...prevState.messages, ...MESSAGES]
    }))
  }

  public hanleSendMessage = (
    message: TDateMessage,
    chatMessages: TDataChatMesseges,
    chatIndex: number
  ): void => {
    let hasCurrentDate = false
    const currentDate = new Date();
    const date = this.getFormatDate(currentDate)
    const newChatMessages: TMessage[] = chatMessages.map((item: TMessage) => {
      const itemDate = new Date(item.date)
      const itemDateFormat = this.getFormatDate(itemDate)
      if (itemDateFormat === date) {
        item.dateMessages.push(message)

        hasCurrentDate = true
      }

      return item
    })

  if (!hasCurrentDate) {

    newChatMessages.push({
      dateMessagesId: shortid.generate(),
      date: Date.parse(date),
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

  getFormatDate = (date: Date) => `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`

  public render() {
    const {
      authors,
      chats,
      messages
    } = this.state

    return (
      <div className="chat">
        <LeftColumn
          authors={authors}
          chats={chats}
          messages={messages}
        />
        <Switch>
          <Route exact path='/' component={EmptyChat}/>
          <Route
            path='/chat'
            render={
              (props) => <WithChatIdRightColumn
                {...props}
                selectedChatId=''
                authors={authors}
                chats={chats}
                messages={messages}
                sendMessage={this.hanleSendMessage}
              />
            }/>
          />
        </Switch>
      </div>
    );
  }
}
