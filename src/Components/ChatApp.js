// src/components/ChatApp.js
import React, { useEffect, useState } from 'react';
import ConversationsList from './ConversationsList';
import MessagesList from './MessagesList';
import data from '../data.json';
import '../App.css'
import SearchBar from './SearchBar';

const ChatApp = () => {
  const [contacts, setContacts] = useState(data);
  const [selectedContactId, setSelectedContactId] = useState(null);
  const [searchValue, setSearchValue] = useState('');

  //setting the user to show conversatons
  const handleConversationSelect = (contactId) => {
    setSelectedContactId(contactId);
  };

//method to send a message to user
const handleAddMessage = (contactObj) => {
  const updatedContacts = contacts.map((contact) => {
    if (contact.id === contactObj.id) {
      return { ...contact, messages: contactObj.messages };
    }
    return contact;
  });
  setContacts(updatedContacts);
};
 

  const selectedContact = contacts.find((contact) => contact.id === selectedContactId);
  const messages = selectedContact ? selectedContact.messages : [];
  useEffect(()=>{
    setContacts([]);
    setContacts(data.filter((record) =>
      record.name.toLowerCase().includes(searchValue.toLowerCase())))
    },[searchValue])

  return (
    <div className="chat-app">
      <div className="left-sidebar">
        <SearchBar setSearchValue={setSearchValue} searchValue={searchValue} />
        <h2>People</h2>
        <ConversationsList contacts={contacts} onConversationSelect={handleConversationSelect} />
      </div>
      <div className="right-side-view">
        <h2 style={{ display: selectedContact ? "none" : "" }}>Conversation</h2>
        {selectedContact ? (
          <MessagesList handleAddMessage={handleAddMessage} messages={messages} selectedContact={selectedContact} />
        ) : (
          <div>Select a conversation from the left sidebar</div>
        )}
      </div>
    </div>
  );
};

export default ChatApp;
