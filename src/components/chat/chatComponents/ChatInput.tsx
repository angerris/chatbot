import React, { useState } from "react";

interface ChatInputProps {
  onSendMessage: (message: string) => void;
}
const ChatInput: React.FC<ChatInputProps> = ({ onSendMessage }) => {
  const [message, setMessage] = useState("");

  const handleSendMessage = () => {
    if (message.trim()) {
      onSendMessage(message);
      setMessage("");
    }
  };
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <div className="flex items-center justify-between pt-2">
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder="Reply to Chatbot..."
        className="text-gray-800 flex-grow rounded-lg p-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
      />
      <button
        onClick={handleSendMessage}
        className="ml-3 bg-blue-500 text-white py-3 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
      >
        Send!
      </button>
    </div>
  );
};

export default ChatInput;
