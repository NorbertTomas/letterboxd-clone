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
  { title: 'The Shawshank Redemption', image: 'shawshankRedemption.jpg' },
  { title: 'The Dark Knight', image: 'theDarkKnight.jpg' },
  { title: 'Fight Club', image: 'fightClub.jpg' },
  { title: 'Forrest Gump', image: 'forrestGump.jpg' },
  { title: 'Interstellar', image: 'interstellar.jpg' },
  { title: 'Gladiator', image: 'gladiator.png' },
  {
    title: 'The Lord of the Rings: The Fellowship of the Ring',
    image: 'lotrFellowship.jpg',
  },
  {
    title: 'The Lord of the Rings: The Two Towers',
    image: 'lotrTwoTowers.jpg',
  },
  {
    title: 'The Lord of the Rings: The Return of the King',
    image: 'lotrReturnKing.jpg',
  },
  { title: 'Titanic', image: 'titanic.jpg' },
  { title: 'The Silence of the Lambs', image: 'silenceOfTheLambs.jpg' },
  { title: 'Saving Private Ryan', image: 'savingPrivateRyan.jpg' },
  { title: 'Whiplash', image: 'whiplash.jpg' },
  { title: 'La La Land', image: 'laLaLand.jpg' },
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

async function clearDatabase() {
  await prisma.film_ratings.deleteMany();
  await prisma.film.deleteMany();
  await prisma.users.deleteMany();

  await prisma.$executeRaw`TRUNCATE TABLE "film_ratings", "film", "users" RESTART IDENTITY CASCADE;`;
}

async function main() {
  await clearDatabase();

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

  const allFilms = await prisma.film.findMany({ select: { id: true } });
  const allUsers = await prisma.users.findMany({ select: { id: true } });

  for (const user of allUsers) {
    const numberOfFilmsToRate = faker.number.int({
      min: 3,
      max: allFilms.length,
    });
    const filmsToRate = faker.helpers
      .shuffle(allFilms)
      .slice(0, numberOfFilmsToRate);

    for (const film of filmsToRate) {
      await prisma.film_ratings.create({
        data: {
          user_id: user.id,
          film_id: film.id,
          rating: parseFloat(
            faker.number.float({ min: 0, max: 10 }).toFixed(1),
          ),
          rated_at: faker.date.past({ years: 1 }),
        },
      });
    }
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
