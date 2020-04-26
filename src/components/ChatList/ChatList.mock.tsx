const date = new Date()
const day = date.getDate()
const month = date.getMonth()
const year = date.getFullYear()

const MAX_YEAR = 2019

const getRandomDate = (maxRange: number, minRange = 1) => {
    return minRange + Math.round(Math.random() * (maxRange - minRange))
}

const getDate = () => `${getRandomDate(day)}/${getRandomDate(month)}/${getRandomDate(year, MAX_YEAR)}`

export const chatList = [
    {
        date: getDate(),
        author: 'The Shrek 2',
        chatName: 'Group Chat',
        lastMessage: 'tas odio. Ut sit amet...',
        icon: 'react' 
    },
    {
        date: getDate(),
        author: 'The Shrek 1',
        chatName: 'Group Chat',
        lastMessage: 'tas odio. Ut sit amet...',
        icon: 'react' 
    },
    {
        date: getDate(),
        author: 'The Shrek 1',
        chatName: 'Group Chat',
        lastMessage: 'tas odio. Ut sit amet...',
        icon: 'react' 
    },
    {
        date: getDate(),
        author: 'The Shrek 2',
        chatName: 'Group Chat',
        lastMessage: 'tas odio. Ut sit amet...',
        icon: 'react' 
    },
    {
        date: getDate(),
        author: 'The Shrek 2',
        chatName: 'Group Chat',
        lastMessage: 'tas odio. Ut sit amet...',
        icon: 'react' 
    },
    {
        date: getDate(),
        author: 'The Shrek 1',
        chatName: 'Group Chat',
        lastMessage: 'tas odio. Ut sit amet...',
        icon: 'react' 
    },
    {
        date: getDate(),
        author: 'Rick Dalton 1',
        chatName: 'Group Chat',
        lastMessage: 'tas odio. Ut sit amet...',
        icon: 'react' 
    },
    {
        date: getDate(),
        author: 'Rick Dalton 1',
        chatName: 'Group Chat',
        lastMessage: 'tas odio. Ut sit amet...',
        icon: 'react' 
    },
    {
        date: getDate(),
        author: 'Rick Dalton 2',
        chatName: 'Group Chat',
        lastMessage: 'tas odio. Ut sit amet...',
        icon: 'react' 
    },
    {
        date: getDate(),
        author: 'Rick Dalton 1',
        chatName: 'Group Chat',
        lastMessage: 'tas odio. Ut sit amet...',
        icon: 'react' 
    },
    {
        date: getDate(),
        author: 'Rick Dalton 1',
        chatName: 'Group Chat',
        lastMessage: 'tas odio. Ut sit amet...',
        icon: 'react' 
    }
]

export const convertDate = (date: string) => date
    .split('/')
    .reverse()
    .join('-')
