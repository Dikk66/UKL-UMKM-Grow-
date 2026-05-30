import { Controller, Post, Body, BadRequestException, HttpCode, HttpStatus } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(
    private usersService: UsersService,
    private authService: AuthService,
  ) {}

  // Endpoint Register Biasa
  @Post('register')
  async register(@Body() registerDto: any) {
    const userExists = await this.usersService.findByEmail(registerDto.email);
    if (userExists) {
      throw new BadRequestException('Email sudah digunakan');
    }

    const user = await this.usersService.create(registerDto);
    const { password, ...result } = user;
    return {
      message: 'Registrasi berhasil',
      user: result,
    };
  }

  // Endpoint Login Biasa
  @HttpCode(HttpStatus.OK)
  @Post('login')
  async login(@Body() loginDto: any) {
    return this.authService.login(loginDto.email, loginDto.password);
  }

  // Endpoint Login/Register via Google
  @HttpCode(HttpStatus.OK)
  @Post('google')
  async googleAuth(@Body() googleDto: { email: string; name: string; googleId: string; role?: string }) {
    return this.authService.googleLogin(googleDto);
  }
}