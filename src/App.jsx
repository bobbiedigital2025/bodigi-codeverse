import React from "react";
import ChatPanel from "./components/ChatPanel";

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-pastelBlue">
      <div className="w-full max-w-6xl bg-white rounded-2xl shadow-xl overflow-hidden flex">
        <ChatPanel />
        <div className="flex-1 flex items-center justify-center text-gray-600">
          <p>Welcome to BoDiGi CodeVerse ✨</p>
        </div>
      </div>
    </div>
  );
}

export default App;
