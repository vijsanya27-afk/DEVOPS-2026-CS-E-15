function ChatContact({ user, selected, onSelect }) {
  return (
    <div
      className={`chat-user ${selected ? "active" : ""}`}
      onClick={() => onSelect(user)}
    >
      <div className="chat-user-info">
        <span>{user.name}</span>
        <small>{user.skill}</small>
      </div>

      <span
        className={`user-status ${
          user.online ? "online" : "offline"
        }`}
      >
        <span className="status-dot"></span>
        {user.online ? "Online" : "Offline"}
      </span>
    </div>
  );
}

export default ChatContact;