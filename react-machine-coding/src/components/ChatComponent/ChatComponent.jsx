import React, { useState } from "react";

export const ChatComponent = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  const handleSend = () => {
    if (newMessage.trim()) {
      setMessages([
        ...messages,
        {
          text: newMessage,
          sender: "User",
          timestamp: Date.now(),
          isSender: true,
        },
      ]);
      setNewMessage("");
    }
  };

  return (
    <div>
      <div className="message-list">
        {messages.map((msg, index) => (
          <Message key={index} {...msg} />
        ))}
      </div>
      <div className="message-input">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
};

const Message = ({ text, sender, timestamp, isSender }) => (
  <>
    <div>{text}</div>
    <small>
      {sender} - {new Date(timestamp).toLocaleTimeString()}
    </small>
  </>
);
