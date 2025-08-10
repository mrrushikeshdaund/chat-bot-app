import React from "react";
import { MessageCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const HeaderComponent = () => {
  const navigate = useNavigate();
  const handleNewChatAction = () => {
    navigate("/chat");
  };
  return (
    <header className="flex items-center justify-between bg-blue-600 text-white p-4 shadow-md">
      {/* Logo & Title */}
      <div className="flex items-center gap-2">
        <MessageCircle size={28} />
        <h1 className="text-xl font-semibold">AI ChatBot</h1>
      </div>

      {/* Right Side Buttons */}
      <div className="flex items-center gap-4">
        <button
          onClick={handleNewChatAction}
          className="bg-white text-blue-600 px-3 py-1 rounded-lg font-medium hover:bg-blue-100 transition"
        >
          New Chat
        </button>
        <button className="bg-white/20 px-3 py-1 rounded-lg hover:bg-white/30 transition">
          Settings
        </button>
      </div>
    </header>
  );
};

export default HeaderComponent;
