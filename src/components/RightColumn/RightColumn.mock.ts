import {
    TDataChats,
    TDataChatsMesseges,
    TDataChatMesseges
} from 'components/Chat/Chat'

export const getChatMessages = (
    selectedChatId?: string,
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
}