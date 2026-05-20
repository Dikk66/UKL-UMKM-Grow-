import { Users, Construction } from "lucide-react";
import Link from "next/link";

export default function KomunitasPage() {
  return (
    <div className="h-[80vh] flex flex-col items-center justify-center text-center space-y-4">
      <div className="w-20 h-20 bg-indigo-50 text-indigo-600 rounded-full flex items-center justify-center animate-bounce">
        <Users size={40} />
      </div>
      <h1 className="text-2xl font-bold text-gray-800">Fitur Komunitas Segera Datang</h1>
      <p className="text-gray-500 max-w-sm px-6">Kami sedang menyiapkan ruang diskusi bagi para pelaku UMKM untuk berbagi pengalaman.</p>
      <Link href="/" className="text-indigo-600 font-bold hover:underline">Kembali ke Beranda</Link>
    </div>
  );
}