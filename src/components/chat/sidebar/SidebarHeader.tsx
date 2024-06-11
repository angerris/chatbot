import React, { useEffect, useState } from "react";
import { addConversation, getUser } from "@/services/api";

interface SidebarHeaderProps {
  onAddConversation: () => void;
}
const SidebarHeader: React.FC<SidebarHeaderProps> = ({ onAddConversation }) => {
  const [userData, setUserData] = useState<{
    id: string | null;
    name?: string | null;
  }>({
    id: null,
    name: null
  });

  useEffect(() => {
    const fetchUserData = async () => {
      const { user, id } = await getUser();
      if (user) {
        setUserData({ id: id, name: user.name });
      }
    };
    fetchUserData();
  }, []);

  const handleAddConversation = async () => {
    if (userData.id && userData.name) {
      const userId = userData.id;
      const userDataObj = { id: userData.id, name: userData.name };
      await addConversation(userId, userDataObj);
      onAddConversation();
    }
  };

  return (
    <div className="flex justify-between w-full h-16 p-5 border-b border-gray-700 items-center bg-blue-500 rounded sidebarHeader">
      <h4 className="font-bold text-lg">Conversations</h4>
      <div className="flex items-center">
        <div className="cursor-pointer" onClick={handleAddConversation}>
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
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default SidebarHeader;
