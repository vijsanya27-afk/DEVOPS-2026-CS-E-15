function TypingIndicator({ user }) {
    return (
      <div className="typing-indicator">
        <span>{user} is typing</span>
  
        <div className="typing-dots">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    );
  }
  
  export default TypingIndicator;