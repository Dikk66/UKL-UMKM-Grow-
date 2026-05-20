import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar"; // Path @ mengacu ke root karena tidak ada src

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "UMKM Grow+ | Solusi Digital UMKM",
  description: "Platform AI untuk memajukan UMKM Indonesia",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex bg-gray-50 min-h-screen">
          <Sidebar />
          <main className="flex-1 md:ml-64 p-8">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}