import { useEffect, useState } from 'react';
import { FilmCard } from './components/FilmCard';
import type { Film } from '../../backend/src/types/Film';
import './App.css'


function App() {
  const [films, setFilms] = useState<Film[]>([]);

  useEffect(() => {
    fetch('http://localhost:3000/film') 
      .then((res) => res.json())
      .then((data) => {
        console.log('Fetched films:', data); // ✅ Log response
        setFilms(data);
      })
  }, []);

  return (
    <div>
      <h1>Letterboxd Clone</h1>
        <div className="film-list">
        {films.map((film) => (
          <FilmCard key={film.id} film={film} />
        ))}
        </div>
    </div>
  );
}

export default App;