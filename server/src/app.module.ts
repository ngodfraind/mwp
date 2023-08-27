import { Module } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'
import { PrismaService } from './prisma.service'
import { join } from 'path'
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'
import { CarService } from './cars/cars.service'
import { CarResolvers } from './cars/cars.resolver'
import { CarModule } from './cars/cars.module'

@Module({
  imports: [
    CarModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
  ],
  controllers: [],
  providers: [CarResolvers, CarService, PrismaService],
})
export class AppModule {}
