import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { FilmService } from './film.service';
import { Film } from 'src/types/Film';

@Controller('film')
export class FilmController {
  constructor(private readonly filmService: FilmService) {}

  @Get(':id')
  getFilm(@Param('id', ParseIntPipe) id: number): Film {
    return this.filmService.getFilm(id);
  }

  @Get()
  getFilms(): Film[] {
    return this.filmService.getFilms();
  }
}
