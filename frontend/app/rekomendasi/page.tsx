"use client";

import { useState } from "react";
import { Lightbulb, Target, ArrowRight, Wallet, MapPin, Sparkles, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function RekomendasiPage() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);

  const generateIdea = () => {
    setLoading(true);
    // Simulasi AI sedang berpikir
    setTimeout(() => {
      setResult({
        title: "Coffee Booth Minimalis",
        match: "98%",
        modal: "Rp 5.000.000 - Rp 8.000.000",
        profit: "Rp 2.000.000 / bulan",
        risk: "Rendah",
        steps: [
          "Cari supplier biji kopi lokal",
          "Sewa booth portable di area perkantoran",
          "Gunakan promosi 'Beli 1 Gratis 1' di minggu pertama"
        ]
      });
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 pb-20">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-gray-800 flex items-center gap-3">
          <Sparkles className="text-indigo-600" />
          Rekomendasi Usaha AI
        </h1>
        <p className="text-gray-500">Beri tahu kami budget dan minatmu, AI akan mencarikan peluang terbaik.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Form Input */}
        <div className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm space-y-6 h-fit">
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700 flex items-center gap-2">
                <Wallet size={16} className="text-indigo-500" /> Modal Tersedia
              </label>
              <select className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-100 outline-none transition-all">
                <option>Di bawah Rp 1 Juta</option>
                <option>Rp 1 - 5 Juta</option>
                <option>Rp 5 - 15 Juta</option>
                <option>Diatas Rp 15 Juta</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700 flex items-center gap-2">
                <MapPin size={16} className="text-indigo-500" /> Lokasi Usaha
              </label>
              <input 
                type="text" 
                placeholder="Misal: Perumahan, Dekat Kampus..." 
                className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-100 outline-none transition-all"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700 flex items-center gap-2">
                <Target size={16} className="text-indigo-500" /> Minat/Keahlian
              </label>
              <div className="flex flex-wrap gap-2">
                {['Kuliner', 'Jasa', 'Teknologi', 'Kerajinan'].map((tag) => (
                  <button key={tag} className="px-4 py-2 rounded-full border border-gray-200 text-xs font-medium hover:bg-indigo-50 hover:border-indigo-200 transition-all">
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <button 
            onClick={generateIdea}
            disabled={loading}
            className="w-full bg-indigo-600 text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-indigo-700 transition-all disabled:opacity-50"
          >
            {loading ? "AI Sedang Menganalisis..." : "Cari Ide Usaha"}
            <ArrowRight size={18} />
          </button>
        </div>

        {/* AI Result Area */}
        <div className="relative">
          {!result && !loading && (
            <div className="h-full min-h-[400px] border-2 border-dashed border-gray-200 rounded-[32px] flex flex-col items-center justify-center text-center p-8">
              <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mb-4">
                <Lightbulb className="text-gray-300" size={32} />
              </div>
              <p className="text-gray-400 font-medium italic">Hasil analisis AI akan muncul di sini setelah Anda mengisi data.</p>
            </div>
          )}

          {loading && (
            <div className="h-full min-h-[400px] bg-white rounded-[32px] border flex flex-col items-center justify-center p-8 space-y-4 animate-pulse">
              <div className="w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600">
                <Sparkles size={40} className="animate-spin-slow" />
              </div>
              <p className="text-indigo-600 font-bold">Menganalisis tren pasar...</p>
            </div>
          )}

          {result && (
            <div className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-[32px] p-8 text-white shadow-xl shadow-indigo-200 space-y-6 animate-in zoom-in-95 duration-300">
              <div className="flex justify-between items-start">
                <span className="bg-white/20 px-3 py-1 rounded-lg text-xs font-bold backdrop-blur-sm">Matching {result.match}</span>
                <Sparkles size={24} />
              </div>
              
              <div>
                <h3 className="text-2xl font-black">{result.title}</h3>
                <p className="text-indigo-100 text-sm mt-1">Berdasarkan lokasi dan modal Anda.</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 p-4 rounded-2xl backdrop-blur-md">
                  <p className="text-[10px] uppercase font-bold text-indigo-200 tracking-wider">Est. Laba</p>
                  <p className="font-bold">{result.profit}</p>
                </div>
                <div className="bg-white/10 p-4 rounded-2xl backdrop-blur-md">
                  <p className="text-[10px] uppercase font-bold text-indigo-200 tracking-wider">Tingkat Risiko</p>
                  <p className="font-bold">{result.risk}</p>
                </div>
              </div>

              <div className="space-y-3">
                <p className="text-sm font-bold border-b border-white/20 pb-2">Langkah Awal:</p>
                {result.steps.map((step: string, i: number) => (
                  <div key={i} className="flex gap-3 text-sm">
                    <CheckCircle2 size={18} className="shrink-0 text-indigo-300" />
                    <p>{step}</p>
                  </div>
                ))}
              </div>

              <button className="w-full bg-white text-indigo-600 py-3 rounded-xl font-bold hover:bg-indigo-50 transition-colors">
                Konsultasikan Detail Ini
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}