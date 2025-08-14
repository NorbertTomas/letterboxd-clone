import { PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker';
import { encodePassword } from '../../utils/bcrypt';

const prisma = new PrismaClient();

const filmData = [
  { title: 'Inception', image: 'inception.png' },
  { title: 'The Godfather', image: 'theGodfather.png' },
  { title: 'Parasite', image: 'parasite.png' },
  { title: 'The Matrix', image: 'theMatrix.png' },
  { title: 'Pulp Fiction', image: 'pulpFiction.jpg' },
];

const users = [
  { username: 'user1', password: encodePassword('password123') },
  { username: 'user2', password: encodePassword('password1234') },
  { username: 'user3', password: encodePassword('password1235') },
  { username: 'user4', password: encodePassword('password1236') },
  { username: 'user5', password: encodePassword('password1237') },
];

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

  for (let i = 0; i < users.length; i++) {
    await prisma.users.create({
      data: {
        username: users[i].username,
        password: await users[i].password,
      },
    });
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => {
    prisma.$disconnect();
  });
