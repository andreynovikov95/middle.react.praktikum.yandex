import {
    DataChats,
    DataMesseges
} from 'components/Chat/Chat.d'

// TODO getChatMessages подсвечивается в IDEA,
// но почему
export const getChatMessages = (
    selectedChatId?: string,
    chats: DataChats = [],
    messages: DataMesseges = []
) : DataChats => {
    let selectedChat = []
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
}