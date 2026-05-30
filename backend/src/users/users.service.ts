import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service'; 

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  // 1. Fungsi cari berdasarkan email (untuk login/register biasa)
  async findByEmail(email: string) {
    return this.prisma.user.findUnique({
      where: { email },
    });
  }

  // 2. Fungsi cari berdasarkan Google ID (YANG SEMPAT HILANG)
  // CARI DI DALAM FILE src/users/users.service.ts BARIS SEPERTI INI:
async findByGoogleId(googleId: string) {
  return this.prisma.user.findFirst({ // <-- GANTI dari findUnique MENJADI findFirst
    where: { googleId },
  });
}

  // 3. Fungsi membuat user baru (YANG SEMPAT HILANG)
  async create(data: any) {
    return this.prisma.user.create({
      data,
    });
  }

  // 4. Ambil profil saya (untuk rute /users/me)
  async findById(id: number) {
    const user = await this.prisma.user.findUnique({
      where: { id },
    });
    if (!user) throw new NotFoundException('User tidak ditemukan');
    
    const { password, ...result } = user;
    return result;
  }

  // 5. Update profil toko UMKM
  async updateProfile(id: number, data: { name?: string; businessName?: string }) {
    const user = await this.prisma.user.update({
      where: { id },
      data,
    });
    
    const { password, ...result } = user;
    return result;
  }
}