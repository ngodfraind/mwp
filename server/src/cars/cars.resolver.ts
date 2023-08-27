import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CarService } from './cars.service';
import { Car, NewCar, UpdateCar } from 'src/graphql';

@Resolver('Car')
export class CarResolvers {
  constructor(private readonly carService: CarService) {}

  @Query((returns) => [Car])
  async cars() {
    return this.carService.cars();
  }

  @Query((returns) => Car)
  async car(@Args('id') args: number) {
    return this.carService.car(args);
  }

  @Mutation((returns) => Car)
  async create(@Args('input') args: NewCar) {
    return this.carService.createCar(args);
  }

  @Mutation((returns) => Car)
  async update(@Args('input') args: UpdateCar) {
    return this.carService.updateCar(args);
  }

  @Mutation((returns) => Car) // maybe it should be sthg else
  async delete(@Args('id') args: number) {
    return this.carService.deleteCar(args);
  }
}
