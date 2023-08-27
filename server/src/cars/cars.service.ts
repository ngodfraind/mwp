import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { Car } from '@prisma/client';
import { NewCar, UpdateCar } from 'src/graphql';

@Injectable()
export class CarService {
  constructor(private prisma: PrismaService) {}

  async car(id: number): Promise<Car | null> {
    return this.prisma.car.findUnique({
      where: {
        id: id,
      },
    });
  }

  async cars(): Promise<Car[]> {
    return this.prisma.car.findMany({orderBy: [{
      id: 'asc'
    }]});
  }

  async createCar(input: NewCar): Promise<Car> {
    return this.prisma.car.create({
      data: input,
    });
  }

  async updateCar(params: UpdateCar): Promise<Car> {
    const { id, vin, manufacturer, model_details, gearbox, color, mileage, first_reg_date } = params;
    return this.prisma.car.update({
      where: {
        id: id
      },
      data: {
        ...(vin && { vin }),
        ...(manufacturer && { manufacturer }),
        ...(model_details && { model_details }),
        ...(gearbox && { gearbox }),
        ...(color && { color }),
        ...(mileage && { mileage }),
        ...(first_reg_date && { first_reg_date }),
      },
    });
  }

  async deleteCar(id: number): Promise<Car> {
    return this.prisma.car.delete({
      where: {
        id: id
      },
    });
  }
}
