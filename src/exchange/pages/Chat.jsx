import { useState } from "react";
import ExchangeLayout from "../components/ExchangeLayout";
import "./Chat.css";

function Chat() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const [selectedUser, setSelectedUser] = useState({
    name: "Priya",
    skill: "Python Exchange",
  });

  const handleSend = (e) => {
    e.preventDefault();

    if (!message.trim()) {
      return;
    }

    setMessages((prev) => [
      ...prev,
      {
        id: Date.now(),
        text: message,
        sender: "You",
      },
    ]);

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

          {/* Conversations */}
          <div className="chat-users">
            <h3>Conversations</h3>

            <div
              className={`chat-user ${
                selectedUser.name === "Priya" ? "active" : ""
              }`}
              onClick={() =>
                setSelectedUser({
                  name: "Priya",
                  skill: "Python Exchange",
                })
              }
            >
              <span>Priya</span>
              <small>Python Exchange</small>
            </div>

            <div
              className={`chat-user ${
                selectedUser.name === "Rahul" ? "active" : ""
              }`}
              onClick={() =>
                setSelectedUser({
                  name: "Rahul",
                  skill: "React Exchange",
                })
              }
            >
              <span>Rahul</span>
              <small>React Exchange</small>
            </div>

            <div
              className={`chat-user ${
                selectedUser.name === "Anjali" ? "active" : ""
              }`}
              onClick={() =>
                setSelectedUser({
                  name: "Anjali",
                  skill: "UI/UX Exchange",
                })
              }
            >
              <span>Anjali</span>
              <small>UI/UX Exchange</small>
            </div>
          </div>

          {/* Chat Box */}
          <div className="chat-box">

            <div className="chat-box-header">
              <h3>{selectedUser.name}</h3>
              <span>{selectedUser.skill}</span>
            </div>

            <div className="messages">
              {messages.length === 0 ? (
                <p className="empty-chat">
                  No messages yet. Start a conversation.
                </p>
              ) : (
                messages.map((msg) => (
                  <div
                    className="message own-message"
                    key={msg.id}
                  >
                    <span>{msg.sender}</span>
                    <p>{msg.text}</p>
                  </div>
                ))
              )}
            </div>

            {/* Message Form */}
            <form
              className="message-form"
              onSubmit={handleSend}
            >
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type a message..."
              />

              <button type="submit">
                Send
              </button>
            </form>

          </div>
        </div>
      </div>
    </ExchangeLayout>
  );
}

export default Chat;