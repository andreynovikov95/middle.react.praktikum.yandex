import shortid from 'shortid'
import { loremIpsum } from "lorem-ipsum";

export const CHATS = [
    {
        chatId: shortid.generate(),
        chatName: 'Group chat',
        messagesId: 0,
        icon: 'react'
    },
    {
        chatId: shortid.generate(),
        chatName: 'Group chat',
        messagesId: 1,
        icon: 'react'
    },
    {
        chatId: shortid.generate(),
        chatName: 'Group chat',
        messagesId: 2,
        icon: 'react'
    },
    {
        chatId: shortid.generate(),
        chatName: 'Group chat',
        messagesId: 3,
        icon: 'react'
    },
    {
        chatId: shortid.generate(),
        chatName: 'Group chat',
        messagesId: 4,
        icon: 'react'
    },
    {
        chatId: shortid.generate(),
        chatName: 'Group chat',
        messagesId: 5,
        icon: 'react'
    },
    {
        chatId: shortid.generate(),
        chatName: 'Group chat',
        messagesId: 6,
        icon: 'react'
    },
    {
        chatId: shortid.generate(),
        chatName: 'Group chat',
        messagesId: 7,
        icon: 'react'
    },
    {
        chatId: shortid.generate(),
        chatName: 'Group chat',
        messagesId: 8,
        icon: 'react'
    },
    {
        chatId: shortid.generate(),
        chatName: 'Group chat',
        messagesId: 9,
        icon: 'react'
    }
]

export const MESSAGES = [
    [
        {
            dateMessagesId: shortid.generate(),
            date: 1584144000000, // '14/3/2020'
            dateMessages: [
                {
                    authorId: 0,
                    messageId: shortid.generate(),
                    message: loremIpsum({ count: 3 }),
                    time: '23:40:06'
                },
                {
                    authorId: 1,
                    messageId: shortid.generate(),
                    message: loremIpsum({ count: 3 }),
                    time: '04:47:07'
                },
                {
                    authorId: 0,
                    messageId: shortid.generate(),
                    message: loremIpsum({ count: 3 }),
                    time: '04:47:07'
                },
                {
                    authorId: 1,
                    messageId: shortid.generate(),
                    message: loremIpsum({ count: 3 }),
                    time: '04:47:07'
                },
                {
                    authorId: 0,
                    messageId: shortid.generate(),
                    message: loremIpsum({ count: 3 }),
                    time: '04:47:07'
                }
            ],
        },
        {
            dateMessagesId: shortid.generate(),
            date: 1584230400000, //'15/3/2020'
            dateMessages:     [
                {
                    authorId: 1,
                    messageId: shortid.generate(),
                    message: loremIpsum({ count: 3 }),
                    time: '23:40:06'
                },
                {
                    authorId: 3,
                    messageId: shortid.generate(),
                    message: loremIpsum({ count: 3 }),
                    time: '04:47:07'
                },
                {
                    authorId: 1,
                    messageId: shortid.generate(),
                    message: loremIpsum({ count: 3 }),
                    time: '06:14:31'
                },
                {
                    authorId: 3,
                    messageId: shortid.generate(),
                    message: loremIpsum({ count: 3 }),
                    time: '06:49:32'
                },
                {
                    authorId: 1,
                    messageId: shortid.generate(),
                    message: loremIpsum({ count: 3 }),
                    time: '08:38:10'
                }
            ]
        }
    ],
    [
        {
            dateMessagesId: shortid.generate(),
            date: 1552435200000, // '13/3/2019'
            dateMessages: [
                {
                    authorId: 3,
                    messageId: shortid.generate(),
                    message: loremIpsum({ count: 3 }),
                    time: '23:40:06'
                },
                {
                    authorId: 2,
                    messageId: shortid.generate(),
                    message: loremIpsum({ count: 3 }),
                    time: '04:47:07'
                },
                {
                    authorId: 3,
                    messageId: shortid.generate(),
                    message: loremIpsum({ count: 3 }),
                    time: '04:47:07'
                },
                {
                    authorId: 2,
                    messageId: shortid.generate(),
                    message: loremIpsum({ count: 3 }),
                    time: '04:47:07'
                },
                {
                    authorId: 3,
                    messageId: shortid.generate(),
                    message: loremIpsum({ count: 3 }),
                    time: '04:47:07'
                }
            ]
        },
        {
            dateMessagesId: shortid.generate(),
            date: 1552780800000, // '17/3/2019'
            dateMessages:  [
                {
                    authorId: 3,
                    messageId: shortid.generate(),
                    message: loremIpsum({ count: 3 }),
                    time: '15:40:06'
                },
                {
                    authorId: 3,
                    messageId: shortid.generate(),
                    message: loremIpsum({ count: 3 }),
                    time: '16:40:06'
                },
                {
                    authorId: 3,
                    messageId: shortid.generate(),
                    message: loremIpsum({ count: 3 }),
                    time: '17:40:06'
                },
                {
                    authorId: 3,
                    messageId: shortid.generate(),
                    message: loremIpsum({ count: 3 }),
                    time: '18:40:06'
                },
                {
                    authorId: 3,
                    messageId: shortid.generate(),
                    message: loremIpsum({ count: 3 }),
                    time: '19:40:06'
                }
            ]
        }
    ],
    [
        {
            dateMessagesId: shortid.generate(),
            date: 1559865600000, // '7/6/2019'
            dateMessages:     [
                {
                    authorId: 2,
                    messageId: shortid.generate(),
                    message: loremIpsum({ count: 3 }),
                    time: '10:40:06'
                },
                {
                    authorId: 2,
                    messageId: shortid.generate(),
                    message: loremIpsum({ count: 3 }),
                    time: '11:40:06'
                },
                {
                    authorId: 2,
                    messageId: shortid.generate(),
                    message: loremIpsum({ count: 3 }),
                    time: '12:40:06'
                },
                {
                    authorId: 2,
                    messageId: shortid.generate(),
                    message: loremIpsum({ count: 3 }),
                    time: '13:40:06'
                },
                {
                    authorId: 2,
                    messageId: shortid.generate(),
                    message: loremIpsum({ count: 3 }),
                    time: '14:40:06'
                }
            ]
        },
        {
            dateMessagesId: shortid.generate(),
            date: 1579478400000, // '20/1/2020'
            dateMessages: [
                {
                    authorId: 1,
                    messageId: shortid.generate(),
                    message: loremIpsum({ count: 3 }),
                    time: '23:40:06'
                },
                {
                    authorId: 2,
                    messageId: shortid.generate(),
                    message: loremIpsum({ count: 3 }),
                    time: '04:47:07'
                },
                {
                    authorId: 1,
                    messageId: shortid.generate(),
                    message: loremIpsum({ count: 3 }),
                    time: '06:14:31'
                },
                {
                    authorId: 1,
                    messageId: shortid.generate(),
                    message: loremIpsum({ count: 3 }),
                    time: '06:49:32'
                },
                {
                    authorId: 2,
                    messageId: shortid.generate(),
                    message: loremIpsum({ count: 3 }),
                    time: '08:38:10'
                }
            ]
        }
    ],
    [
        {
            dateMessagesId: shortid.generate(),
            date: 1584403200000, // '17/3/2020'
            dateMessages:     [
                {
                    authorId: 0,
                    messageId: shortid.generate(),
                    message: loremIpsum({ count: 3 }),
                    time: '23:40:06'
                },
                {
                    authorId: 2,
                    messageId: shortid.generate(),
                    message: loremIpsum({ count: 3 }),
                    time: '04:47:07'
                },
                {
                    authorId: 0,
                    messageId: shortid.generate(),
                    message: loremIpsum({ count: 3 }),
                    time: '06:14:31'
                },
                {
                    authorId: 1,
                    messageId: shortid.generate(),
                    message: loremIpsum({ count: 3 }),
                    time: '06:49:32'
                },
                {
                    authorId: 0,
                    messageId: shortid.generate(),
                    message: loremIpsum({ count: 3 }),
                    time: '08:38:10'
                }
            ]
        },
        {
            dateMessagesId: shortid.generate(),
            date: 1584489600000, // '18/3/2020'
            dateMessages: [
                {
                    authorId: 0,
                    messageId: shortid.generate(),
                    message: loremIpsum({ count: 3 }),
                    time: '23:40:06'
                },
                {
                    authorId: 3,
                    messageId: shortid.generate(),
                    message: loremIpsum({ count: 3 }),
                    time: '04:47:07'
                },
                {
                    authorId: 0,
                    messageId: shortid.generate(),
                    message: loremIpsum({ count: 3 }),
                    time: '06:14:31'
                },
                {
                    authorId: 3,
                    messageId: shortid.generate(),
                    message: loremIpsum({ count: 3 }),
                    time: '06:49:32'
                },
                {
                    authorId: 3,
                    messageId: shortid.generate(),
                    message: loremIpsum({ count: 3 }),
                    time: '08:38:10'
                }
            ]
        }
    ],
    [
        {
            dateMessagesId: shortid.generate(),
            date: 1584403200000, // '17/3/2020'
            dateMessages: [
                {
                    authorId: 3,
                    messageId: shortid.generate(),
                    message: loremIpsum({ count: 3 }),
                    time: '23:40:06'
                },
                {
                    authorId: 2,
                    messageId: shortid.generate(),
                    message: loremIpsum({ count: 3 }),
                    time: '04:47:07'
                },
                {
                    authorId: 3,
                    messageId: shortid.generate(),
                    message: loremIpsum({ count: 3 }),
                    time: '04:47:07'
                },
                {
                    authorId: 2,
                    messageId: shortid.generate(),
                    message: loremIpsum({ count: 3 }),
                    time: '04:47:07'
                },
                {
                    authorId: 3,
                    messageId: shortid.generate(),
                    message: loremIpsum({ count: 3 }),
                    time: '04:47:07'
                }
            ]
        },
        {
            dateMessagesId: shortid.generate(),
            date: 1584576000000, // '19/3/2020'
            dateMessages: [
                {
                    authorId: 1,
                    messageId: shortid.generate(),
                    message: loremIpsum({ count: 3 }),
                    time: '23:40:06'
                },
                {
                    authorId: 2,
                    messageId: shortid.generate(),
                    message: loremIpsum({ count: 3 }),
                    time: '04:47:07'
                },
                {
                    authorId: 1,
                    messageId: shortid.generate(),
                    message: loremIpsum({ count: 3 }),
                    time: '06:14:31'
                },
                {
                    authorId: 1,
                    messageId: shortid.generate(),
                    message: loremIpsum({ count: 3 }),
                    time: '06:49:32'
                },
                {
                    authorId: 2,
                    messageId: shortid.generate(),
                    message: loremIpsum({ count: 3 }),
                    time: '08:38:10'
                }
            ]
        }
    ],
    [
        {
            dateMessagesId: shortid.generate(),
            date: 1559865600000, // '7/6/2019'
            dateMessages:  [
                {
                    authorId: 3,
                    messageId: shortid.generate(),
                    message: loremIpsum({ count: 3 }),
                    time: '15:40:06'
                },
                {
                    authorId: 3,
                    messageId: shortid.generate(),
                    message: loremIpsum({ count: 3 }),
                    time: '16:40:06'
                },
                {
                    authorId: 3,
                    messageId: shortid.generate(),
                    message: loremIpsum({ count: 3 }),
                    time: '17:40:06'
                },
                {
                    authorId: 3,
                    messageId: shortid.generate(),
                    message: loremIpsum({ count: 3 }),
                    time: '18:40:06'
                },
                {
                    authorId: 3,
                    messageId: shortid.generate(),
                    message: loremIpsum({ count: 3 }),
                    time: '19:40:06'
                }
            ]
        },
        {
            dateMessagesId: shortid.generate(),
            date: 1561075200000, // '21/6/2019'
            dateMessages: [
                {
                    authorId: 1,
                    messageId: shortid.generate(),
                    message: loremIpsum({ count: 3 }),
                    time: '23:40:06'
                },
                {
                    authorId: 2,
                    messageId: shortid.generate(),
                    message: loremIpsum({ count: 3 }),
                    time: '04:47:07'
                },
                {
                    authorId: 1,
                    messageId: shortid.generate(),
                    message: loremIpsum({ count: 3 }),
                    time: '06:14:31'
                },
                {
                    authorId: 1,
                    messageId: shortid.generate(),
                    message: loremIpsum({ count: 3 }),
                    time: '06:49:32'
                },
                {
                    authorId: 2,
                    messageId: shortid.generate(),
                    message: loremIpsum({ count: 3 }),
                    time: '08:38:10'
                }
            ]
        }
    ],
    [
        {
            dateMessagesId: shortid.generate(),
            date: 1557619200000, // '5/12/2019'
            dateMessages:     [
                {
                    authorId: 1,
                    messageId: shortid.generate(),
                    message: loremIpsum({ count: 3 }),
                    time: '22:40:06'
                },
                {
                    authorId: 1,
                    messageId: shortid.generate(),
                    message: loremIpsum({ count: 3 }),
                    time: '22:45:06'
                },
                {
                    authorId: 1,
                    messageId: shortid.generate(),
                    message: loremIpsum({ count: 3 }),
                    time: '23:40:06'
                },
                {
                    authorId: 1,
                    messageId: shortid.generate(),
                    message: loremIpsum({ count: 3 }),
                    time: '23:45:06'
                },
                {
                    authorId: 1,
                    messageId: shortid.generate(),
                    message: loremIpsum({ count: 3 }),
                    time: '23:50:06'
                }
            ]
        },
        {
            dateMessagesId: shortid.generate(),
            date: 1579219200000, // '17/1/2020'
            dateMessages:     [
                {
                    authorId: 1,
                    messageId: shortid.generate(),
                    message: loremIpsum({ count: 3 }),
                    time: '23:45:06'
                },
                {
                    authorId: 2,
                    messageId: shortid.generate(),
                    message: loremIpsum({ count: 3 }),
                    time: '23:46:06'
                },
                {
                    authorId: 1,
                    messageId: shortid.generate(),
                    message: loremIpsum({ count: 3 }),
                    time: '23:47:06'
                },
                {
                    authorId: 1,
                    messageId: shortid.generate(),
                    message: loremIpsum({ count: 3 }),
                    time: '23:48:06'
                },
                {
                    authorId: 2,
                    messageId: shortid.generate(),
                    message: loremIpsum({ count: 3 }),
                    time: '23:49:06'
                }
            ],
        }
    ],
    [
        {
            dateMessagesId: shortid.generate(),
            date: 1579478400000, // '20/1/2020'
            dateMessages: [
                {
                    authorId: 1,
                    messageId: shortid.generate(),
                    message: loremIpsum({ count: 3 }),
                    time: '23:40:06'
                },
                {
                    authorId: 2,
                    messageId: shortid.generate(),
                    message: loremIpsum({ count: 3 }),
                    time: '04:47:07'
                },
                {
                    authorId: 1,
                    messageId: shortid.generate(),
                    message: loremIpsum({ count: 3 }),
                    time: '06:14:31'
                },
                {
                    authorId: 1,
                    messageId: shortid.generate(),
                    message: loremIpsum({ count: 3 }),
                    time: '06:49:32'
                },
                {
                    authorId: 2,
                    messageId: shortid.generate(),
                    message: loremIpsum({ count: 3 }),
                    time: '08:38:10'
                }
            ]
        },
        {
            dateMessagesId: shortid.generate(),
            date: 1581206400000, // '9/2/2020'
            dateMessages:     [
                {
                    authorId: 1,
                    messageId: shortid.generate(),
                    message: loremIpsum({ count: 3 }),
                    time: '23:40:06'
                },
                {
                    authorId: 3,
                    messageId: shortid.generate(),
                    message: loremIpsum({ count: 3 }),
                    time: '04:47:07'
                },
                {
                    authorId: 1,
                    messageId: shortid.generate(),
                    message: loremIpsum({ count: 3 }),
                    time: '06:14:31'
                },
                {
                    authorId: 3,
                    messageId: shortid.generate(),
                    message: loremIpsum({ count: 3 }),
                    time: '06:49:32'
                },
                {
                    authorId: 1,
                    messageId: shortid.generate(),
                    message: loremIpsum({ count: 3 }),
                    time: '08:38:10'
                }
            ]
        }
    ],
    [
        {
            dateMessagesId: shortid.generate(),
            date: 1596412800000, // '8/3/2020'
            dateMessages: [
                {
                    authorId: 0,
                    messageId: shortid.generate(),
                    message: loremIpsum({ count: 3 }),
                    time: '23:40:06'
                },
                {
                    authorId: 2,
                    messageId: shortid.generate(),
                    message: loremIpsum({ count: 3 }),
                    time: '04:47:07'
                },
                {
                    authorId: 0,
                    messageId: shortid.generate(),
                    message: loremIpsum({ count: 3 }),
                    time: '06:14:31'
                },
                {
                    authorId: 1,
                    messageId: shortid.generate(),
                    message: loremIpsum({ count: 3 }),
                    time: '06:49:32'
                },
                {
                    authorId: 0,
                    messageId: shortid.generate(),
                    message: loremIpsum({ count: 3 }),
                    time: '08:38:10'
                }
            ]
        },
        {
            dateMessagesId: shortid.generate(),
            date: 1583884800000, // '11/3/2020'
            dateMessages: [
                {
                    authorId: 0,
                    messageId: shortid.generate(),
                    message: loremIpsum({ count: 3 }),
                    time: '23:40:06'
                },
                {
                    authorId: 3,
                    messageId: shortid.generate(),
                    message: loremIpsum({ count: 3 }),
                    time: '04:47:07'
                },
                {
                    authorId: 0,
                    messageId: shortid.generate(),
                    message: loremIpsum({ count: 3 }),
                    time: '06:14:31'
                },
                {
                    authorId: 3,
                    messageId: shortid.generate(),
                    message: loremIpsum({ count: 3 }),
                    time: '06:49:32'
                },
                {
                    authorId: 3,
                    messageId: shortid.generate(),
                    message: loremIpsum({ count: 3 }),
                    time: '08:38:10'
                }
            ]
        }
    ],
    [
        {
            dateMessagesId: shortid.generate(),
            date: 1584057600000, // '13/3/2020'
            dateMessages:     [
                {
                    authorId: 1,
                    messageId: shortid.generate(),
                    message: loremIpsum({ count: 3 }),
                    time: '23:40:06'
                },
                {
                    authorId: 3,
                    messageId: shortid.generate(),
                    message: loremIpsum({ count: 3 }),
                    time: '23:41:06'
                },
                {
                    authorId: 1,
                    messageId: shortid.generate(),
                    message: loremIpsum({ count: 3 }),
                    time: '23:42:06'
                },
                {
                    authorId: 0,
                    messageId: shortid.generate(),
                    message: loremIpsum({ count: 3 }),
                    time: '23:43:06'
                },
                {
                    authorId: 2,
                    messageId: shortid.generate(),
                    message: loremIpsum({ count: 3 }),
                    time: '23:44:06'
                }
            ]
        },
        {
            dateMessagesId: shortid.generate(),
            date: 1584144000000, // '14/3/2020'
            dateMessages:     [
                {
                    authorId: 0,
                    messageId: shortid.generate(),
                    message: loremIpsum({ count: 3 }),
                    time: '23:40:06'
                },
                {
                    authorId: 3,
                    messageId: shortid.generate(),
                    message: loremIpsum({ count: 3 }),
                    time: '04:47:07'
                },
                {
                    authorId: 0,
                    messageId: shortid.generate(),
                    message: loremIpsum({ count: 3 }),
                    time: '06:14:31'
                },
                {
                    authorId: 3,
                    messageId: shortid.generate(),
                    message: loremIpsum({ count: 3 }),
                    time: '06:49:32'
                },
                {
                    authorId: 3,
                    messageId: shortid.generate(),
                    message: loremIpsum({ count: 3 }),
                    time: '08:38:10'
                }
            ]
        }
    ]
]

export const AUTHORS = [
    {
        email: 'test1@test.com',
        name: 'The Shrek 1',
        avatar: 'shrek1',
        password: '123456'
    },
    {
        email: 'test2@test.com',
        name: 'The Shrek 2',
        avatar: 'shrek2',
        password: '1234567'
    },
    {
        email: 'test3@test.com',
        name: 'Rick Dalton 1',
        avatar: 'RickDalton1',
        password: '12345678'
    },
    {
        email: 'test4@test.com',
        name: 'Rick Dalton 2',
        avatar: 'RickDalton2',
        password: '123456789'
    }
]