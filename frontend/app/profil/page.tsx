"use client";
import { User, Mail, MapPin, Building, ShieldCheck, LogOut, ArrowLeft, Camera } from "lucide-react";
import Link from "next/link";

export default function ProfilPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8 pb-20">
      <div className="flex items-center gap-4">
        <Link href="/" className="p-2 hover:bg-white rounded-full border transition-all"><ArrowLeft size={20} /></Link>
        <h1 className="text-2xl font-bold text-gray-800">Profil Saya</h1>
      </div>

      <div className="bg-white rounded-[32px] border border-gray-100 shadow-sm overflow-hidden">
        <div className="h-32 bg-gradient-to-r from-indigo-600 to-purple-600"></div>
        <div className="px-8 pb-8">
          <div className="relative -mt-12 mb-6 flex justify-between items-end">
            <div className="relative group">
              <div className="w-24 h-24 bg-white p-1 rounded-3xl shadow-lg">
                <div className="w-full h-full bg-indigo-100 rounded-2xl flex items-center justify-center text-indigo-600 text-3xl font-bold border-2 border-white">RP</div>
              </div>
              <button className="absolute bottom-0 right-0 p-2 bg-white rounded-xl shadow-md border hover:bg-gray-50 transition-all">
                <Camera size={16} className="text-gray-600" />
              </button>
            </div>
            <button className="bg-indigo-600 text-white px-6 py-2.5 rounded-xl font-bold text-sm hover:shadow-lg transition-all">Edit Profil</button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <ProfileInfo icon={<User size={18}/>} label="Nama Lengkap" value="Raka Putra" />
              <ProfileInfo icon={<Mail size={18}/>} label="Email" value="raka.putra@example.com" />
              <ProfileInfo icon={<MapPin size={18}/>} label="Lokasi" value="Jakarta Selatan, Indonesia" />
            </div>
            <div className="space-y-6">
              <ProfileInfo icon={<Building size={18}/>} label="Jenis Usaha" value="Kuliner (Coffee Shop)" />
              <ProfileInfo icon={<ShieldCheck size={18}/>} label="Status Akun" value="Gratis (Standard)" />
              <button className="w-full flex items-center justify-center gap-2 p-3 text-red-500 font-bold border border-red-100 rounded-xl hover:bg-red-50 transition-all mt-4">
                <LogOut size={18} /> Keluar Akun
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProfileInfo({ icon, label, value }: any) {
  return (
    <div className="flex gap-4 items-center">
      <div className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center text-gray-400">{icon}</div>
      <div>
        <p className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">{label}</p>
        <p className="text-sm font-bold text-gray-800">{value}</p>
      </div>
    </div>
  );
}