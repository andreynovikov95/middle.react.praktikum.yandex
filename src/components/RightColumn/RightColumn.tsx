import React, {
    PureComponent,
    ChangeEvent,
    RefObject,
    createRef,
    KeyboardEvent
} from 'react'
import shortid from 'shortid'
import {
    Switch,
    Route
} from 'react-router-dom'
import {
    THocWithChatIdProps
} from 'utils/hoc/withChatId'

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
    authors: TDataAuthors,
    chats: TDataChats,
    messages: TDataChatsMesseges,
    sendMessage: TSendFuntion
};

type TState = {
    textareaValue: string
};

// TODO add draft, delete and edit
export class RightColumn extends PureComponent<TProps & THocWithChatIdProps, TState> {
    public textareaRef: RefObject<HTMLTextAreaElement>;

    constructor(props: TProps & THocWithChatIdProps) {
        super(props);
        this.textareaRef = createRef();
    }

    public state = {
        textareaValue: ''
    } 

    public componentDidMount() {
        this.textareaRef.current?.focus();
    }

    public componentDidUpdate(prevProps: TProps & THocWithChatIdProps) {
        if (this.props.selectedChatId !== prevProps.selectedChatId) {
            this.handleResetTextareaValue()
        }
    }

    handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        this.setState({
            textareaValue: event.target.value
        })
    };

    handleSendingMessage = (chatMessages: TDataChatMesseges, chatIndex: number): () => void => (): void => {
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
                message: textareaValue.replace(/(\r\n|\n|\r)/gm, '<br>'),
                time: `${nowDate.getHours()}:${nowDate.getMinutes()}:${nowDate.getSeconds()}`
            }, chatMessages, chatIndex)

            this.handleResetTextareaValue();
        }
    }

    handleResetTextareaValue = () => {
        this.setState({
            textareaValue: ''
        })
        this.textareaRef.current?.focus();
    }

    handleKeyDown = (
        chatMessages: TDataChatMesseges,
        chatIndex: number
    ): (event: KeyboardEvent<HTMLTextAreaElement>) => void => (
        event: KeyboardEvent<HTMLTextAreaElement>
    ) => {
        const {
            key,
            shiftKey
        } = event

        if (key === 'Enter' && !shiftKey) {
            this.handleSendingMessage(chatMessages, chatIndex)()
        }
    }

    getIndexChatMessage = (
        selectedChatId: string,
        chats: TDataChats = []
    ) : number => chats.findIndex(
        ({ chatId }: {
            chatId: string
        }) => chatId === selectedChatId
    );
    
    getChatMessages = (
        chatIndex: number,
        chats: TDataChats = [],
        messages: TDataChatsMesseges = []
    ) : TDataChatMesseges => {
        let selectedChat
        if (chatIndex) {
            selectedChat = chats[chatIndex]
       }
    
        if (selectedChat) {
            return messages[selectedChat.messagesId]
        } else {
             return []
        }
    };

    renderPanel = (
        chatMessages: TDataChatMesseges,
        chatIndex: number
    ) => (
        <div className={'panel'}>
            <img
                src='/icons/clip.svg'
                alt='clip'
            />
            <textarea
                className={'panel__textarea'}
                ref={this.textareaRef} 
                placeholder='Write a message...'
                value={this.state.textareaValue}
                onChange={this.handleChange}
                onKeyDown={this.handleKeyDown(chatMessages, chatIndex)}
            />
            <img
                className={'panel__send'}
                src='/icons/send.svg'
                alt='send button'
                onClick={this.handleSendingMessage(chatMessages, chatIndex)}
            />
        </div>
    )

    public render() {
        const {
            authors = [],
            chats = [],
            messages = [],
            selectedChatId
        } = this.props
        // TODO вынести в контейнер
        const chatIndex: number = this.getIndexChatMessage(selectedChatId, chats)
        const chatMessages: TDataChatMesseges = this.getChatMessages(chatIndex, chats, messages)

        return (
            <main className={'rightColumn'}>
                <Switch>
                    <Route path='/chat' render={(props) => (
                        <Messages
                            {...props}
                            authors={authors}
                            chatMessages={chatMessages}
                        />
                    )}/>
                </Switch>
                {this.renderPanel(chatMessages, chatIndex)}
            </main>
        )
    }
}