import { Module } from '@nestjs/common';
import { CarResolvers } from './cars.resolver'
import { CarService } from './cars.service';
import { PrismaService } from 'src/prisma.service';

@Module({
  providers: [CarResolvers, CarService, PrismaService],
})
export class CarModule {}
