import React from "react";

interface ConversationProps {
  title: string;
  isActive: boolean;
  onClick: () => void;
  onDelete: () => void;
}

const Conversation: React.FC<ConversationProps> = ({
  title,
  isActive,
  onClick,
  onDelete
}) => {
  return (
    <div
      className={`cursor-pointer flex justify-between w-full px-5 py-4 items-center border border-gray-700 rounded ${
        isActive ? "bg-indigo-600" : ""
      }`}
      onClick={onClick}
    >
      <h4>{title}</h4>
      <div
        onClick={(e) => {
          e.stopPropagation();
          onDelete();
        }}
      >
        <svg
          className="h-8 w-8 text-gray-200"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" />
          <line x1="4" y1="7" x2="20" y2="7" />
          <line x1="10" y1="11" x2="10" y2="17" />
          <line x1="14" y1="11" x2="14" y2="17" />
          <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
          <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
        </svg>
      </div>
    </div>
  );
};

export default Conversation;
