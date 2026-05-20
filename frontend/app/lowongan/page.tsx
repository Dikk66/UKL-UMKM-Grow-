"use client";

import { useState } from "react";
import { Search, MapPin, Clock, Briefcase, Filter, ArrowLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

const JOBS_DATA = [
  {
    id: 1,
    title: "Kasir Toko",
    company: "Toko Sembako Berkah",
    location: "Jakarta Timur",
    type: "Full Time",
    salary: "Rp 3.500.000",
    image: "https://images.unsplash.com/photo-1604719312563-8912e9223c6a?q=80&w=200&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Barista",
    company: "Kopi Janji Jiwa",
    location: "Jakarta Selatan",
    type: "Full Time",
    salary: "Rp 4.000.000",
    image: "https://images.unsplash.com/photo-1559496417-e7f25cb247f3?q=80&w=200&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Admin Online Shop",
    company: "Fashion Kita",
    location: "Jakarta Barat",
    type: "Part Time",
    salary: "Rp 2.000.000",
    image: "https://images.unsplash.com/photo-1556740758-90de374c12ad?q=80&w=200&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "Content Creator",
    company: "Kuliner Enak",
    location: "Remote",
    type: "Freelance",
    salary: "Project Based",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=200&auto=format&fit=crop"
  }
];

export default function LowonganPage() {
  const [filter, setFilter] = useState("Semua");

  const filteredJobs = filter === "Semua" 
    ? JOBS_DATA 
    : JOBS_DATA.filter(job => job.type === filter);

  return (
    <div className="max-w-5xl mx-auto space-y-8 pb-20">
      
      {/* Header & Search */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <Link href="/" className="p-2 hover:bg-white rounded-full border transition-all">
            <ArrowLeft size={20} />
          </Link>
          <h1 className="text-2xl font-bold text-gray-800">Lowongan Kerja</h1>
        </div>
        
        <div className="relative group">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-indigo-600 transition-colors" size={18} />
          <input 
            type="text" 
            placeholder="Cari posisi atau keahlian..." 
            className="pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-2xl w-full md:w-80 focus:outline-none focus:ring-2 focus:ring-indigo-100 focus:border-indigo-600 transition-all text-sm shadow-sm"
          />
        </div>
      </div>

      {/* Filter Chips */}
      <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-hide">
        <div className="p-2 bg-white rounded-xl border border-gray-100 shadow-sm text-gray-500">
          <Filter size={18} />
        </div>
        {["Semua", "Full Time", "Part Time", "Freelance"].map((type) => (
          <button
            key={type}
            onClick={() => setFilter(type)}
            className={`px-6 py-2 rounded-xl text-sm font-semibold whitespace-nowrap transition-all ${
              filter === type 
              ? "bg-indigo-600 text-white shadow-lg shadow-indigo-100" 
              : "bg-white text-gray-500 border border-gray-100 hover:bg-gray-50"
            }`}
          >
            {type}
          </button>
        ))}
      </div>

      {/* Jobs List */}
      <div className="grid grid-cols-1 gap-4">
        {filteredJobs.map((job) => (
          <div key={job.id} className="group bg-white p-5 rounded-[24px] border border-gray-100 shadow-sm hover:shadow-md hover:border-indigo-100 transition-all flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-5 w-full">
              <img src={job.image} alt={job.title} className="w-16 h-16 rounded-2xl object-cover shadow-inner" />
              <div className="space-y-1">
                <h3 className="font-bold text-gray-800 text-lg group-hover:text-indigo-600 transition-colors">{job.title}</h3>
                <p className="text-sm font-medium text-gray-500">{job.company}</p>
                <div className="flex flex-wrap items-center gap-4 mt-2">
                  <div className="flex items-center gap-1.5 text-xs text-gray-400">
                    <MapPin size={14} className="text-indigo-500" />
                    {job.location}
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-gray-400">
                    <Clock size={14} className="text-indigo-500" />
                    {job.type}
                  </div>
                  <div className="bg-green-50 text-green-600 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider">
                    {job.salary}
                  </div>
                </div>
              </div>
            </div>
            
            <button className="w-full md:w-auto bg-gray-50 text-gray-800 px-6 py-3 rounded-xl font-bold text-sm hover:bg-indigo-600 hover:text-white transition-all flex items-center justify-center gap-2">
              Lamar Sekarang
              <ChevronRight size={16} />
            </button>
          </div>
        ))}
      </div>

      {/* Info UMKM */}
      <div className="bg-indigo-50 p-8 rounded-[32px] border border-indigo-100 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2">
          <h4 className="text-lg font-bold text-indigo-900">Punya usaha dan butuh tim?</h4>
          <p className="text-sm text-indigo-700/80">Pasang lowongan kerja usahamu dan temukan talenta terbaik di komunitas kami.</p>
        </div>
        <button className="bg-indigo-600 text-white px-8 py-4 rounded-2xl font-bold hover:bg-indigo-700 transition-all whitespace-nowrap shadow-lg shadow-indigo-100">
          Buka Lowongan Gratis
        </button>
      </div>

    </div>
  );
}