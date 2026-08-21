import { useState } from "react";

function MessageComposer({ message, setMessage, onSend }) {
  const [showEmoji, setShowEmoji] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  const emojis = ["😊", "😂", "❤️", "👍", "🎉", "🔥", "😄", "👏"];

  const handleEmojiClick = (emoji) => {
    setMessage((prev) => prev + emoji);
    setShowEmoji(false);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      setSelectedFile(file);
    }
  };

  const handleRemoveFile = () => {
    setSelectedFile(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!message.trim() && !selectedFile) {
      return;
    }

    onSend(e, selectedFile);
    setSelectedFile(null);
  };

  return (
    <div className="message-composer">

      {/* Emoji Picker */}
      {showEmoji && (
        <div className="emoji-picker">
          {emojis.map((emoji) => (
            <button
              type="button"
              key={emoji}
              className="emoji-button"
              onClick={() => handleEmojiClick(emoji)}
            >
              {emoji}
            </button>
          ))}
        </div>
      )}

      {/* Selected File Preview */}
      {selectedFile && (
        <div className="selected-file">
          <span>📎 {selectedFile.name}</span>

          <button
            type="button"
            className="remove-file"
            onClick={handleRemoveFile}
          >
            ×
          </button>
        </div>
      )}

      <form className="message-form" onSubmit={handleSubmit}>

        {/* Emoji Button */}
        <button
          type="button"
          className="emoji-toggle"
          onClick={() => setShowEmoji((prev) => !prev)}
        >
          😊
        </button>

        {/* File Button */}
        <label className="file-button">
          📎
          <input
            type="file"
            onChange={handleFileChange}
            hidden
          />
        </label>

        {/* Message Input */}
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message..."
        />

        {/* Send Button */}
        <button type="submit">
          Send
        </button>

      </form>
    </div>
  );
}

export default MessageComposer;