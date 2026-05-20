"use client"; // Menggunakan client component karena ada interaksi state

import { useState } from "react";
import { Send, Bot, User, ArrowLeft, Sparkles, Plus } from "lucide-react";
import Link from "next/link";

export default function AIChatPage() {
  const [messages, setMessages] = useState([
    { role: "ai", text: "Halo! Saya AI Assistant UMKM Grow+. Ada yang bisa saya bantu untuk perkembangan bisnis kamu hari ini?" },
  ]);
  const [input, setInput] = useState("");

  const handleSendMessage = () => {
    if (!input.trim()) return;
    
    // Tambah pesan user
    setMessages([...messages, { role: "user", text: input }]);
    setInput("");

    // Simulasi respon AI (Nanti ini disambungkan ke Backend NestJS)
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        role: "ai", 
        text: "Itu ide yang bagus! Untuk meningkatkan penjualan, saya sarankan kamu fokus pada branding di media sosial. Mau saya buatkan draf caption promosi?" 
      }]);
    }, 1000);
  };

  return (
    <div className="max-w-4xl mx-auto h-[calc(100vh-120px)] flex flex-col bg-white rounded-[32px] shadow-sm border border-gray-100 overflow-hidden">
      
      {/* Header Chat */}
      <div className="p-6 border-b flex items-center justify-between bg-white sticky top-0 z-10">
        <div className="flex items-center gap-4">
          <Link href="/" className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <ArrowLeft size={20} className="text-gray-600" />
          </Link>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-indigo-600 rounded-2xl flex items-center justify-center shadow-lg shadow-indigo-200 text-white">
              <Bot size={24} />
            </div>
            <div>
              <h2 className="font-bold text-gray-800 leading-tight">AI Bisnis Konsultan</h2>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                <p className="text-[10px] text-gray-500 uppercase font-bold tracking-wider">Online Sekarang</p>
              </div>
            </div>
          </div>
        </div>
        <button className="flex items-center gap-2 bg-indigo-50 text-indigo-600 px-4 py-2 rounded-xl text-sm font-bold hover:bg-indigo-100 transition-all">
          <Plus size={18} />
          Sesi Baru
        </button>
      </div>

      {/* Area Chat */}
      <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-slate-50/50">
        {messages.map((msg, index) => (
          <div key={index} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"} animate-in fade-in slide-in-from-bottom-2`}>
            <div className={`flex gap-3 max-w-[80%] ${msg.role === "user" ? "flex-row-reverse" : ""}`}>
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${msg.role === "user" ? "bg-gray-200" : "bg-indigo-600 text-white"}`}>
                {msg.role === "user" ? <User size={18} /> : <Sparkles size={18} />}
              </div>
              <div className={`p-4 rounded-2xl text-sm leading-relaxed ${
                msg.role === "user" 
                ? "bg-indigo-600 text-white rounded-tr-none" 
                : "bg-white text-gray-800 shadow-sm border border-gray-100 rounded-tl-none"
              }`}>
                {msg.text}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Input Chat */}
      <div className="p-6 bg-white border-t">
        <div className="relative flex items-center gap-3">
          <input 
            type="text" 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
            placeholder="Tanyakan apa saja tentang usahamu..."
            className="flex-1 bg-gray-50 border border-gray-200 rounded-2xl px-5 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-100 focus:border-indigo-600 transition-all"
          />
          <button 
            onClick={handleSendMessage}
            className="p-4 bg-indigo-600 text-white rounded-2xl hover:bg-indigo-700 hover:shadow-lg hover:shadow-indigo-200 transition-all active:scale-95"
          >
            <Send size={20} />
          </button>
        </div>
        <p className="text-center text-[10px] text-gray-400 mt-4">
          AI dapat memberikan saran bisnis, strategi marketing, dan ide konten otomatis.
        </p>
      </div>
    </div>
  );
}