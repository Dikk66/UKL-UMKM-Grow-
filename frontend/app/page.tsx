import { Search, Bell, Play, Calculator, MessageSquare, Briefcase, Wallet, TrendingUp, Package, ChevronRight, Star } from "lucide-react";

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto space-y-10 pb-10">
      
      {/* 1. Header Section */}
      <header className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800">Beranda</h2>
        <div className="flex items-center gap-6">
          <div className="relative group hidden sm:block">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input 
              type="text" 
              placeholder="Cari fitur..." 
              className="pl-10 pr-4 py-2 bg-white border border-gray-200 rounded-full w-64 focus:outline-none focus:border-indigo-600 text-sm"
            />
          </div>
          <Bell className="text-gray-500 cursor-pointer" size={20} />
          <div className="flex items-center gap-2 border-l pl-6">
            <div className="text-right">
              <p className="text-sm font-bold text-gray-800">Raka Putra</p>
              <p className="text-[10px] text-gray-500 uppercase">Pemilik UMKM</p>
            </div>
            <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 font-bold">RP</div>
          </div>
        </div>
      </header>

      {/* 2. Hero Banner */}
      <section className="relative overflow-hidden bg-indigo-50 rounded-[32px] p-8 md:p-12 flex flex-col md:row items-center justify-between border border-indigo-100">
        <div className="space-y-4 z-10">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            Selamat datang, <span className="text-indigo-600">Raka!</span> 👋
          </h1>
          <p className="text-gray-600 max-w-md">
            Kami siap membantu perjalanan usaha kamu menjadi lebih mudah dengan asisten AI.
          </p>
          <button className="bg-indigo-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-indigo-700 transition-all">
            Mulai Sekarang
          </button>
        </div>
        <img 
          src="https://img.freepik.com/free-vector/coffee-shop-concept-illustration_114360-7613.jpg" 
          alt="Illustration" 
          className="w-48 h-48 object-contain mt-6 md:mt-0"
        />
      </section>

      {/* 3. Grid Fitur Utama */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <ActionCard icon={<Play className="text-indigo-600" />} title="Rekomendasi Usaha" color="bg-indigo-600" />
        <ActionCard icon={<Calculator className="text-blue-600" />} title="Kalkulator Laba" color="bg-blue-600" />
        <ActionCard icon={<MessageSquare className="text-purple-600" />} title="AI Konsultasi" color="bg-purple-600" />
        <ActionCard icon={<Briefcase className="text-orange-600" />} title="Lowongan Kerja" color="bg-orange-600" />
      </div>

      {/* 4. Bagian yang Sebelumnya Kosong (Sekarang Diisi Ringkasan & Artikel) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Ringkasan Usaha */}
        <div className="lg:col-span-2 space-y-6">
          <h3 className="text-xl font-bold text-gray-800">Ringkasan Usaha</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <StatCard title="Modal" value="Rp 15.000.000" icon={<Wallet className="text-orange-500" />} bgColor="bg-orange-50" />
            <StatCard title="Laba" value="Rp 3.250.000" icon={<TrendingUp className="text-green-500" />} bgColor="bg-green-50" />
            <StatCard title="Produk" value="150 Unit" icon={<Package className="text-blue-500" />} bgColor="bg-blue-50" />
          </div>
        </div>

        {/* Artikel Populer */}
        <div className="space-y-6">
          <h3 className="text-xl font-bold text-gray-800">Tips Bisnis</h3>
          <div className="space-y-4">
            <div className="flex gap-4 items-center bg-white p-3 rounded-2xl border border-gray-100">
              <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center text-indigo-600 italic font-bold">AI</div>
              <div>
                <h4 className="text-sm font-bold">Cara kelola stok</h4>
                <p className="text-xs text-gray-500">Baca selengkapnya</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

// Komponen Pembantu agar Kode Rapi
function ActionCard({ icon, title, color }: any) {
  return (
    <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
      <div className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center mb-4">{icon}</div>
      <h3 className="font-bold text-gray-800 mb-4">{title}</h3>
      <button className={`${color} text-white w-full py-2 rounded-xl text-sm font-medium`}>Buka</button>
    </div>
  );
}

function StatCard({ title, value, icon, bgColor }: any) {
  return (
    <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
      <div className={`${bgColor} w-10 h-10 rounded-xl flex items-center justify-center mb-4`}>{icon}</div>
      <p className="text-gray-500 text-xs font-medium uppercase">{title}</p>
      <h4 className="text-lg font-bold text-gray-800">{value}</h4>
    </div>
  );
}