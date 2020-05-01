import {
    DataAuthors,
    DataDateMeassages,
    DataChats,
    DataMesseges,
    IMessage
} from 'components/Chat/Chat'

import {
    DataChatList
} from './ChatList'

const convertDate = (date: string): string => date
    .split('/')
    .reverse()
    .join('-')

export const getChatList = (
    chats: DataChats,
    messages: DataMesseges,
    authors: DataAuthors,
    dateMeassages: DataDateMeassages
) : DataChatList => chats
        .map(({
            chatId,
            messagesId,
            chatName = 'Group chat',
            icon = 'react'
        }) => {
                const chatMessages: Array<IMessage> = messages[messagesId]
                const {
                    dateMessagesId = 0,
                    date = '18/3/2020'
                } = chatMessages[chatMessages.length - 1]
                const lastDateMeassages = dateMeassages[dateMessagesId]
                const {
                    authorId = 0,
                    message = 'tas odio. Ut sit amet...'
                } = lastDateMeassages[lastDateMeassages.length - 1]
                const author = authors[authorId].name || 'Anonymous'

                return ({
                    author,
                    chatId,
                    date,
                    chatName,
                    lastMessage: message,
                    icon
            })
        })
        .sort((a, b) => {
            const dateA = convertDate(a.date)
            const dateB = convertDate(b.date)

            return Date.parse(dateB) - Date.parse(dateA)
        })
