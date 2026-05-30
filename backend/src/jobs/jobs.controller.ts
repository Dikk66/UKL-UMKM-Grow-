import { Controller, Get, Post, Body, UseGuards, Request, ForbiddenException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('jobs')
@UseGuards(AuthGuard('jwt'))
export class JobsController {
  constructor(private prisma: PrismaService) {}

  @Get()
  async getJobs() {
    // Pastikan pemanggilan nama tabel menggunakan huruf kecil penuh sesuai Prisma Client
    const data = await this.prisma.job.findMany();
    return { message: 'Daftar lowongan kerja berhasil diambil', data };
  }

  @Post()
  async addJob(@Request() req, @Body() body: { title: string; company: string; location: string; type: string }) {
    const user: any = await this.prisma.user.findUnique({ where: { id: req.user.id } });
    if (!user?.isPremium) {
      throw new ForbiddenException('Fitur pasang lowongan kerja hanya tersedia untuk member Premium');
    }

    const newJob = await this.prisma.job.create({
      data: { ...body, userId: req.user.id },
    });

    return { message: 'Lowongan kerja berhasil ditambahkan', data: newJob };
  }
}