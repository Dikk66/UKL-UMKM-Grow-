import { Controller, Get, Patch, Body, UseGuards, Request } from '@nestjs/common';
import { UsersService } from './users.service';
import { AuthGuard } from '@nestjs/passport'; // <-- SOLUSI AMAN: Pakai Guard bawaan jika file custom Anda tidak ketemu

@Controller('users')
@UseGuards(AuthGuard('jwt')) // <-- Ubah menjadi AuthGuard('jwt') bawaan passport jika JwtAuthGuard lokal error path
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('me')
  async getProfile(@Request() req) {
    const userId = req.user.id; 
    return {
      message: 'Data profil berhasil diambil',
      user: await this.usersService.findById(userId),
    };
  }

  @Patch('update-profile')
  async updateProfile(@Request() req, @Body() updateDto: { name?: string; businessName?: string }) {
    const userId = req.user.id;
    const updatedUser = await this.usersService.updateProfile(userId, updateDto);
    return {
      message: 'Profil UMKM berhasil diperbarui',
      user: updatedUser,
    };
  }
}