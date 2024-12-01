import React, { useEffect, useState } from "react";
import { Spin, Alert } from "antd";

import { MovieCard } from "../MovieCard/MovieCard";

import { getMoviesList } from "../../api/get-methods";
import { Movie } from "../../types/api-types";

import styles from './MovieList.module.css'

export const MovieList: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getMoviesList().then((response) => {
      const updatedList = response.results || []
      setMovies(updatedList)
    }).catch((err) => {
      setError(err instanceof Error ? err.message : String(err))
    }).finally(() => {
      setIsLoading(false)
    })
  }, []);

  if (isLoading) {
    return <Spin className={styles.loader} tip="Loading" size="large" />;
  }

  if (error) {
    return  (
      <div className={styles.error}>
        <Alert message="Error!" description={error} type="error" showIcon />
      </div>
    )
  }

  return (
    <div className={styles.list}>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  )
}