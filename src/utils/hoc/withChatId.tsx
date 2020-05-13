import React, { ComponentType } from 'react'
import {
    RouteComponentProps,
    withRouter
} from 'react-router-dom';

export type THocWithChatIdProps = {
    selectedChatId: string
}

export function withChatId<T>(Component: ComponentType<T & THocWithChatIdProps>) {
    return withRouter((props: T & RouteComponentProps) => {
        const {
            location: {
                pathname = ''
            }
        } = props
        const pathnameParts = pathname.split('/')
        const selectedChatId: string = pathnameParts[pathnameParts.length - 1]

        return (
            <Component
                {...props}
                selectedChatId={selectedChatId}
            />
        )
    })
}
