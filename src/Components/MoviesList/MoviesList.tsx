import React, { useEffect, useState } from 'react'

import { MovieItem } from '../MovieItem'

interface IModalListProps {
  onEditModalOpen: () => void
  onDeleteModalOpen: () => void
}

interface IMovie {
  title: string
  tagline: string
  vote_average: number
  vote_count: number
  release_date: string
  poster_path: string
  overview: string
  budget: number
  revenue: number
  runtime: number
  genres: Array<string>
  id: number
}

export const MoviesList: React.FC<IModalListProps> = ({
  onEditModalOpen,
  onDeleteModalOpen,
}) => {
  const [movies, setMovies] = useState([] as Array<IMovie>)

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        'http://localhost:4000/movies?search=tarantino'
      )
      const parsedResponse = await response.json()
      const { data } = parsedResponse
      setMovies(data)
    }
    getData()
  }, [])

  if (!movies.length) {
    return <p>Loading...</p>
  }

  return (
    <>
      {movies.map((movie) => {
        const { title, release_date, poster_path, genres, id } = movie
        return (
          <MovieItem
            key={id}
            image={poster_path}
            title={title}
            date={release_date}
            ganre={genres}
            onEditModalOpen={onEditModalOpen}
            onDeleteModalOpen={onDeleteModalOpen}
          />
        )
      })}
    </>
  )
}
