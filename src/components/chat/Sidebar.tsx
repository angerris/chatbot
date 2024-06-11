import React, { useState } from "react";
import SidebarHeader from "./sidebar/SidebarHeader";
import Conversation from "./sidebar/Conversation";

interface SidebarProps {
  isOpen: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => {
  const [activeConversation, setActiveConversation] = useState<number | null>(
    1
  );

  return (
    <div
      className={`sidebarWrapper flex flex-grow w-2/6 min-h-full gap-4 flex-col rounded ${
        isOpen ? "block" : "hidden"
      }`}
    >
      <SidebarHeader />
      <div className="flex bg-gray-800 h-full flex-col gap-2 overflow-y-auto p-2 rounded">
        <Conversation
          title="Conversation 1"
          isActive={activeConversation === 1}
          onClick={() => setActiveConversation(1)}
        />
        <Conversation
          title="Conversation 2"
          isActive={activeConversation === 2}
          onClick={() => setActiveConversation(2)}
        />
        <Conversation
          title="Conversation 3"
          isActive={activeConversation === 3}
          onClick={() => setActiveConversation(3)}
        />
      </div>
    </div>
  );
};

export default Sidebar;
