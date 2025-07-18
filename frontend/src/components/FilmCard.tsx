import './FilmCard.css';
import type { Film } from '../../../backend/src/types/Film';

type Props = {
  film: Film;
};

export function FilmCard({ film }: Props) {
  return (
    <div className="film-card">
      <div className="film-title">{film.title}</div>
      <div className="film-details">
        {film.year} • Directed by {film.director}
      </div>
      <div className="film-details">
        Duration: {film.durationMinutes} min • Rating: {film.rating}
      </div>
      <div className="film-genres">
        {film.genre.map((g, i) => (
          <span key={i} className="genre-badge">{g}</span>
        ))}
      </div>
      <div className="film-card">
        <img src={`http://localhost:3000/images/${film.image}`} alt={film.title} />
      </div>
    </div>
  );
}
