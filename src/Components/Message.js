// src/components/Message.js
import React from 'react';
import '../App.css'

const Message = ({ message }) => {
  return (
    <div className={`message ${message.sender === 'user' ? 'user' : 'contact'}`}>
      {message.text}
    </div>
  );
};

export default Message;
