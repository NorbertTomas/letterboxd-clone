import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  UseGuards,
} from '@nestjs/common';
import { FilmService } from './film.service';
import { film } from '@prisma/client';
import { AuthGuard } from 'src/auth/guards/auth.guard';

@Controller('film')
export class FilmController {
  constructor(private readonly filmService: FilmService) {}

  @Get(':id')
  getFilm(@Param('id', ParseIntPipe) id: number): Promise<film> {
    return this.filmService.getFilm(id);
  }

  @Get()
  getFilms(): Promise<film[]> {
    return this.filmService.getRandomFilms(5);
  }
}
