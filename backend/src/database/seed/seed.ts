import { PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker';

const prisma = new PrismaClient();

const filmData = [
  {title: "Inception", image: "inception.png"},
  {title: "The Godfather", image: "theGodfather.png"},
  {title: "Parasite", image: "parasite.png"},
  {title: "The Matrix", image: "theMatrix.png"},
  {title: "Pulp Fiction", image: "pulpFiction.jpg"},
]

const allGenres = ['Action', 'Comedy', 'Drama', 'Horror', 'Sci-Fi'];

function getRandomGenres() {
  const shuffled = faker.helpers.shuffle(allGenres);
  const count = faker.number.int({ min: 1, max: allGenres.length });

  return shuffled.slice(0, count);
}

async function main() {
  for (let i = 0; i < filmData.length; i++) {
    await prisma.film.create({
      data: {
        title: filmData[i].title,
        year: faker.date.past({ years: 50 }).getFullYear(),
        director: faker.person.fullName(),
        genre: getRandomGenres(),
        durationminutes: faker.number.int({ min: 80, max: 180 }),
        rating: parseFloat(faker.number.float({ min: 1, max: 10 }).toFixed(1)),
        image: filmData[i].image, 
      },
    });
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });