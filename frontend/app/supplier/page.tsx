"use client";
import { Search, MapPin, Star, Package, Phone, ArrowLeft } from "lucide-react";
import Link from "next/link";

const SUPPLIERS = [
  { id: 1, name: "Grosir Sembako Jaya", category: "Bahan Pangan", location: "2.5 km - Bekasi", rating: 4.8, price: "Termurah" },
  { id: 2, name: "Plastik Pack Mandiri", category: "Kemasan", location: "5.0 km - Jakarta", rating: 4.5, price: "Bersaing" },
  { id: 3, name: "Tani Makmur Group", category: "Sayur & Buah", location: "10 km - Bogor", rating: 4.9, price: "Grosir" },
];

export default function SupplierPage() {
  return (
    <div className="max-w-5xl mx-auto space-y-8 pb-20">
      <div className="flex items-center gap-4">
        <Link href="/" className="p-2 hover:bg-white rounded-full border transition-all"><ArrowLeft size={20} /></Link>
        <h1 className="text-2xl font-bold text-gray-800">Cari Supplier</h1>
      </div>

      <div className="relative group">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
        <input type="text" placeholder="Cari bahan baku (Kopi, Gula, Kemasan...)" className="w-full pl-12 pr-4 py-4 bg-white border border-gray-200 rounded-2xl focus:ring-2 focus:ring-indigo-100 outline-none transition-all shadow-sm" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SUPPLIERS.map((s) => (
          <div key={s.id} className="bg-white p-6 rounded-[24px] border border-gray-100 hover:shadow-xl transition-all group">
            <div className="flex justify-between items-start mb-4">
              <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600 font-bold"><Package size={24}/></div>
              <div className="flex items-center gap-1 text-amber-500 font-bold text-sm"><Star size={14} fill="currentColor"/> {s.rating}</div>
            </div>
            <h3 className="font-bold text-gray-800 text-lg">{s.name}</h3>
            <p className="text-indigo-600 text-xs font-bold uppercase tracking-wider mb-3">{s.category}</p>
            <div className="space-y-2 mb-6">
              <div className="flex items-center gap-2 text-gray-500 text-sm"><MapPin size={14}/> {s.location}</div>
              <div className="inline-block bg-green-50 text-green-600 px-2 py-1 rounded text-[10px] font-bold">Harga {s.price}</div>
            </div>
            <button className="w-full py-3 bg-gray-50 rounded-xl text-gray-800 font-bold text-sm group-hover:bg-indigo-600 group-hover:text-white transition-all flex items-center justify-center gap-2">
              <Phone size={16}/> Hubungi Supplier
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}