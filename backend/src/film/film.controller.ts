import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { FilmService } from './film.service';
import { film } from '@prisma/client';

@Controller('film')
export class FilmController {
  constructor(private readonly filmService: FilmService) {}

  @Get(':id')
  getFilm(@Param('id', ParseIntPipe) id: number): Promise<film> {
    return this.filmService.getFilm(id);
  }

  @Get()
  getFilms(): Promise<film[]> {
    return this.filmService.getFilms();
  }
}
