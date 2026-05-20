import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from '../users/users.module';

@Module({
  imports: [UsersModule], // Import UsersModule agar bisa pakai UsersService
  providers: [AuthService],
  controllers: [AuthController]
})
export class AuthModule {}