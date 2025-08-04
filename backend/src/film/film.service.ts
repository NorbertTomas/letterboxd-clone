import { Injectable, NotFoundException } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';
//import filmsData from '../data/films.json';
import { film } from '@prisma/client';

@Injectable()
export class FilmService {
  constructor(private readonly databaseService: DatabaseService) {}
  //private films: Film[] = filmsData.films;

  async getFilm(id: number): Promise<film> {
    const desiredFilm = await this.databaseService.film.findUnique({
      where: { id },
    });

    if (!desiredFilm) {
      throw new NotFoundException(`Film with id ${id} not found`);
    }
    return desiredFilm;
  }

  /*
  getFilms(): Film[] {
    const films = this.films.slice(0, 5);

    if (!films) {
      throw new NotFoundException(`Films not found`);
    }
    return films;
  }
    */
}
