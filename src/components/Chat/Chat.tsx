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
  chatId?: number;
}

class Chat extends React.Component<IProps, IState>  {
  public static defaultProps: Partial<IProps> = {
    authors: AUTHORS,
    dateMeassages: DATE_MESSAGES,
    chats: CHATS,
    messages: MESSAGES
  };

  public state: IState = {
      chatId: undefined
  }

  public selectChat = (id: number) => () => {
    if (this.state.chatId !== id) {
      this.setState({ chatId: id })
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
      chatId
    } = this.state

    return (
      <div className="chat">
        <LeftColumn
          chatId={chatId}
          authors={authors}
          dateMeassages={dateMeassages}
          chats={chats}
          messages={messages}
          selectChat={this.selectChat}
        />
        {typeof this.state.chatId === 'number' && (
          <RightColumn
            chatId={chatId}
            authors={authors}
            chats={chats}
            messages={messages}
          />
        )}
      </div>
    );
  }
}

export default Chat;
