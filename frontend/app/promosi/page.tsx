"use client";
import { useState } from "react";
import { Sparkles, Smartphone, Share2, Copy, Check, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function PromosiPage() {
  const [loading, setLoading] = useState(false);
  const [caption, setCaption] = useState("");
  const [copied, setCopied] = useState(false);

  const generateCaption = () => {
    setLoading(true);
    setTimeout(() => {
      setCaption("Lagi haus? ☕ Nikmati kesegaran Kopi Susu Gula Aren kami! Dibuat dari biji kopi pilihan dan gula aren asli. Hanya Rp 15rb! Promo beli 2 gratis 1 minggu ini saja. Yuk mampir! #UMKMGrow #KopiLokal #PromoKopi");
      setLoading(false);
    }, 1500);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(caption);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 pb-20">
      <div className="flex items-center gap-4">
        <Link href="/" className="p-2 hover:bg-white rounded-full border transition-all">
          <ArrowLeft size={20} />
        </Link>
        <h1 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
          <Sparkles className="text-indigo-600"/> Promosi AI Otomatis
        </h1>
      </div>

      <div className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm space-y-6">
        <div>
          <label className="text-sm font-bold text-gray-700 block mb-2">Apa yang ingin kamu promosikan?</label>
          <textarea 
            placeholder="Contoh: Kopi susu gula aren harga 15rb, lagi ada promo beli 2 gratis 1."
            className="w-full p-4 bg-gray-50 border border-gray-200 rounded-2xl h-32 focus:ring-2 focus:ring-indigo-100 outline-none transition-all"
          />
        </div>

        <button onClick={generateCaption} className="w-full bg-indigo-600 text-white py-4 rounded-2xl font-bold hover:bg-indigo-700 transition-all flex items-center justify-center gap-2 shadow-lg shadow-indigo-100">
          {loading ? "AI sedang merangkai kata..." : "Generate Caption & Hashtag"}
        </button>
      </div>

      {caption && (
        <div className="bg-indigo-50 p-8 rounded-[32px] border border-indigo-100 animate-in fade-in zoom-in-95">
          <div className="flex justify-between items-center mb-4 text-indigo-600">
            <div className="flex items-center gap-2 font-bold text-sm uppercase">
              <Smartphone size={18}/> Draft Konten Sosmed
            </div>
            <button 
              className="p-2 hover:bg-white rounded-lg transition-all" 
              onClick={handleCopy}
            >
              {copied ? <Check size={18} className="text-green-500" /> : <Copy size={18}/>}
            </button>
          </div>
          <p className="text-gray-800 leading-relaxed italic">"{caption}"</p>
          <div className="mt-6 flex gap-3">
             <button className="flex-1 bg-white text-indigo-600 py-3 rounded-xl text-sm font-bold border border-indigo-200 hover:bg-indigo-600 hover:text-white transition-all flex items-center justify-center gap-2">
               <Share2 size={16}/> Posting Sekarang
             </button>
          </div>
        </div>
      )}
    </div>
  );
}