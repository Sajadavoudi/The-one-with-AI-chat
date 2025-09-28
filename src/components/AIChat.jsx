import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Bot, User, Loader2 } from "lucide-react";

// Temporary stub for design purposes
const InvokeLLM = async ({ prompt }) => {
  // Simulate a delay like a real API call
  await new Promise((resolve) => setTimeout(resolve, 500));
  return "This is a placeholder response from the AI assistant. Replace with real LLM later.";
};

export default function AIChat() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: "ai",
      content:
        "Hi! I'm Sajad's AI assistant. I know all about his skills, experience, and projects. What would you like to know about him?",
      timestamp: new Date(),
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!inputMessage.trim() || isLoading) return;

    const userMessage = {
      id: messages.length + 1,
      type: "user",
      content: inputMessage.trim(),
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputMessage("");
    setIsLoading(true);

    try {
      const aiResponse = await InvokeLLM({
        prompt: `You are Sajad Davoudi's personal AI assistant. You help recruiters and visitors learn about Sajad's professional background, skills, and projects. 

Here's key information about Sajad:
- Full-stack developer with expertise in JavaScript, Python, React, Angular, Node.js, Java, C++, PHP
- Experienced in web development, mobile applications, and system administration
- Skilled in databases (MySQL, MongoDB, PostgreSQL, Redis)
- Knowledgeable in cloud technologies (AWS, Azure), Docker, Linux
- Has experience with AI/ML, data science, blockchain, and cybersecurity
- Passionate about creating innovative digital experiences
- Believes in using technology to solve real-world problems
- Active in the developer community and open-source projects
- Creative developer who pushes the boundaries of what's possible
- Has built various projects including interactive portfolios, e-commerce platforms, data analytics tools, system monitors, and AI integrations

User question: "${inputMessage.trim()}"

Please respond as Sajad's AI assistant in a professional yet friendly tone. Keep responses concise but informative. If asked about specific projects, be creative and describe them based on his skills. Always stay in character as his AI assistant.`,
        add_context_from_internet: false,
      });

      const aiMessage = {
        id: messages.length + 2,
        type: "ai",
        content: aiResponse,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      const errorMessage = {
        id: messages.length + 2,
        type: "ai",
        content:
          "I apologize, but I'm having trouble processing your question right now. Please try asking something else about Sajad's background, skills, or projects!",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    }

    setIsLoading(false);
    inputRef.current?.focus();
  };

  const suggestedQuestions = [
    "What programming languages does Sajad know?",
    "Tell me about his recent projects",
    "What's his experience with React?",
    "Does he work with databases?",
    "What makes him stand out as a developer?",
  ];

  const handleSuggestionClick = (question) => {
    setInputMessage(question);
    inputRef.current?.focus();
  };

  return (
    <motion.div
      className="bg-black/20 backdrop-blur-xl border border-white/10 rounded-2xl p-6 max-w-4xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Chat Header */}
      <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
        <div className="w-10 h-10 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center">
          <Bot className="w-5 h-5 text-white" />
        </div>
        <div>
          <h3 className="text-white font-semibold">Sajad's AI Assistant</h3>
          <p className="text-green-400 text-sm">Online & ready to help</p>
        </div>
      </div>

      {/* Messages Container */}
      <div className="h-80 overflow-y-auto mb-4 space-y-4 scrollbar-thin scrollbar-thumb-green-400/20 scrollbar-track-transparent">
        <AnimatePresence>
          {messages.map((message) => (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className={`flex gap-3 ${
                message.type === "user" ? "flex-row-reverse" : "flex-row"
              }`}
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                  message.type === "ai"
                    ? "bg-gradient-to-r from-green-400 to-green-600"
                    : "bg-gradient-to-r from-blue-400 to-blue-600"
                }`}
              >
                {message.type === "ai" ? (
                  <Bot className="w-4 h-4 text-white" />
                ) : (
                  <User className="w-4 h-4 text-white" />
                )}
              </div>
              <div
                className={`max-w-[80%] p-3 rounded-xl ${
                  message.type === "ai"
                    ? "bg-white/5 text-gray-200"
                    : "bg-green-400/10 text-green-100 border border-green-400/20"
                }`}
              >
                <p className="text-sm leading-relaxed">{message.content}</p>
                <p className="text-xs text-gray-500 mt-1">
                  {message.timestamp.toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {isLoading && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex gap-3"
          >
            <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center">
              <Bot className="w-4 h-4 text-white" />
            </div>
            <div className="bg-white/5 p-3 rounded-xl">
              <div className="flex items-center gap-2">
                <Loader2 className="w-4 h-4 text-green-400 animate-spin" />
                <span className="text-gray-300 text-sm">Thinking...</span>
              </div>
            </div>
          </motion.div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Suggested Questions */}
      {messages.length <= 1 && (
        <motion.div
          className="mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <p className="text-gray-400 text-sm mb-3">Try asking:</p>
          <div className="flex flex-wrap gap-2">
            {suggestedQuestions.map((question, index) => (
              <button
                key={index}
                onClick={() => handleSuggestionClick(question)}
                className="px-3 py-2 bg-white/5 hover:bg-green-400/10 border border-white/10 hover:border-green-400/30 rounded-lg text-xs text-gray-300 hover:text-green-300 transition-all duration-200"
              >
                {question}
              </button>
            ))}
          </div>
        </motion.div>
      )}

      {/* Input Form */}
      <form onSubmit={handleSendMessage} className="flex gap-3">
        <input
          ref={inputRef}
          type="text"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          placeholder="Ask me anything about Sajad..."
          className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-green-400/50 transition-colors"
          disabled={isLoading}
        />
        <button
          type="submit"
          disabled={!inputMessage.trim() || isLoading}
          className="bg-gradient-to-r from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 disabled:opacity-50 disabled:cursor-not-allowed text-white p-3 rounded-xl transition-all duration-200 hover:scale-105"
        >
          <Send className="w-5 h-5" />
        </button>
      </form>
    </motion.div>
  );
}
