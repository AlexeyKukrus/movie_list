import React, { useEffect, useState } from "react";

import { MovieCard } from "../MovieCard/MovieCard";

import { getMoviesList } from "../../api/get-methods";
import { Movie } from "../../types/api-types";

import styles from './MovieList.module.css'


export const MovieList = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getMoviesList().then((response) => {
      const updatedList = response.results || []
      setMovies(updatedList)
    }).catch((err) => {
      setError(err)
      console.error(err)
    }).finally(() => {
      setIsLoading(false)
    })
  }, []);

  if (isLoading) {
    return <div>Загрузка...</div>;
  }

  if (error) {
    return <div className={styles.error}>{error}</div>;
  }
  return (
    <div className={styles.list}>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  )
}