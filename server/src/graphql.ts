import { ObjectType, InputType, Field } from '@nestjs/graphql';

@InputType()
export class NewCar {
    @Field()
    vin: string;
    @Field()
    manufacturer: string;
    @Field()
    model_details: string;
    @Field()
    gearbox: string;
    @Field()
    color: string;
    @Field()
    mileage: number;
    @Field(() => Date, { nullable: true })
    first_reg_date?: Date;
}

@InputType()
export class UpdateCar {
    @Field(() => Number)
    id: number;
    @Field(() => String, { nullable: true })
    vin?: Nullable<string>;
    @Field(() => String, { nullable: true })
    manufacturer?: Nullable<string>;
    @Field(() => String, { nullable: true })
    model_details?: Nullable<string>;
    @Field(() => String, { nullable: true })
    gearbox?: Nullable<string>;
    @Field(() => String, { nullable: true })
    color?: Nullable<string>;
    @Field(() => Number, { nullable: true })
    mileage?: Nullable<number>;
    @Field(() => Date, { nullable: true })
    first_reg_date?: Date;
}

@ObjectType()
export class Car {
    @Field()
    id: number;
    @Field()
    vin: string;
    @Field()
    manufacturer: string;
    @Field()
    model_details: string;
    @Field()
    gearbox: string;
    @Field()
    color: string;
    @Field()
    mileage: number;
    @Field(() => Date, { nullable: true })
    first_reg_date?: Date;
}

export abstract class IQuery {
    abstract cars(): Car[] | Promise<Car[]>;

    abstract car(id: number): Nullable<Car> | Promise<Nullable<Car>>;
}

export abstract class IMutation {
    abstract createCar(input?: Nullable<NewCar>): Car | Promise<Car>;

    abstract updateCar(input?: Nullable<UpdateCar>): Nullable<Car> | Promise<Nullable<Car>>;

    abstract deleteCar(id: number): Nullable<Car> | Promise<Nullable<Car>>;
}

type Nullable<T> = T | null;
