import React, { useState } from "react";

function ChatPanel() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages([...messages, { text: input, sender: "user" }]);
    setInput("");
  };

  return (
    <div className="w-1/3 bg-pastelPurple/40 p-4 flex flex-col border-r border-gray-300">
      <h2 className="font-bold text-lg mb-3">💬 BoDiGi Assistant</h2>
      <div className="flex-1 overflow-y-auto mb-3 space-y-2">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`p-2 rounded-lg ${
              msg.sender === "user"
                ? "bg-pastelBlue self-end text-right"
                : "bg-white"
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>
      <div className="flex gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
          className="flex-1 p-2 rounded-lg border border-gray-300 focus:outline-none"
        />
        <button
          onClick={handleSend}
          className="bg-pastelGreen px-3 py-2 rounded-lg text-sm font-semibold"
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default ChatPanel;
