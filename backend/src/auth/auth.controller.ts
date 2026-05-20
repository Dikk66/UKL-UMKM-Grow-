import { Controller, Post, Body, BadRequestException } from '@nestjs/common';
import { UsersService } from '../users/users.service';

@Controller('auth')
export class AuthController {
  constructor(private usersService: UsersService) {}

  @Post('register')
  async register(@Body() registerDto: any) {
    // Cek apakah email sudah terdaftar
    const userExists = await this.usersService.findByEmail(registerDto.email);
    if (userExists) {
      throw new BadRequestException('Email sudah digunakan');
    }

    const user = await this.usersService.create(registerDto);
    
    // Jangan kirim password kembali ke user
    const { password, ...result } = user;
    return {
      message: 'Registrasi berhasil',
      user: result,
    };
  }
}