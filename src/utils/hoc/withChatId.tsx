import React, { ComponentType } from 'react'
import {
    RouteComponentProps
} from 'react-router-dom';

type TProps = {
    selectedChatId: string
}

export function withChatId<T extends TProps>(Component: ComponentType<T>) {
    return (props: T & RouteComponentProps) => {
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
    }
}
