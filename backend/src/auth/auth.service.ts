import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma/prisma.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
    private prisma: PrismaService,
  ) {}

  // 1. LOGIKA LOGIN BIASA (FORM)
  async login(email: string, pass: string) {
    const user = await this.usersService.findByEmail(email);
    if (!user || !user.password) {
      throw new UnauthorizedException('Email atau password salah');
    }

    const isMatch = await bcrypt.compare(pass, user.password);
    if (!isMatch) {
      throw new UnauthorizedException('Email atau password salah');
    }

    const payload = { sub: user.id, email: user.email, role: user.role };
    return {
      access_token: await this.jwtService.signAsync(payload),
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
        businessName: user.businessName,
      },
    };
  }

  // 2. LOGIKA LOGIN GOOGLE
  async googleLogin(googleData: { email: string; name: string; googleId: string; role?: string }) {
    let user = await this.usersService.findByGoogleId(googleData.googleId);

    if (!user) {
      const emailExists = await this.usersService.findByEmail(googleData.email);
      
      if (emailExists) {
        user = await this.prisma.user.update({
          where: { email: googleData.email },
          data: { googleId: googleData.googleId },
        });
      } else {
        user = await this.usersService.create({
          email: googleData.email,
          name: googleData.name,
          googleId: googleData.googleId,
          role: googleData.role || 'PEMILIK_UMKM',
        });
      }
    }

    const payload = { sub: user.id, email: user.email, role: user.role };
    return {
      access_token: await this.jwtService.signAsync(payload),
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
        businessName: user.businessName,
      },
    };
  }
}