import { useState } from "react";
import OpenAI from "openai";

const ChatInterface = () => {
    const [messages, setMessages] = useState([
        { role: "system", content: "You are a helpful assistant. You can provide answers based on natural language inputs." },
    ]);
    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSend = async () => {
        if (!input.trim()) return;

        const newMessages = [...messages, { role: "user", content: input }];
        setMessages(newMessages);
        setInput("");
        setLoading(true);

        try {
            const openai = new OpenAI({ apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY });
            const completion = await openai.chat.completions.create({
                model: "gpt-4o-mini",
                messages: newMessages,
            });

            const assistantReply = completion.choices[0].message.content;
            setMessages([...newMessages, { role: "assistant", content: assistantReply }]);
        } catch (error) {
            console.error("Error fetching completion:", error);
            setMessages([...newMessages, { role: "assistant", content: "Sorry, something went wrong." }]);
        } finally {
            setLoading(false);
        }
    };

    const renderMessages = () => {
        return messages.map((msg, index) => (
            <div key={index} className={`message ${msg.role}`}>
                <strong>{msg.role === "user" ? "You" : "Assistant"}: </strong>{msg.content}
            </div>
        ));
    };

    return (
        <div className="chat-container">
            <div className="chat-messages">{renderMessages()}</div>
            <div className="chat-input">
                <input
                    type="text"
                    placeholder="Type your message..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleSend()}
                    disabled={loading}
                />
                <button onClick={handleSend} disabled={loading}>
                    {loading ? "Sending..." : "Send"}
                </button>
            </div>

            <style jsx>{`
                .chat-container {
                    max-width: 600px;
                    margin: 0 auto;
                    display: flex;
                    flex-direction: column;
                    border: 1px solid #ccc;
                    border-radius: 8px;
                    padding: 16px;
                }
                .chat-messages {
                    flex-grow: 1;
                    overflow-y: auto;
                    max-height: 400px;
                    margin-bottom: 16px;
                }
                .message {
                    margin-bottom: 8px;
                }
                .user {
                    text-align: right;
                }
                .assistant {
                    text-align: left;
                }
                .chat-input {
                    display: flex;
                }
                input {
                    flex: 1;
                    padding: 8px;
                    border: 1px solid #ccc;
                    border-radius: 4px;
                    margin-right: 8px;
                }
                button {
                    padding: 8px 16px;
                    border: none;
                    background-color: #0070f3;
                    color: white;
                    border-radius: 4px;
                    cursor: pointer;
                }
                button:disabled {
                    background-color: #ccc;
                    cursor: not-allowed;
                }
            `}</style>
        </div>
    );
};

export default ChatInterface;
