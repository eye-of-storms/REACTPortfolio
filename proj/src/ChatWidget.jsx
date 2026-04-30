import { useState } from "react";
import "./ChatWidget.css";

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hi! Ask me about my work 👋" },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };

    let botReply = "I'm not sure, but feel free to contact me!";
    if (input.toLowerCase().includes("project")) {
      botReply = "Check out the Projects section above 🚀";
    } else if (input.toLowerCase().includes("contact")) {
      botReply = "You can reach me using the contact form 📩";
    }

    setMessages((prev) => [
      ...prev,
      userMessage,
      { sender: "bot", text: botReply },
    ]);

    setInput("");
  };

  return (
    <div className="chat-widget">
      {open && (
        <div className="chat-box">
          <div className="chat-header">
            <span>Chat Assistant</span>
            <button onClick={() => setOpen(false)}>✕</button>
          </div>

          <div className="chat-body">
            {messages.map((msg, i) => (
              <div key={i} className={`chat-msg ${msg.sender}`}>
                {msg.text}
              </div>
            ))}
          </div>

          <div className="chat-input">
            <input
              type="text"
              placeholder="Ask something..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
            <button onClick={handleSend}>Send</button>
          </div>
        </div>
      )}

      {/* Floating Button */}
      <button
        className="chat-toggle"
        onClick={() => setOpen((prev) => !prev)}
      >
        💬
      </button>
    </div>
  );
}