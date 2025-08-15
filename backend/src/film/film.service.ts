import { Injectable, NotFoundException } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';
import { film } from '@prisma/client';

@Injectable()
export class FilmService {
  constructor(private readonly databaseService: DatabaseService) {}

  async getFilm(id: number): Promise<film> {
    const desiredFilm = await this.databaseService.film.findUnique({
      where: { id },
    });

    if (!desiredFilm) {
      throw new NotFoundException(`Film with id ${id} not found`);
    }
    return desiredFilm;
  }

  async getRandomFilms(limit: number): Promise<film[]> {
    const films = await this.databaseService.film.findMany({
      take: limit,
    });

    if (!films) {
      throw new NotFoundException(`Films not found`);
    }
    return films;
  }

  async getRatedFilmsByUser(userId: number, limit: number): Promise<film[]> {
    const ratings = await this.databaseService.film_ratings.findMany({
      where: { user_id: userId },
      take: limit,
      include: {
        film: true,
      },
    });

    return ratings.map((rating) => ({
      ...rating.film,
      userRating: rating.rating,
    }));
  }
}
