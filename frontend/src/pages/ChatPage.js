import React, { useState } from "react";
import { sendMessageApi } from "../services/chat-service";
import ReactMarkdown from "react-markdown";

const ChatPage = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  // Handle sending message to API
  const sendMessage = async () => {
    if (!input.trim()) return;

    setMessages((prev) => [...prev, { role: "user", text: input }]);
    setLoading(true);

    try {
      const response = await sendMessageApi(input);
      console.log("API Response:", response);
      setMessages((prev) => [
        ...prev,
        { role: "assistant", text: response.response.data },
      ]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", text: "⚠️ Error connecting to API" },
      ]);
    } finally {
      setInput("");
      setLoading(false);
    }
  };

  // Handle Enter key press
  const handleKeyDown = (e) => {
    if (e.key === "Enter") sendMessage();
  };

  return (
    <div className="flex flex-col h-[85vh] bg-gray-100">
      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`p-3 rounded-lg max-w-[70%] ${
              msg.role === "user"
                ? "bg-blue-600 text-white self-end ml-auto"
                : "bg-white border border-gray-300 text-gray-800"
            }`}
          >
            <ReactMarkdown>{msg.text}</ReactMarkdown>
          </div>
        ))}
        {loading && (
          <div className="bg-gray-300 text-gray-700 p-3 rounded-lg w-fit">
            Typing...
          </div>
        )}
      </div>

      {/* Input Box */}
      <div className="p-4 bg-white border-t border-gray-300 flex gap-2">
        <input
          type="text"
          className="flex-1 border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button
          onClick={sendMessage}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatPage;
