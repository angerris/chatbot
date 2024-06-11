import React, { useState, MouseEventHandler } from "react";
import Button from "@/components/Buttons";
import ChatWrapper from "@/components/chat/ChatWrapper";
import Sidebar from "@/components/chat/Sidebar";
import Image from "next/image";

interface ChatPageProps {
  handleLogout: MouseEventHandler<HTMLButtonElement>;
}

const ChatPage: React.FC<ChatPageProps> = ({ handleLogout }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <main className="chatWrapper flex h-screen flex-col items-center justify-between ">
      <div className="flex justify-between w-full h-16 px-5 py-4 items-center border-b border-gray-700">
        <Image src="/svg/logo.svg" alt="" width={50} height={50} />
        <div className="w-28">
          <Button onClick={handleLogout}>Logout</Button>
        </div>
      </div>
      <div className="flex flex-grow gap-5 justify-evenly w-full h-full p-5 overflow-hidden chatInnerWrapper">
        {isSidebarOpen && <Sidebar isOpen={isSidebarOpen} />}
        <ChatWrapper onBurgerMenuClick={toggleSidebar} isOpen={isSidebarOpen} />
      </div>
    </main>
  );
};

export default ChatPage;
