
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { BookOpen, MessageSquare, Send, User } from "lucide-react";

type ChatMessage = {
  id: string;
  sender: "user" | "ai";
  text: string;
  timestamp: Date;
};

const INITIAL_MESSAGES: ChatMessage[] = [
  {
    id: "1",
    sender: "ai",
    text: "👋 Hello! I'm your AI Career Mentor. I'm here to help you with your career journey. What would you like guidance with today?",
    timestamp: new Date(),
  },
];

const SUGGESTED_QUESTIONS = [
  "How can I improve my resume for tech jobs?",
  "What skills are in high demand for software developers?",
  "Tips for acing a technical interview?",
  "How to negotiate my first job offer?",
  "Best resources to learn web development?",
];

const MentorChat = () => {
  const [messages, setMessages] = useState<ChatMessage[]>(INITIAL_MESSAGES);
  const [newMessage, setNewMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (text: string = newMessage) => {
    if (!text.trim()) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      sender: "user",
      text: text,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setNewMessage("");
    setLoading(true);

    // Simulate AI response with a delay
    setTimeout(() => {
      let response = "";
      
      // Simple keyword-based responses for demonstration
      if (text.toLowerCase().includes("resume") || text.toLowerCase().includes("cv")) {
        response = "To improve your resume, focus on quantifiable achievements rather than just listing responsibilities. Use industry keywords that match job descriptions, and ensure your most relevant experiences are prominently featured. A clean, consistent format is also important for readability.";
      } else if (text.toLowerCase().includes("interview")) {
        response = "For technical interviews, practice coding problems on platforms like LeetCode or HackerRank. Research common questions in your field, prepare stories about your past projects using the STAR method (Situation, Task, Action, Result), and always have thoughtful questions to ask your interviewer.";
      } else if (text.toLowerCase().includes("skill")) {
        response = "In-demand skills for developers currently include React, TypeScript, Node.js, cloud services (AWS/Azure/GCP), and understanding of CI/CD pipelines. Soft skills like communication and teamwork are equally important. Consider which technologies appear frequently in job postings for your target roles.";
      } else if (text.toLowerCase().includes("negotiate")) {
        response = "When negotiating your first job offer, research salary ranges for similar positions in your location. Highlight your unique value and skills during discussions. Consider the total compensation package, including benefits, learning opportunities, and work-life balance—not just the base salary.";
      } else if (text.toLowerCase().includes("resource") || text.toLowerCase().includes("learn")) {
        response = "For web development, free resources like freeCodeCamp, MDN Web Docs, and The Odin Project are excellent starting points. For more structured learning, consider platforms like Frontend Masters, Udemy, or Coursera. Building your own projects and contributing to open source are also invaluable for skill development.";
      } else {
        response = "That's a great question about your career development. The key is to focus on continuous learning and building practical experience through projects. Network with professionals in your target field, and don't hesitate to reach out for mentorship. Would you like more specific advice on any particular aspect?";
      }

      const aiMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: "ai",
        text: response,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, aiMessage]);
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="h-[calc(100vh-8rem)] flex flex-col">
      <div className="bg-career-50 py-4 px-6 border-b">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-career-100">
            <MessageSquare className="h-5 w-5 text-career-600" />
          </div>
          <div>
            <h1 className="font-bold text-lg">AI Career Mentor</h1>
            <p className="text-sm text-gray-500">Your personal guide to career success</p>
          </div>
        </div>
      </div>
      
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex gap-3 ${
              message.sender === "user" ? "justify-end" : "justify-start"
            }`}
          >
            {message.sender === "ai" && (
              <div className="w-8 h-8 rounded-full bg-career-100 flex items-center justify-center flex-shrink-0">
                <MessageSquare className="h-4 w-4 text-career-600" />
              </div>
            )}
            
            <div
              className={`max-w-[80%] rounded-lg p-3 ${
                message.sender === "user"
                  ? "bg-career-600 text-white"
                  : "bg-gray-100"
              }`}
            >
              <p className="whitespace-pre-wrap">{message.text}</p>
              <p
                className={`text-xs mt-1 ${
                  message.sender === "user" ? "text-career-100" : "text-gray-500"
                }`}
              >
                {message.timestamp.toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </p>
            </div>
            
            {message.sender === "user" && (
              <div className="w-8 h-8 rounded-full bg-career-600 flex items-center justify-center flex-shrink-0">
                <User className="h-4 w-4 text-white" />
              </div>
            )}
          </div>
        ))}
        
        {loading && (
          <div className="flex gap-3 justify-start">
            <div className="w-8 h-8 rounded-full bg-career-100 flex items-center justify-center flex-shrink-0">
              <MessageSquare className="h-4 w-4 text-career-600" />
            </div>
            <div className="bg-gray-100 rounded-lg p-4 max-w-[80%]">
              <div className="flex gap-2">
                <div className="w-2 h-2 rounded-full bg-gray-300 animate-pulse"></div>
                <div className="w-2 h-2 rounded-full bg-gray-300 animate-pulse" style={{ animationDelay: "0.2s" }}></div>
                <div className="w-2 h-2 rounded-full bg-gray-300 animate-pulse" style={{ animationDelay: "0.4s" }}></div>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>
      
      {messages.length <= 1 && (
        <div className="px-4 py-3">
          <h3 className="text-sm font-medium mb-2">Suggested questions:</h3>
          <div className="flex flex-wrap gap-2">
            {SUGGESTED_QUESTIONS.map((question, index) => (
              <button
                key={index}
                onClick={() => handleSendMessage(question)}
                className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full px-3 py-1.5 truncate transition-colors"
              >
                {question}
              </button>
            ))}
          </div>
        </div>
      )}
      
      <div className="p-4 border-t">
        <div className="flex gap-2">
          <Input
            placeholder="Type your message..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                handleSendMessage();
              }
            }}
            className="flex-1"
          />
          <Button
            onClick={() => handleSendMessage()}
            disabled={loading || !newMessage.trim()}
            className="bg-career-600 hover:bg-career-700"
          >
            <Send className="h-4 w-4" />
            <span className="sr-only">Send</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MentorChat;
