import React from 'react'

import { ResultCount, Layout, MovieItem } from '../../Components'
import { IMovie } from '../../models'

interface IModalListProps {
  totalAmount: number
  movies: Array<IMovie>
}

export const MoviesList: React.FC<IModalListProps> = ({
  totalAmount,
  movies,
}) => {
  return (
    <>
      <ResultCount totalAmount={totalAmount} />
      <Layout columns={'3'}>
        {movies.map((movie) => {
          return <MovieItem movie={movie} key={movie.id} />
        })}
      </Layout>
    </>
  )
}
