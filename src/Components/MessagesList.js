// src/components/MessagesList.js
import React, { useState } from 'react';
import Message from './Message';
import '../App.css'

const MessagesList = ({ handleAddMessage, messages, selectedContact }) => {


  const handleSendMessage=(event)=>{
    event.preventDefault();
    let message = event.target.elements[0].value;
    if(message != "")
    {
      let msgObj = { "id": message.length + 1, "text": message, "sender": "user" };
      selectedContact.messages.push(msgObj);
      handleAddMessage(selectedContact);
    }
    document.getElementById('msgInput').value = "";
  }
  return (
    <>
    <div className="messages-list">
            <div className='message-top'>
            <div className='img-div'><img src={selectedContact.image}/></div>
            <div className="contact-name-top">{selectedContact.name}
            <span style={{marginLeft:"50px", marginTop:"-2px", fontSize:"larger"}}><i class="fa fa-phone" aria-hidden="true"></i></span>
            <span  style={{marginLeft:"20px", marginTop:"-2px", fontSize:"larger"}}><i class="fa-solid fa-video"></i></span>
            </div>
            
            </div>
      {messages.map((message) => (
        <Message key={message.id} message={message} />
      ))}
      </div>
    <form class="msger-inputarea" onSubmit={(event)=>handleSendMessage(event)}>
    <input id='msgInput' type="text" class="msger-input" placeholder="Enter your message..."/>
    <button type="submit" class="msger-send-btn">Send</button>
  </form>
  </>
  );
};

export default MessagesList;
