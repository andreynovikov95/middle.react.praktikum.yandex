import React from 'react'

import './EmptyChat.css'

const PLACEHOLDER_TEXT = 'Please select a chat to start messaging'

export const EmptyChat = () => (
    <div className="placeholder">
        <div className="placeholder__text">
            {PLACEHOLDER_TEXT}
        </div>
    </div>
)
