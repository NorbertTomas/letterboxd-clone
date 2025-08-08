import { Module } from '@nestjs/common';
import { FilmController } from './film.controller';
import { FilmService } from './film.service';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [FilmController],
  providers: [FilmService],
})
export class FilmModule {}
