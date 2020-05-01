import {
    DataChats,
    DataMesseges,
    IMessage
} from 'components/Chat/Chat'

export const getChatMessages = (
    selectedChatId?: string,
    chats: DataChats = [],
    messages: DataMesseges = []
) : Array<IMessage> => {
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