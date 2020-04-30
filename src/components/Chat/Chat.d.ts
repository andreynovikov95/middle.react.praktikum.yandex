interface IAuthor {
    name: string,
    avatar: string
}

export type DataAuthors = IAuthor[];

export interface IDateMessage {
    authorId: number,
    messageId: string,
    message: string,
    time: string
};

export type DataDateMeassages = IDateMessage[][];

interface IChat  {
    chatId: string,
    chatName: string,
    icon: string,
    messagesId: number
 };

 export type DataChats = DataChat[];

interface IMessage {
    dateMessagesId: number,
    date: string
};

export type DataMesseges = IMessage[][];
