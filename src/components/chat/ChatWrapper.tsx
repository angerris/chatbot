import React, { useState } from "react";
import ChatHeader from "./chatComponents/ChatHeader";
import ChatInput from "./chatComponents/ChatInput";
import ChatMessage from "./chatComponents/ChatMessage";
import MessagesWrapper from "./chatComponents/MessagesWrapper";
import TypingIndicator from "./chatComponents/TypingIndicator";

interface MessageType {
  id: number;
  text: string;
  sender: string;
  timestamp: string;
  isSent: boolean;
  isChatbot: boolean;
}

interface ChatWrapperProps {
  onBurgerMenuClick: () => void;
  isOpen: boolean;
}

const ChatWrapper: React.FC<ChatWrapperProps> = ({
  onBurgerMenuClick,
  isOpen
}) => {
  const [messages, setMessages] = useState<MessageType[]>([]);
  const [isTyping, setIsTyping] = useState(false);

  const formatTime = () => {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    return `${hours}:${minutes}`;
  };

  const handleSendMessage = (text: string) => {
    const newMessage: MessageType = {
      id: messages.length,
      text,
      sender: "Me",
      timestamp: formatTime(),
      isSent: true,
      isChatbot: false
    };
    setMessages([...messages, newMessage]);
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      const botResponse: MessageType = {
        id: messages.length + 1,
        text: "This is a chatbot response.",
        sender: "Chatbot",
        timestamp: formatTime(),
        isSent: false,
        isChatbot: true
      };
      setMessages([...messages, newMessage, botResponse]);
    }, 2000);
  };

  return (
    <div className="flex flex-grow flex-col justify-between w-4/6 h-full rounded relative">
      <ChatHeader onBurgerMenuClick={onBurgerMenuClick} isOpen={isOpen} />
      <MessagesWrapper isTyping={isTyping}>
        {messages.map((message) => (
          <ChatMessage
            key={message.id}
            message={message.text}
            sender={message.sender}
            timestamp={message.timestamp}
            isSent={message.isSent}
          />
        ))}
        {isTyping && <TypingIndicator />}
      </MessagesWrapper>
      <ChatInput onSendMessage={handleSendMessage} />
    </div>
  );
};

export default ChatWrapper;
