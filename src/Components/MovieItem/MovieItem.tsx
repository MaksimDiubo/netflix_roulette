import React from 'react'

import { Settings } from '../Settings'

import poster from '../../assets/images/movie-poster-placeholder.png'

import './MovieItem.scss'

interface IMovieItemProps {
  image: string
  title: string
  date: string
  ganre: Array<string>
  onEditModalOpen: () => void
  onDeleteModalOpen: () => void
}

export const MovieItem: React.FC<IMovieItemProps> = ({
  image,
  title,
  date,
  ganre,
  onEditModalOpen,
  onDeleteModalOpen,
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
      <Settings
        onEditModalOpen={onEditModalOpen}
        onDeleteModalOpen={onDeleteModalOpen}
      />
      <div className="movie-item__description">
        <h4 className="movie-item__title">{title}</h4>
        <span className="movie-item__date">{date.slice(0, 4)}</span>
        <span className="movie-item__genre">{ganre.join(', ')}</span>
      </div>
    </div>
  )
}
