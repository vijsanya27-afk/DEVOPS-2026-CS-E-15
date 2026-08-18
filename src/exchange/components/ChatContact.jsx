function ChatContact({ user, selected, onSelect }) {
    return (
      <div
        className={`chat-user ${selected ? "active" : ""}`}
        onClick={() => onSelect(user)}
      >
        <span>{user.name}</span>
        <small>{user.skill}</small>
      </div>
    );
  }
  
  export default ChatContact;