import React from 'react'
import { useDispatch } from 'react-redux'
import { Settings } from '../Settings'
import poster from '../../assets/images/movie-poster-placeholder.png'
import { IMovie } from '../../models'
import { setIsDetailsOpen } from '../Details/detailsSlice'
import { setCurrentMovieId } from '../../Containers/Main/moviesSlice'

import './MovieItem.scss'

interface IMovieItemProps {
  movie: IMovie
}

export const MovieItem: React.FC<IMovieItemProps> = ({
  movie: { id, poster_path, title, release_date, genres },
}) => {
  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(setCurrentMovieId(id))
    dispatch(setIsDetailsOpen(true))
  }

  return (
    <div className="movie-item">
      <img
        src={poster_path}
        onError={(e: any) => {
          e.target.src = poster
          e.target.onerror = null
        }}
        alt="poster"
        width="345"
        height="518"
        onClick={handleClick}
      />
      <Settings id={id} />
      <div className="movie-item__description">
        <h4 className="movie-item__title">{title}</h4>
        <span className="movie-item__date">{release_date.slice(0, 4)}</span>
        <span className="movie-item__genre">{genres.join(', ')}</span>
      </div>
    </div>
  )
}
