import { Controller, Get, Param } from '@nestjs/common';
import { FilmService } from './film.service';

@Controller('film')
export class FilmController {
  constructor(private readonly filmService: FilmService) {}

  @Get(':id')
  getFilms(@Param('id') id: number): number {
    return this.filmService.getFilm(id);
  }
}
