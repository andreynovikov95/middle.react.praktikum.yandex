import React, { ComponentType } from 'react'
import {
    RouteComponentProps,
    withRouter
} from 'react-router-dom';

import {
    getLastPathnamePart
} from 'utils/getLastPathnamePart'

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
        const selectedChatId: string = getLastPathnamePart(pathname)

        return (
            <Component
                {...props}
                selectedChatId={selectedChatId}
            />
        )
    })
}
