// src/components/Conversation.js
import React from 'react';
import '../App.css';

const Conversation = ({ contact, onClick }) => {
  return (
    <div className="conversation" onClick={() => onClick(contact.id)}>
      <div className='img-div'><img src={contact.image} /></div>
      <div>
        <div className="contact-name">{contact.name}<br />
          <div className='contact-text'>{contact.messages[contact.messages.length - 1].text}</div>
        </div>
      </div>
    </div>
  );
};

export default Conversation;
