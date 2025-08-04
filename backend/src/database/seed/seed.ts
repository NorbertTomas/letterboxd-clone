import { PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker';

const prisma = new PrismaClient();

async function main() {
  for (let i = 0; i < 20; i++) {
    await prisma.film.create({
      data: {
        title: faker.lorem.words(3),
        year: faker.date.past({ years: 50 }).getFullYear(),
        director: faker.person.fullName(),
        genre: faker.helpers.arrayElement([
          'Action',
          'Comedy',
          'Drama',
          'Horror',
          'Sci-Fi',
        ]),
        durationminutes: faker.number.int({ min: 80, max: 180 }),
        rating: parseFloat(faker.number.float({ min: 1, max: 10 }).toFixed(1)),
        image: faker.image.urlPicsumPhotos(),
      },
    });
  }
}
