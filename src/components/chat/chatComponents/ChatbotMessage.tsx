import React from "react";
import classNames from "classnames";

interface ChatbotMessageProps {
  message: string;
  sender: string;
  timestamp: string;
}
const ChatbotMessage: React.FC<ChatbotMessageProps> = ({
  message,
  sender,
  timestamp
}) => {
  return (
    <div className="flex h-fit justify-start">
      <div
        className={classNames(
          "max-w-xs md:max-w-md lg:max-w-lg p-3 m-2 rounded-lg bg-gray-300 text-gray-900"
        )}
      >
        <div className="text-sm mb-1">
          <span className="font-semibold">{sender}</span>
          <span className="text-gray-500 ml-2 text-xs">{timestamp}</span>
        </div>
        <div className="break-words">{message}</div>
      </div>
    </div>
  );
};

export default ChatbotMessage;
