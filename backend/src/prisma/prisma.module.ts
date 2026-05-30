import { Module, Global } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { PrismaClient } from '@prisma/client';
import { Pool } from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';

@Global()
@Module({
  providers: [
    {
      provide: 'PRISMA_CLIENT',
      useFactory: () => {
        const connectionString = process.env.DATABASE_URL;
        if (!connectionString) {
          throw new Error(
            '❌ ERROR: DATABASE_URL tidak ditemukan di file .env Anda!',
          );
        }

        // Inisialisasi koneksi pooling PostgreSQL fisik via driver 'pg'
        const pool = new Pool({ connectionString });
        const adapter = new PrismaPg(pool);

        // Mengembalikan instans PrismaClient yang valid dengan Driver Adapter sesuai syarat Prisma 7
        return new PrismaClient({ adapter });
      },
    },
    PrismaService,
  ],
  exports: [PrismaService, 'PRISMA_CLIENT'],
})
export class PrismaModule {}
