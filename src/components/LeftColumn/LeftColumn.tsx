import React from 'react';
import ChatList from 'components/ChatList/ChatList';
import './LeftColumn.css'

function LeftColumn() {
  return (
      <div className='leftColumn'>
      <ChatList />
      </div>
  );
}

export default LeftColumn;
