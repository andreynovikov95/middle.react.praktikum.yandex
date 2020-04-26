const convertDate = (date: string) => date
    .split('/')
    .reverse()
    .join('-')

export const getChatList = (chats: Array<any>, messages: Array<any>, authors: Array<any>) => {
    return chats
        .map(({
            messagesId,
            date,
            chatName,
            icon
        }) => {
                const chatMessages: Array<any> = messages[messagesId]
                const {
                    authorId,
                    message
                } = chatMessages[chatMessages.length - 1]
                const author = authors[authorId].name
                return ({
                    author,
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
