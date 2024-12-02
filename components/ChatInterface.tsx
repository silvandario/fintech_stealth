//chatInterface.tsx
"use client"
import { askQuestion } from "@/app/api/chat";
import { useState } from "react";



const ChatInterface = ({ transactions }: { transactions: any[] }) => {
  const [messages, setMessages] = useState<{ sender: string; message: string }[]>(
    []
  );
  const [userInput, setUserInput] = useState("");

  const handleSend = async () => {
    if (!userInput.trim()) return;

    const newMessage = { sender: "user", message: userInput };
    setMessages((prev) => [...prev, newMessage]);

    const responseMessage = {
      sender: "ai",
      message: "Let me cook...",
    };
    setMessages((prev) => [...prev, responseMessage]);

    const response = await askQuestion(userInput, transactions);

    setMessages((prev) =>
      prev.map((msg, idx) =>
        idx === prev.length - 1 ? { ...msg, message: response } : msg
      )
    );

    setUserInput("");
  };

  const handleKeyDown = (e:any) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <div className="chat-interface">
      <div className="messages">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.sender}`}>
            {msg.message}
          </div>
        ))}
      </div>
      <div className="input-area">
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Ask a question..."
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
};

export default ChatInterface;
