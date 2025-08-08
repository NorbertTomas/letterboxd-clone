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

  async getFilms(): Promise<film[]> {
    const films = await this.databaseService.film.findMany({
      take: 5,
    });

    if (!films) {
      throw new NotFoundException(`Films not found`);
    }
    return films;
  }
}
