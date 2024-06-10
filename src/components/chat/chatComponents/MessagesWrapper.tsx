import React, { useEffect, useRef } from "react";

interface MessagesWrapperProps {
  children: React.ReactNode;
  isTyping: boolean;
}
const MessagesWrapper: React.FC<MessagesWrapperProps> = ({ children }) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  useEffect(() => {
    scrollToBottom();
    const handleResize = () => {
      scrollToBottom();
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [children]);

  return (
    <div className="flex flex-grow h-full overflow-y-auto flex-col">
      {children}
      <div ref={messagesEndRef} />
    </div>
  );
};

export default MessagesWrapper;
