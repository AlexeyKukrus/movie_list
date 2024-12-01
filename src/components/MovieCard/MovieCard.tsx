import React from "react";
import { format } from "date-fns";
import styles from './MovieCard.module.css';
import { Movie } from "../../types/api-types";

interface propTypes {
  movie: Movie
}

export const MovieCard: React.FC<propTypes> = ({movie}) => {
  const truncateText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) {
      return text;
    }

    const lastSpaceIndex = text.lastIndexOf(' ', maxLength);
    if (lastSpaceIndex !== -1) {
      return text.slice(0, lastSpaceIndex).trim() + '...';
    }

    return text.slice(0, maxLength).trim() + '...';
  }
  
  return (
    <div className={styles.card} >
      <img src={` https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={`${movie.title}`} className={styles.poster} />
      <div className={styles.content}>
        <h3 className={styles.title}>{movie.title}</h3>
        <p className={styles.date}>
          {movie.release_date ? format(new Date(movie.release_date), "MMMM dd, yyyy") : ''}
        </p>
        <div className={styles.genres}>
          {movie.genre_ids.map((genre, index) => (
            <span key={index} className={styles.genre}>
              Сomedy
            </span>
          ))}
        </div>
        <p className={styles.description}>{truncateText(movie.overview, 150)}</p>
      </div>
    </div>
  )
}