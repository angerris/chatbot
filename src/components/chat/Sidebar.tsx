import React, { useState, useEffect } from "react";
import SidebarHeader from "./sidebar/SidebarHeader";
import Conversation from "./sidebar/Conversation";
import {
  Conversation as ConversationTypes,
  deleteConversation,
  queryAllConversations,
  addConversation as addConversationApi
} from "@/services/api";

interface SidebarProps {
  isOpen: boolean;
}
const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => {
  const [conversations, setConversations] = useState<ConversationTypes[]>([]);
  const [activeConversation, setActiveConversation] = useState<number | null>(
    null
  );

  useEffect(() => {
    const fetchConversations = async () => {
      const conversationData = await queryAllConversations();
      const formattedConversations = conversationData.map(
        (conversation, index) => ({
          id: conversation.id,
          title: `${index + 1}`
        })
      );
      setConversations(formattedConversations);
    };
    fetchConversations();
  }, []);

  const addConversation = async () => {
    const conversationData = await queryAllConversations();
    const formattedConversations = conversationData.map(
      (conversation, index) => ({
        id: conversation.id,
        title: `${index + 1}`
      })
    );
    setConversations(formattedConversations);
  };

  const handleConversationClick = (conversationId: number) => {
    setActiveConversation(conversationId);
  };

  const handleDeleteConversation = async (conversationId: number) => {
    await deleteConversation(String(conversationId));
    setConversations((prevConversations) =>
      prevConversations.filter(
        (conversation) => conversation.id !== conversationId
      )
    );
  };

  return (
    <div
      className={`sidebarWrapper flex flex-grow w-2/6 min-h-full gap-4 flex-col rounded ${
        isOpen ? "block" : "hidden"
      }`}
    >
      <SidebarHeader onAddConversation={addConversation} />
      <div className="flex bg-gray-800 h-full flex-col gap-2 overflow-y-auto p-2 rounded">
        {conversations.map((conversation) => (
          <Conversation
            key={conversation.id}
            title={`Conversation ${conversation.title}`}
            isActive={activeConversation === conversation.id}
            onClick={() => handleConversationClick(conversation.id)}
            onDelete={() => handleDeleteConversation(conversation.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
