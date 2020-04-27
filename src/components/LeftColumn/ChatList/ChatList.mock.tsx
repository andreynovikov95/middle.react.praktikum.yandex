const convertDate = (date: string) => date
    .split('/')
    .reverse()
    .join('-')

export const getChatList = (chats: Array<any>, messages: Array<any>, authors: Array<any>, dateMeassages: Array<any>) => {
    return chats
        .map(({
            chatId,
            messagesId,
            chatName,
            icon
        }) => {
                const chatMessages: Array<any> = messages[messagesId]
                const {
                    dateMessagesId,
                    date
                } = chatMessages[chatMessages.length - 1]
                const lastDateMeassages = dateMeassages[dateMessagesId]
                const {
                    authorId,
                    message
                } = lastDateMeassages[lastDateMeassages.length - 1]
                const author = authors[authorId].name

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
}
