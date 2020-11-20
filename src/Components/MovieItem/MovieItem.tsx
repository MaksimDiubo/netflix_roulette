import React from 'react'

import poster from '../../assets/images/movie-poster-placeholder.png'

import './MovieItem.scss'

interface IMovieItemProps {
  image: string
  title: string
  date: string
  ganre: Array<string>
}

export const MovieItem: React.FC<IMovieItemProps> = ({
  image,
  title,
  date,
  ganre,
}) => {
  return (
    <div className="movie-item">
      <img
        src={image}
        onError={(e: any) => {
          e.target.src = poster
          e.target.onerror = null
        }}
        alt="poster"
        width="345"
        height="465"
      />
      <div className="movie-item__description">
        <h4 className="movie-item__title">{title}</h4>
        <span className="movie-item__date">{date.slice(0, 4)}</span>
        <span className=".movie-item__ganre">{ganre.join(', ')}</span>
      </div>
    </div>
  )
}
