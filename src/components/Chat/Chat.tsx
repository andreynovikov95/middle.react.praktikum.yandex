import React from 'react';
import { LeftColumn } from 'components/LeftColumn/LeftColumn';
import { RightColumn } from 'components/RightColumn/RightColumn';

import './Chat.css'
import {
  AUTHORS,
  DATE_MESSAGES,
  CHATS,
  MESSAGES
} from './Chat.mock'
import {
  DataAuthors,
  DataDateMeassages,
  DataChats,
  DataMesseges
} from './Chat.d'

interface IProps {
  authors: DataAuthors;
  dateMeassages: DataDateMeassages;
  chats: DataChats;
  messages: DataMesseges;
}

interface IState {
  selectedChatId: string;
}

export class Chat extends React.Component<IProps, IState>  {
  public static defaultProps: IProps = {
    authors: AUTHORS,
    dateMeassages: DATE_MESSAGES,
    chats: CHATS,
    messages: MESSAGES
  };

  public state: IState = {
    selectedChatId: ''
  }

  public selectChat = (id: string): Function => (id: string): void => {
    if (this.state.selectedChatId !== id) {
      this.setState({ selectedChatId: id })
    }
  }

  public render() {
    const {
      authors,
      dateMeassages,
      chats,
      messages
    } = this.props
    const {
      selectedChatId
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
