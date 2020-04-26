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

export const messages = [
    {
        date: getDate(),
        authorId: 1,
        lastMessage: 'tas odio. Ut sit amet...'
    },
    {
        date: getDate(),
        authorId: 0,
        lastMessage: 'tas odio. Ut sit amet...',
    },
    {
        date: getDate(),
        authorId: 0,
        lastMessage: 'tas odio. Ut sit amet...',
    },
    {
        date: getDate(),
        authorId: 1,
        lastMessage: 'tas odio. Ut sit amet...',
    },
    {
        date: getDate(),
        authorId: 1,
        lastMessage: 'tas odio. Ut sit amet...',
    },
    {
        date: getDate(),
        authorId: 1,
        lastMessage: 'tas odio. Ut sit amet...',
    },
    {
        date: getDate(),
        authorId: 2,
        lastMessage: 'tas odio. Ut sit amet...',
    },
    {
        date: getDate(),
        authorId: 2,
        lastMessage: 'tas odio. Ut sit amet...',
    },
    {
        date: getDate(),
        authorId: 3,
        lastMessage: 'tas odio. Ut sit amet...',
    },
    {
        date: getDate(),
        authorId: 2,
        lastMessage: 'tas odio. Ut sit amet...',
    },
    {
        date: getDate(),
        authorId: 2,
        lastMessage: 'tas odio. Ut sit amet...',
    }
]


export const authors = [
    {
        name: 'The Shrek 1',
        avatar: '/images/shrek1.png'
    },
    {
        name: 'The Shrek 2',
        avatar: '/images/shrek2.png'
    },
    {
        name: 'Rick Dalton 1',
        avatar: '/images/RickDalton1.png'
    },
    {
        name: 'Rick Dalton 2',
        avatar: '/images/RickDalton2.png'
    }
]