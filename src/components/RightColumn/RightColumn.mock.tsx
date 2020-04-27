export const getChatMessages = (selectedChatId: string, chats: Array<any>, messages: Array<any>) => {
    const selectedChat = chats.find(({ chatId }: {
        chatId: string
     }) => chatId === selectedChatId)

    return messages[selectedChat.messagesId]
}