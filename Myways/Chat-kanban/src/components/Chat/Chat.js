import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import MessageList from './MessageList';
import MessageInput from './MessageInput';

const socket = io('localhost:8000'); 

function Chat() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    
    socket.on('newMessage', (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    return () => {
      socket.disconnect(); 
    };
  }, []);

  const sendMessage = (message) => {
    
    socket.emit('sendMessage', message);
  };

  return (
    <div>
      <h2>Chat Room</h2>
      <MessageList messages={messages} />
      <MessageInput onSendMessage={sendMessage} />
    </div>
  );
}

export default Chat;
