import React from 'react';
import LeftColumn from 'components/LeftColumn/LeftColumn';
import RightColumn from 'components/RightColumn/RightColumn';

import './Chat.css'
import {
  DATES
} from './Chat.mock'

interface IProps {
  dates: object[];
}

interface IState {
  chatId?: number;
}

class Chat extends React.Component<IProps, IState>  {
  public static defaultProps: Partial<IProps> = {
    dates: DATES
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
      dates
    } = this.props
    const {
      chatId
    } = this.state

    return (
      <div className="chat">
        <LeftColumn
          chatId={chatId}
          dates={dates}
          selectChat={this.selectChat}
        />
        {typeof this.state.chatId === 'number' && (
          <RightColumn
            chatId={chatId}
            dates={dates}
          />
        )}
      </div>
    );
  }
}

export default Chat;
