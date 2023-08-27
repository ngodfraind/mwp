import { PrismaClient, Prisma } from '@prisma/client'

const prisma = new PrismaClient()

const carData: Prisma.CarCreateInput[] = [
  {
    vin: 'W1K1770841V096003',
    manufacturer: 'Mercedes-Benz',
    model_details: 'A -Klasse (BM 177)(03.2018->)',
    gearbox: 'automatic',
    color: 'NACHTSCHWARZ - UNILACK',
    mileage: 29831,
    first_reg_date: new Date('2022-10-14')
  },
  {
    vin: 'WV2ZZZEB4PH029896',
    manufacturer: 'Volkswagen',
    model_details: 'ID.Buzz Bus (EB)(2022->)',
    gearbox: 'other',
    color: 'Starlight Blue Metallic',
    mileage: 7854,
    first_reg_date: new Date('2023-03-01')
  },
  {
    vin: 'WAUZZZFY2N2005515',
    manufacturer: 'Audi',
    model_details: 'Q5 Sportback (FYT)(11.2020->)',
    gearbox: 'automatic',
    color: 'Navarrablau Metallic',
    mileage: 14569,
    first_reg_date: new Date('2022-12-14')
  },
  {
    vin: 'VSSZZZKLXPR030121',
    manufacturer: 'Cupra',
    model_details: 'Leon (KL1)(09.2020->)',
    gearbox: 'automatic',
    color: 'Graphengrau',
    mileage: 10,
  },
  {
    vin: 'WBA4E91020G794414',
    manufacturer: 'BMW',
    model_details: 'Serie 4 Gran Coupe (F36)(2014->)',
    gearbox: 'automatic',
    color: 'IMPERIALBLAU BRILLANTEFFEKT METALLI',
    mileage: 85545,
    first_reg_date: new Date('2020-08-24')
  },
]

async function main() {
  console.log(`Start seeding ...`)
  for (const c of carData) {
    const car = await prisma.car.create({
      data: c,
    })
    console.log(`Created car with id: ${car.id}`)
  }
  console.log(`Seeding finished.`)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
