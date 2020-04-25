import React from 'react';
import ChatBar from 'components/ChatBar/ChatBar';

const date = new Date()

function App() {
  return (
    <div className="App">
      <ChatBar
        date={`${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`}
        author='The Shrek 2'
        chatName='Group Chat'
        lastMessage='tas odio. Ut sit amet...'
        icon='react'
      />
    </div>
  );
}

export default App;
