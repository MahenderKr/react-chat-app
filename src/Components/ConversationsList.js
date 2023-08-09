// src/components/ConversationsList.js
import React from 'react';
import Conversation from './Conversation';
import '../App.css';

const ConversationsList = ({ contacts, onConversationSelect }) => {
  return (
    <div className="conversations-list">
      {contacts.map((contact) => (
        <Conversation key={contact.id} contact={contact} onClick={onConversationSelect} />
      ))}
    </div>
  );
};

export default ConversationsList;
