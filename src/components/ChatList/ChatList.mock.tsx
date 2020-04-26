const MAX_MONTH = 12
const MIN_YEAR = 2019

const date = new Date()
const day = date.getDate()
const month = date.getMonth() + 1
const year = date.getFullYear()

const getFebruary = (year: number) => year % 4 === 0
    ? 29
    : 28

const getMaxDay = (day: number, year: number) => {
    switch (day) {
        case 2:
            return getFebruary(year)

        case 4:
        case 6:
        case 9:
        case 11:
            return 30

        default:
            return 31
    }
}

const getRandomDate = (maxRange: number, minRange = 1) => minRange + Math.round(Math.random() * (maxRange - minRange))

const getRandomMonth = (randomYear: number) => randomYear === year
    ? getRandomDate(month)
    : getRandomDate(MAX_MONTH)

const getDate = () => {
    const randomYear = getRandomDate(year, MIN_YEAR)
    const randomMonth = getRandomMonth(randomYear)

    let maxDay = day
    if (randomMonth !== month && randomYear !== year) {
        maxDay = getMaxDay(randomMonth, randomYear)
    }

    return `${getRandomDate(maxDay)}/${randomMonth}/${randomYear}`
}

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
