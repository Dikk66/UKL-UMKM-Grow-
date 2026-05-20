"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  LayoutDashboard, 
  Lightbulb, 
  Calculator, 
  MessageSquare, 
  Briefcase, 
  Truck, 
  Share2, 
  Users, 
  User 
} from "lucide-react";

const menuItems = [
  { icon: LayoutDashboard, label: "Beranda", href: "/" },
  { icon: Lightbulb, label: "Rekomendasi Usaha", href: "/rekomendasi" },
  { icon: Calculator, label: "Kalkulator Keuangan", href: "/kalkulator" },
  { icon: MessageSquare, label: "AI Konsultasi", href: "/ai-chat" },
  { icon: Briefcase, label: "Lowongan Kerja", href: "/lowongan" },
  { icon: Truck, label: "Supplier", href: "/supplier" },
  { icon: Share2, label: "Promosi AI", href: "/promosi" },
  { icon: Users, label: "Komunitas", href: "/komunitas" },
  { icon: User, label: "Profil Saya", href: "/profil" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 h-screen bg-white border-r p-4 hidden md:flex flex-col gap-2 fixed left-0 top-0 z-50">
      <div className="px-4 py-6">
        <h1 className="text-2xl font-bold text-indigo-600 tracking-tight">UMKM Grow+</h1>
      </div>
      
      <nav className="flex-1">
        {menuItems.map((item) => {
          // Logika untuk menentukan apakah menu sedang aktif
          const isActive = pathname === item.href;
          
          return (
            <Link key={item.href} href={item.href}>
              <div 
                className={`flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-all mb-1 group ${
                    isActive 
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-200' 
                    : 'text-gray-500 hover:bg-indigo-50'
                }`}
              >
                <item.icon 
                  size={20} 
                  className={`${isActive ? 'text-white' : 'group-hover:text-indigo-600 transition-colors'}`} 
                />
                <span className="font-medium text-sm">{item.label}</span>
              </div>
            </Link>
          );
        })}
      </nav>

      {/* Bagian Bawah Sidebar (Opsional: Upgrade Premium) */}
      <div className="mt-auto p-4 bg-indigo-50 rounded-2xl">
        <p className="text-[10px] font-bold text-indigo-600 uppercase tracking-widest mb-1">Fitur Premium</p>
        <p className="text-xs text-gray-600 mb-3">Dapatkan analisis AI lebih mendalam.</p>
        <button className="w-full bg-white text-indigo-600 py-2 rounded-lg text-xs font-bold shadow-sm hover:bg-indigo-100 transition-colors">
          Upgrade Sekarang
        </button>
      </div>
    </aside>
  );
}