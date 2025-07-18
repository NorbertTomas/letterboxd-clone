import { Injectable, NotFoundException } from '@nestjs/common';
import filmsData from '../data/films.json';
import { Film } from '../types/Film';

@Injectable()
export class FilmService {
  private films: Film[] = filmsData.films;

  getFilm(id: number): Film {
    const desiredFilm = this.films.find((film) => film.id === id);

    if (!desiredFilm) {
      throw new NotFoundException(`Film with id ${id} not found`);
    }
    return desiredFilm;
  }

  getFilms(): Film[] {
    const films = this.films.slice(0, 3);

    if (!films) {
      throw new NotFoundException(`Films not found`);
    }
    return films;
  }
}
