import React from "react";
import classNames from "classnames";

interface ChatMessageProps {
  message: string;
  sender: string;
  timestamp: string;
  isSent: boolean;
}
const ChatMessage: React.FC<ChatMessageProps> = ({
  message,
  sender,
  timestamp,
  isSent
}) => {
  return (
    <div
      className={classNames("flex h-fit", {
        "justify-end": isSent,
        "justify-start": !isSent
      })}
    >
      <div
        className={classNames(
          "max-w-xs md:max-w-md lg:max-w-lg p-3 m-2 rounded-lg",
          {
            "bg-blue-500 text-white": isSent,
            "bg-gray-200 text-gray-900": !isSent
          }
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

export default ChatMessage;
