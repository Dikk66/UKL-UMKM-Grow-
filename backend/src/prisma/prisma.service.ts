import {
  Injectable,
  OnModuleInit,
  OnModuleDestroy,
  Inject,
} from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService implements OnModuleInit, OnModuleDestroy {
  // Mengizinkan properti dinamis seperti (this.prisma.user, .transaction, dll)
  [key: string]: any;

  constructor(
    @Inject('PRISMA_CLIENT') private readonly prismaClient: PrismaClient,
  ) {
    // Mengalihkan semua panggilan properti secara dinamis ke instans client yang membawa adapter
    return new Proxy(this, {
      get: (target, prop) => {
        if (prop in target) {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-return
          return target[prop as string];
        }
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-member-access
        return (target.prismaClient as any)[prop];
      },
    });
  }

  async onModuleInit() {
    // Memastikan handshaking ke database aman saat aplikasi menyala
    await this.prismaClient.$connect();
  }

  async onModuleDestroy() {
    // Memutuskan koneksi dengan rapi saat aplikasi dimatikan
    await this.prismaClient.$disconnect();
  }
}
