import { Header } from '../components/Header';
import { useEffect, useState } from 'react';
import { FilmCard } from '../components/FilmCard';
import type { Film } from '../../../backend/src/types/Film';
import { Footer } from '../components/Footer';
import './FrontPage.css';

export function FrontPage(){
    const [films, setFilms] = useState<Film[]>([]); // First pos value, second pos func to update the state

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
            <Header />
            <div className="film-list">
                {films.map((film) => (
                    <FilmCard key={film.id} film={film} />
                ))}
            </div>
            <Footer />
        </div>
    );
}