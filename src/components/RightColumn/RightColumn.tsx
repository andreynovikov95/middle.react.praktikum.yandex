import React, { Component } from 'react'
import shortid from 'shortid'

import { Messages } from './Messages/Messages'

import './RightColumn.css'
import {
    TDataAuthors,
    TDataChats,
    TDataChatMesseges,
    TDataChatsMesseges,
    TDateMessage
} from 'components/Chat/Chat'

export type TSendFuntion = (
    message: TDateMessage,
    chateMeassages: TDataChatMesseges,
    chatIndex: number
) => void

type TProps = {
    selectedChatId: string,
    authors: TDataAuthors,
    chats: TDataChats,
    messages: TDataChatsMesseges,
    sendMessage: TSendFuntion
};

type TState = {
    textareaValue: string
}

const getIndexChatMessage = (
    selectedChatId: string,
    chats: TDataChats = []
) : number => chats.findIndex(
    ({ chatId }: {
        chatId: string
    }) => chatId === selectedChatId
);

const getChatMessages = (
    selectedChatId: string,
    chats: TDataChats = [],
    messages: TDataChatsMesseges = []
) : TDataChatMesseges => {
    let selectedChat
    if (selectedChatId) {
        selectedChat = chats.find(
            ({ chatId }: {
                chatId: string
            }) => chatId === selectedChatId
        )
   }

    if (selectedChat) {
        return messages[selectedChat.messagesId]
    } else {
         return []
    }
};

//TODO add draft
export class RightColumn extends Component<TProps, TState> {
    public textareaRef: React.RefObject<HTMLTextAreaElement>;

    constructor(props: TProps) {
        super(props);
        this.textareaRef = React.createRef();
    }

    public state = {
        textareaValue: ''
    } 

    public componentDidMount() {
        this.textareaRef.current?.focus();
    }

    public componentDidUpdate(prevProps: TProps) {
        if (this.props.selectedChatId !== prevProps.selectedChatId) {
            this.handleResetTextareaValue()
        }
    }

    handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        this.setState({
            textareaValue: event.target.value
        })
    };

    handleClick = (chatMessages: TDataChatMesseges, chatIndex: number): () => void => (): void => {
        const {
            sendMessage
        } = this.props
        const {
            textareaValue
        } = this.state
        if (textareaValue.trim().length > 0) {
            const nowDate = new Date()
            sendMessage({
                authorId: 3,
                messageId: shortid.generate(),
                message: textareaValue,
                time: `${nowDate.getHours()}:${nowDate.getMinutes()}:${nowDate.getSeconds()}`
            }, chatMessages, chatIndex)

            this.handleResetTextareaValue()
            this.textareaRef.current?.focus();
        }
    }

    handleResetTextareaValue = () => {
        this.setState({
            textareaValue: ''
        })
        this.textareaRef.current?.focus();
    }

    renderPanel = (
        chatMessages: TDataChatMesseges,
        chatIndex: number
    ) => (
        <div className={'panel'}>
            <img src='icons/clip.svg' alt='clip' />
            <textarea
                className={'panel__textarea'}
                ref={this.textareaRef} 
                onChange={this.handleChange}
                placeholder='Write a message...'
                value={this.state.textareaValue}
            />
            <img
                className={'panel__clip'}
                src='icons/send.svg'
                alt='clip'
                onClick={this.handleClick(chatMessages, chatIndex)}
            />
        </div>
    )

    public render() {
        const {
            selectedChatId,
            authors = [],
            chats = [],
            messages = []
        } = this.props
        const chatMessages = getChatMessages(selectedChatId, chats, messages)
        const chatIndex = getIndexChatMessage(selectedChatId, chats)

        return (
            <div className={'rightColumn'}>
                <Messages
                    authors={authors}
                    chatMessages={chatMessages}
                />
                {this.renderPanel(chatMessages, chatIndex)}
            </div>
        )
    }
}