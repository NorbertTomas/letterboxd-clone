import { Injectable, NotFoundException } from '@nestjs/common';
import filmsData from '../data/films.json';

interface Film {
  id: number;
  title: string;
  year: number;
  director: string;
  genre: string[];
  durationMinutes: number;
  rating: number;
}

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
}
