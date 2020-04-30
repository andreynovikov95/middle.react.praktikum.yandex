import {
    DataAuthors,
    DataDateMeassages,
    DataChats,
    DataMesseges
  } from 'components/Chat/Chat.d'

export interface IProps {
    selectedChatId: string;
    authors: DataAuthors,
    dateMeassages: DataDateMeassages,
    chats: DataChats,
    messages: DataMesseges,
    selectChat: Function;
};

interface IChatList {
    author: string,
    chatId: string,
    date: string,
    chatName: string,
    lastMessage: string,
    icon: string
}

export type DataChatList = IChatList[];
