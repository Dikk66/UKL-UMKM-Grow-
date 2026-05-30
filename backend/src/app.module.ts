import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { TransactionsModule } from './transactions/transactions.module';

// IMPORT MODUL BARU SESUAI DESAIN UI
import { ChatModule } from './chat/chat.module';
import { SubscriptionsModule } from './subscriptions/subscriptions.module';
import { BusinessModule } from './business/business.module';
import { JobsModule } from './jobs/jobs.module';
import { SuppliersModule } from './suppliers/suppliers.module';
import { CommunityModule } from './community/community.module';
import { AiModule } from './ai/ai.module';

@Module({
  imports: [
    PrismaModule,
    AuthModule,
    UsersModule,
    TransactionsModule,
    ChatModule,            // Mengaktifkan API Chatbot AI
    SubscriptionsModule,   // Mengaktifkan API Akun Premium
    BusinessModule,        // Mengaktifkan API Rekomendasi Usaha
    JobsModule,            // Mengaktifkan API Lowongan Kerja
    SuppliersModule,       // Mengaktifkan API Logistik Supplier
    CommunityModule,       // Mengaktifkan API Forum Diskusi
    AiModule,              // Mengaktifkan API Generator Caption Promosi
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}