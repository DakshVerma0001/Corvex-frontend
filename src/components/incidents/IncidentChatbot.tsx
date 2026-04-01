import { useState } from "react";

interface Message {
  role: "user" | "bot";
  text: string;
}

export default function IncidentChatbot() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "bot",
      text: "Hi 👋 I am your AI Security Assistant. Ask me about this incident."
    }
  ]);

  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = { role: "user", text: input };

    // simple fake AI response
    const botMessage: Message = {
      role: "bot",
      text:
        input.toLowerCase().includes("why")
          ? "This incident was triggered due to multiple failed login attempts indicating a brute force attack."
          : input.toLowerCase().includes("action")
          ? "System automatically blocked the IP and terminated the session."
          : "This looks like suspicious activity. You can investigate logs or containment actions."
    };

    setMessages((prev) => [...prev, userMessage, botMessage]);
    setInput("");
  };

  return (
    <div className="bg-[var(--bg-secondary)] p-4 rounded flex flex-col h-[400px] cyber-glow">
      
      <h1 className="mb-3 text-sm text-[var(--text-secondary)] font-[Orbitron]">
        AI Assistant
      </h1>

      {/* MESSAGES */}
      <div className="flex-1 overflow-y-auto space-y-2 mb-3">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`text-sm p-2 rounded max-w-[80%] ${
              msg.role === "user"
                ? "ml-auto bg-[var(--accent-primary)] text-black"
                : "bg-[var(--bg-tertiary)]"
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>

      {/* INPUT */}
      <div className="flex gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask about this incident..."
          className="flex-1 p-2 bg-[var(--bg-tertiary)] rounded"
        />

        <button
          onClick={handleSend}
          className="px-3 bg-[var(--accent-primary)] text-black rounded cyber-glow font-semibold"
        >
          Send
        </button>
      </div>

    </div>
  );
}