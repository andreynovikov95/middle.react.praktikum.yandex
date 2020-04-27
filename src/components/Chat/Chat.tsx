import React from 'react';
import LeftColumn from 'components/LeftColumn/LeftColumn';
import RightColumn from 'components/RightColumn/RightColumn';

import './Chat.css'
import {
  AUTHORS,
  DATE_MESSAGES,
  CHATS,
  MESSAGES
} from './Chat.mock'

interface IProps {
  authors: object[];
  dateMeassages: Array<any>;
  chats: object[];
  messages: object[];
}

interface IState {
  selectedChatId: string;
}

class Chat extends React.Component<IProps, IState>  {
  public static defaultProps: Partial<IProps> = {
    authors: AUTHORS,
    dateMeassages: DATE_MESSAGES,
    chats: CHATS,
    messages: MESSAGES
  };

  public state: IState = {
    selectedChatId: ''
  }

  public selectChat = (id: string) => () => {
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

export default Chat;
