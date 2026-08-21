import { useState } from "react";
import ExchangeLayout from "../components/ExchangeLayout";
import ChatContact from "../components/ChatContact";
import "./Chat.css";
import MessageComposer from "../components/MessageComposer";

function Chat() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState({
    Priya: [
      {
        id: 1,
        sender: "Priya",
        text: "Hi! Are you ready for the Python exchange?",
      },
      {
        id: 2,
        sender: "You",
        text: "Yes, I am ready!",
      },
    ],
  
    Rahul: [
      {
        id: 3,
        sender: "Rahul",
        text: "Hi! Let's start our React exchange.",
      },
    ],
  
    Anjali: [
      {
        id: 4,
        sender: "Anjali",
        text: "Ready for the UI/UX exchange?",
      },
    ],
  });
  const [selectedUser, setSelectedUser] = useState({
    name: "Priya",
    skill: "Python Exchange",
  });

  const users = [
    {
      id: 1,
      name: "Priya",
      skill: "Python Exchange",
    },
    {
      id: 2,
      name: "Rahul",
      skill: "React Exchange",
    },
    {
      id: 3,
      name: "Anjali",
      skill: "UI/UX Exchange",
    },
  ];
  const currentMessages = messages[selectedUser.name] || [];
  const hasMessages = currentMessages.length > 0;
  const handleSend = (e, selectedFile = null) => {
    e.preventDefault();

    if (!message.trim()) {
      return;
    }

    setMessages((prev) => ({
      ...prev,
      [selectedUser.name]: [
        ...(prev[selectedUser.name] || []),
        {
          id: Date.now(),
  text: message,
  sender: "You",
  file: selectedFile
    ? {
        name: selectedFile.name,
        type: selectedFile.type,
      }
    : null,
        },
      ],
    }));

    setMessage("");
  };

  return (
    <ExchangeLayout>
      <div className="chat-page">

        <div className="chat-header">
          <h1>Chat</h1>
          <p>Connect with your skill exchange partner.</p>
        </div>

        <div className="chat-container">

          <div className="chat-users">
            <h3>Conversations</h3>

            {users.map((user) => (
              <ChatContact
                key={user.id}
                user={user}
                selected={selectedUser.name === user.name}
                onSelect={setSelectedUser}
              />
            ))}
          </div>

          <div className="chat-box">

            <div className="chat-box-header">
              <h3>{selectedUser.name}</h3>
              <span>{selectedUser.skill}</span>
            </div>

            <div className="messages">
              {!hasMessages ? (
                <p className="empty-chat">
                  No messages yet. Start a conversation.
                </p>
              ) : (
                currentMessages.map((msg) => (
                  <div
                    className="message own-message"
                    key={msg.id}
                  >
                    <span>{msg.sender}</span>
                    <p>{msg.text}</p>
                  {msg.file && (
                <div className="shared-file">
                📎 {msg.file.name}
      </div>
)}

  </div>
  ))
  )}
  </div>

  <MessageComposer
  message={message}
  setMessage={setMessage}
  onSend={handleSend}
/>
          </div>
        </div>
      </div>
    </ExchangeLayout>
  );
}

export default Chat;