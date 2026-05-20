"use client";

import { useState, useEffect } from "react";
import { Calculator, Wallet, TrendingUp, ArrowLeft, RefreshCw, Info } from "lucide-react";
import Link from "next/link";

export default function KalkulatorPage() {
  // State untuk input
  const [penjualan, setPenjualan] = useState<number>(0);
  const [modalBahan, setModalBahan] = useState<number>(0);
  const [operasional, setOperasional] = useState<number>(0);
  const [biayaLain, setBiayaLain] = useState<number>(0);

  // State untuk hasil
  const [labaKotor, setLabaKotor] = useState<number>(0);
  const [totalPengeluaran, setTotalPengeluaran] = useState<number>(0);
  const [labaBersih, setLabaBersih] = useState<number>(0);

  // Logika perhitungan otomatis
  useEffect(() => {
    const pengeluaran = modalBahan + operasional + biayaLain;
    const kotor = penjualan - modalBahan;
    const bersih = penjualan - pengeluaran;

    setTotalPengeluaran(pengeluaran);
    setLabaKotor(kotor);
    setLabaBersih(bersih);
  }, [penjualan, modalBahan, operasional, biayaLain]);

  const formatRupiah = (num: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0,
    }).format(num);
  };

  return (
    <div className="max-w-5xl mx-auto space-y-8 pb-20">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Link href="/" className="p-2 hover:bg-white rounded-full border transition-all">
          <ArrowLeft size={20} />
        </Link>
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Kalkulator Keuangan</h1>
          <p className="text-sm text-gray-500">Hitung keuntungan usahamu dengan akurat</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Input Section */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm space-y-6">
            <h3 className="font-bold text-gray-800 flex items-center gap-2">
              <Wallet size={20} className="text-indigo-600" />
              Input Data Penjualan & Biaya
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <InputField 
                label="Total Penjualan / Bulan" 
                value={penjualan} 
                onChange={(e: any) => setPenjualan(Number(e.target.value))} 
                placeholder="Contoh: 12000000"
              />
              <InputField 
                label="Biaya Bahan Baku" 
                value={modalBahan} 
                onChange={(e: any) => setModalBahan(Number(e.target.value))} 
                placeholder="Contoh: 3000000"
              />
              <InputField 
                label="Biaya Operasional (Listrik, Sewa, dll)" 
                value={operasional} 
                onChange={(e: any) => setOperasional(Number(e.target.value))} 
                placeholder="Contoh: 1500000"
              />
              <InputField 
                label="Biaya Lain-lain" 
                value={biayaLain} 
                onChange={(e: any) => setBiayaLain(Number(e.target.value))} 
                placeholder="Contoh: 500000"
              />
            </div>

            <div className="pt-4 border-t border-dashed flex justify-between items-center">
              <div className="flex items-center gap-2 text-amber-600 bg-amber-50 px-4 py-2 rounded-lg text-xs font-medium">
                <Info size={14} />
                Data tidak akan disimpan sebelum Anda menekan "Simpan"
              </div>
              <button 
                onClick={() => {setPenjualan(0); setModalBahan(0); setOperasional(0); setBiayaLain(0);}}
                className="flex items-center gap-2 text-gray-400 hover:text-red-500 transition-colors text-sm font-medium"
              >
                <RefreshCw size={16} /> Reset
              </button>
            </div>
          </div>
        </div>

        {/* Result Section */}
        <div className="space-y-6">
          <div className="bg-indigo-600 p-8 rounded-[32px] text-white shadow-xl shadow-indigo-100 space-y-6">
            <h3 className="font-bold text-lg flex items-center gap-2">
              <TrendingUp size={20} />
              Hasil Analisis
            </h3>

            <div className="space-y-4">
              <ResultItem label="Laba Kotor" value={formatRupiah(labaKotor)} />
              <ResultItem label="Total Pengeluaran" value={formatRupiah(totalPengeluaran)} />
              <div className="pt-4 border-t border-indigo-500/50">
                <p className="text-indigo-200 text-xs uppercase tracking-wider font-bold">Laba Bersih</p>
                <h2 className="text-3xl font-black mt-1">{formatRupiah(labaBersih)}</h2>
              </div>
            </div>

            <button className="w-full bg-white text-indigo-600 py-4 rounded-2xl font-bold hover:bg-indigo-50 transition-all shadow-lg">
              Simpan Perhitungan
            </button>
          </div>

          <div className="bg-white p-6 rounded-[24px] border border-gray-100 shadow-sm">
            <p className="text-xs text-gray-400 leading-relaxed">
              * Perhitungan ini merupakan estimasi berdasarkan input yang Anda berikan. Gunakan fitur <strong>AI Konsultasi</strong> untuk mendapatkan strategi penghematan biaya.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}

// Sub-komponen Input
function InputField({ label, value, onChange, placeholder }: any) {
  return (
    <div className="space-y-2">
      <label className="text-sm font-semibold text-gray-700">{label}</label>
      <div className="relative">
        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 font-medium text-sm">Rp</span>
        <input 
          type="number" 
          value={value === 0 ? "" : value}
          onChange={onChange}
          placeholder={placeholder}
          className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-100 focus:border-indigo-600 transition-all text-sm"
        />
      </div>
    </div>
  );
}

// Sub-komponen Result
function ResultItem({ label, value }: any) {
  return (
    <div className="flex justify-between items-center">
      <span className="text-indigo-100 text-sm">{label}</span>
      <span className="font-bold">{value}</span>
    </div>
  );
}